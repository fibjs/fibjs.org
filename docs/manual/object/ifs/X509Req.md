# 对象 X509Req
X509Req 对象是用于创建 x509 证书请求的对象，属于 [crypto](../../module/ifs/crypto.md) 模块

可以通过它的构造函数创建 X509Req 的实例，在构造函数中可以传入参数指定证书的主题可分辨名称和公钥，例如：

```JavaScript
var crypto = require('crypto');

let pky = crypto.PKey.from(private_pem);
let req = new crypto.X509Req("CN=localhost,O=fibjs", pky);
```

可以通过该实例调用其父类的方法和属性来获取证书请求对象的信息，例如：

```JavaScript
// return the DER format of the certificate request
let derReq = req.der();

// return the PEM format of the certificate request
let pemReq = req.pem();
```

也可以对 X509Req 对象进行签名，生成正式的证书对象，例如：

```JavaScript
let opt = {
    notBefore: new Date('2019-01-01') // valid from 2019-01-01
        ,
    notAfter: new Date('2029-12-31') // valid to 2029-12-31
};
let crt = req.sign("CN=myy.mkx", pky, opt);
// CN=myy.mkx is the issuer of the certificate
```

需要注意的是，X509Req 对象的作用是创建 x509 证书请求，而不是证书本身，要想获得有效的证书还需要对其进行签名。同时，签名证书所使用的公钥必须和证书请求中使用的公钥一致。

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    X509Req [tooltip="X509Req", fillcolor="lightgray", id="me", label="{X509Req|new X509Req()\l|subject\lpublicKey\lsig_md\lsig_pk\l|import()\lpem()\lder()\lsign()\l}"];

    object -> X509Req [dir=back];
}
```

## 构造函数
        
### X509Req
**X509Req 构造函数**

```JavaScript
new X509Req();
```

--------------------------
**X509Req 构造函数，根据给定的信息创建一个证书请求**

```JavaScript
new X509Req(String subject,
    PKey key,
    Integer hash = hash.SHA256);
```

调用参数:
* subject: String, 证书的主题可分辨名称
* key: [PKey](PKey.md), 证书的公钥
* hash: Integer, 证书摘要算法，缺省为 [hash.SHA256](../../module/ifs/hash.md#SHA256)

--------------------------
**X509Req 构造函数，加载一个 DER 格式的证书请求**

```JavaScript
new X509Req(Buffer derReq);
```

调用参数:
* derReq: [Buffer](Buffer.md), DER 格式的证书请求

--------------------------
**X509Req 构造函数，加载一个 PEM 格式的证书请求**

```JavaScript
new X509Req(String pemReq);
```

调用参数:
* pemReq: String, DER 格式的证书请求

## 成员属性
        
### subject
**String, 获取证书的主题可分辨名称**

```JavaScript
readonly String X509Req.subject;
```

--------------------------
### publicKey
**[PKey](PKey.md), 获取证书的公钥**

```JavaScript
readonly PKey X509Req.publicKey;
```

--------------------------
### sig_md
**Integer, 获取证书的摘要算法**

```JavaScript
readonly Integer X509Req.sig_md;
```

--------------------------
### sig_pk
**Integer, 获取证书的签名算法**

```JavaScript
readonly Integer X509Req.sig_pk;
```

## 成员函数
        
### import
**加载一个 DER 格式的证书请求**

```JavaScript
X509Req.import(Buffer derReq);
```

调用参数:
* derReq: [Buffer](Buffer.md), DER 格式的证书请求

--------------------------
**加载一个 PEM 格式的证书请求**

```JavaScript
X509Req.import(String pemReq);
```

调用参数:
* pemReq: String, PEM 格式的证书请求

--------------------------
### pem
**返回当前证书请求的 PEM 格式编码**

```JavaScript
String X509Req.pem();
```

返回结果:
* String, 当前证书请求的 PEM 格式编码

--------------------------
### der
**返回当前证书请求的 DER 格式编码**

```JavaScript
Buffer X509Req.der();
```

返回结果:
* [Buffer](Buffer.md), 当前证书请求的 DER 格式编码

--------------------------
### sign
**签名当前证书请求为正式证书**

```JavaScript
X509Cert X509Req.sign(String issuer,
    PKey key,
    Object opts = {}) async;
```

调用参数:
* issuer: String, 签名机构的可分辨名称
* key: [PKey](PKey.md), 签名机构的私钥
* opts: Object, 其他可选参数

返回结果:
* [X509Cert](X509Cert.md), 返回签名后的正式证书

opts 接收的字段如下：

```JavaScript
{
    ca: false, // specify if the certificate is a CA certificate, default is false
    pathlen: -1, // specify the path length of the certificate, default is -1
    notBefore: "", // specify the certificate valid from date, default is current date
    notAfter: "", // specify the certificate valid to date, default is 365 days after current date
    usage: "", // specify the certificate usage, accept: digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment, keyAgreement, keyCertSign, cRLSign
    type: "" // specify the certificate Netscape certificate type, accept: client, server, email, objsign, reserved, sslCA, emailCA, objCA
}
```

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String X509Req.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value X509Req.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

