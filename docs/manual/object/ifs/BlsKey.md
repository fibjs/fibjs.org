# 对象 BlsKey
椭圆曲线加密算法对象

BlsKey 对象是 fibjs 中用于表示 BLS 密钥的对象。它可以用于构建、导入、导出和操作 BLS 密钥。BLS 密钥是一种公钥加密方式，通常用于身份验证和数据签名，具有在保证安全性的同时提供较高执行速度的特点。

BlsKey 对象提供了多种构造方法，可以从不同的密钥格式中加载密钥。它也提供了一些类似于 toString()、clone()、name、publicKey() 等公共属性和方法，以及一些静态方法，例如 from() 等。可以用这些方法操作 BlsKey 对象。

此外，BlsKey 对象具有 isPrivate()、toJSON(key = "") 等成员属性，可以用于查询密钥是否为私钥以及导出对象的 JSON 格式表示等操作。

BlsKey 对象提供了一组灵活而又强大的 API，可以方便地管理 BLS 密钥，实现身份验证和数据签名等安全需求。

下面我们以一个简单的示例来演示如何使用 BlsKey 对象进行签名和验签：

```JavaScript
var crypto = require('crypto');

// create a private key
var privateKey = new crypto.BlsKey({
    'kty': 'EC',
    'crv': 'BLS12-381-G1',
    'x': 'TPk62yDxSISkoSBRPYkpO%tJmm0tZd4tJeLuCKVFv4UmBPfOQ2aDWrCifANam2wj',
    'd': 'zE-pf24p-l0IT_lMcrX0gStTcsx_k1f7DnJmrN8V7ZU',
});

// sign a message
var message = '这是一条需要签名的消息';
var signature = privateKey.sign(message);

// verify the signature
var publicKey = privateKey.publicKey;
var verify = publicKey.verify(message, signature);

console.log('verification result:', verify);
```

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    PKey [tooltip="PKey", URL="PKey.md", label="{PKey|new PKey()\l|from()\l|name\lkeySize\lalg\lpublicKey\l|isPrivate()\lclone()\lpem()\lder()\ljson()\lequals()\lencrypt()\ldecrypt()\lsign()\lverify()\l}"];
    ECKey [tooltip="ECKey", URL="ECKey.md", label="{ECKey|new ECKey()\l|recover()\l|curve\l|computeSecret()\l}"];
    BlsKey [tooltip="BlsKey", fillcolor="lightgray", id="me", label="{BlsKey|new BlsKey()\l|aggregateSignature()\laggregatePublicKey()\l|bbs_suite\l|bbsSign()\lbbsVerify()\lproofGen()\lproofVerify()\l}"];

    object -> PKey [dir=back];
    PKey -> ECKey [dir=back];
    ECKey -> BlsKey [dir=back];
}
```

## 构造函数
        
### BlsKey
**通过 JSON 格式的密钥构造 BlsKey**

```JavaScript
new BlsKey(Object jsonKey);
```

调用参数:
* jsonKey: Object, JSON 格式的密钥

jsonKey 的格式支持以下两种，私钥：

```JavaScript
{
    "kty": "EC",
    "crv": "BLS12381_G1",
    "x": "tCgCNuUYQotPEsrljWi-lIRIPpzhqsnJV1NPnE7je6glUb-FJm9IYkuv2hbHw22i",
    "d": "TXNvJBBG3h23H5hFJcnRZmYd_j1TqpwtJOllYGU3yyw"
}
```

Bls 公钥：

```JavaScript
{
    "kty": "EC",
    "crv": "BLS12381_G1",
    "x": "tCgCNuUYQotPEsrljWi-lIRIPpzhqsnJV1NPnE7je6glUb-FJm9IYkuv2hbHw22i"
}
```

## 静态函数
        
### aggregateSignature
**合并一组签名为一个单一签名**

```JavaScript
static Buffer BlsKey.aggregateSignature(Array sigs);
```

调用参数:
* sigs: Array, 待合并的一组签名

返回结果:
* [Buffer](Buffer.md), 返回合并的单一签名

--------------------------
### aggregatePublicKey
**合并一组公钥为一个单一公钥**

```JavaScript
static BlsKey BlsKey.aggregatePublicKey(Array keys);
```

调用参数:
* keys: Array, 待合并的一组公钥

返回结果:
* BlsKey, 返回合并的单一公钥

--------------------------
### recover
**从可恢复签名中恢复公钥，仅支持 secp256k1**

```JavaScript
static ECKey BlsKey.recover(Buffer data,
    Buffer sig) async;
```

调用参数:
* data: [Buffer](Buffer.md), 签名的原始数据
* sig: [Buffer](Buffer.md), 可恢复签名

返回结果:
* [ECKey](ECKey.md), 返回包含公钥的对象

--------------------------
### from
**加载一个 DER 格式的密钥**

```JavaScript
static PKey BlsKey.from(Buffer DerKey,
    String password = "");
```

调用参数:
* DerKey: [Buffer](Buffer.md), DER 格式的密钥
* password: String, 解密密码

返回结果:
* [PKey](PKey.md), 返回包含密钥的对象

--------------------------
**加载一个 PEM 格式的密钥**

```JavaScript
static PKey BlsKey.from(String pemKey,
    String password = "");
```

调用参数:
* pemKey: String, PEM 格式的密钥
* password: String, 解密密码

返回结果:
* [PKey](PKey.md), 返回包含密钥的对象

--------------------------
**加载一个 JSON 格式的密钥**

```JavaScript
static PKey BlsKey.from(Object jsonKey);
```

调用参数:
* jsonKey: Object, JSON 格式的密钥

返回结果:
* [PKey](PKey.md), 返回包含密钥的对象

jsonKey 的格式支持以下四种，RSA 私钥：

```JavaScript
{
    "kty": "RSA",
    "n": "0m5lvKpWqy9JS7tV2HIPqHCYHLquSuxIC3F8strIQLJKO3rZmTT96KTnhsOfBO7Y1bI7mnT0PB3_vcHd9ekWMEoZJQw7MuB8KeM_Wn54-elJr5DNLk5bMppSGxX7ZnumiXGG51_X3Yp-_EbGtDG80GxXXix7Mucyo7K25uE0uW8=",
    "e": "AQAB",
    "d": "agN2O9NxMHL1MTMi75WfL9Pxvl-KWXKqZSF6mjzAsF9iKI8euyHIXYFepzU8kual1RsjDhCnzvWqFvZplW8lXqrHf_P-rS_9Y4gBUw6pjnI_DnFIRwWHRvrUHHSCfWOdTCIKdOTkgLZuGFuhEY3RMIW0WSYejjLtftwy0RVxAzk=",
    "p": "6a4G1qmfwWmn1biigN7IVFlkbLf9oVe6g7rOmHxI-hn1GRxKDSVuAUrmR1IhuAnca9M0y7SD-7TUs6wjOxWxaw==",
    "q": "5ofkxFKdPBD0CQHMb9q13AMHUVe0rJ-hSjqqIBrmqApUOneyAcMV76M0QyIQnI2p3POa4Qu_7XChDwRVl7LlDQ==",
    "dp": "2mXGiGwCHl8j-FBWuID-1C6z-BRB3MBEVoeKPOOzxOPruatB3mWEGXsqG7A8SWgV9URxTI2K6P3J6Z7RUpBkvw==",
    "dq": "oagn5vfb5NQqnOpS9xkSsD67cfIj821ZSFlNFYhnuOzNVda7z_qCtnHm4zDPH0lEFXoKYMfBhfqWJpaugttjPQ==",
    "qi": "dqEQgxNmOVFrF4s776hTqeC6oEDila8EvpVb2F2ZvwAOLjCQ66OiAZK1BiYGHqUy0NeqNmtlsLSuBEZQZvqZwg=="
}
```

RSA 公钥：

```JavaScript
{
    "kty": "RSA",
    "n": "0m5lvKpWqy9JS7tV2HIPqHCYHLquSuxIC3F8strIQLJKO3rZmTT96KTnhsOfBO7Y1bI7mnT0PB3_vcHd9ekWMEoZJQw7MuB8KeM_Wn54-elJr5DNLk5bMppSGxX7ZnumiXGG51_X3Yp-_EbGtDG80GxXXix7Mucyo7K25uE0uW8=",
    "e": "AQAB"
}
```

EC 私钥：

```JavaScript
{
    "kty": "EC",
    "crv": "P-521",
    "x": "ATfNNFuuvlGxrTGoXgyfSAGgRNNDnO3rN3k74urKJdVS14RYhdnSwm91Bm-F1l-T1XKlAY2yRnzG9w1Ukvo8c0wL",
    "y": "ASBHqrruB6kdkEUB3vlW3-UIkk4HtKdUeTwN-7m3j2rgZvYR1ffRAapDvWqKGiBjomqWafxokBkbDI0c95f6f4XU",
    "d": "AfkIbUHXfW41njdpoKuqqKludcoLJS8D_oMEwkj-GVaXFNKccIoF5iKGu2c69kNDjo83R_7wyGlfRczsklkik1ST"
}
```

EC 公钥：

```JavaScript
{
    "kty": "EC",
    "crv": "P-521",
    "x": "ATfNNFuuvlGxrTGoXgyfSAGgRNNDnO3rN3k74urKJdVS14RYhdnSwm91Bm-F1l-T1XKlAY2yRnzG9w1Ukvo8c0wL",
    "y": "ASBHqrruB6kdkEUB3vlW3-UIkk4HtKdUeTwN-7m3j2rgZvYR1ffRAapDvWqKGiBjomqWafxokBkbDI0c95f6f4XU"
}
```

## 成员属性
        
### bbs_suite
**String, BBS 签名的加密套件，缺省为 Bls12381Sha256，可修改为 Bls12381Shake256，仅支持 BLS12-381-G2 曲线**

```JavaScript
String BlsKey.bbs_suite;
```

--------------------------
### curve
**String, 返回当前算法的椭圆曲线名称**

```JavaScript
readonly String BlsKey.curve;
```

--------------------------
### name
**String, 返回当前算法名称**

```JavaScript
readonly String BlsKey.name;
```

--------------------------
### keySize
**Integer, 返回当前算法密码长度，以位为单位**

```JavaScript
readonly Integer BlsKey.keySize;
```

--------------------------
### alg
**String, 返回和设置当前对象签名算法**

```JavaScript
readonly String BlsKey.alg;
```

--------------------------
### publicKey
**[PKey](PKey.md), 返回当前密钥的公钥**

```JavaScript
readonly PKey BlsKey.publicKey;
```

返回结果:
* 当前密钥的公钥

## 成员函数
        
### bbsSign
**使用当前私钥签名一组消息，仅支持 BLS12-381-G2 曲线**

```JavaScript
Buffer BlsKey.bbsSign(Array messages,
    Object opts = {}) async;
```

调用参数:
* messages: Array, 指定待签署的消息数组
* opts: Object, 指定签名选项

返回结果:
* [Buffer](Buffer.md), 返回签署的消息

opts 支持以下参数:

```JavaScript
{
    header: Buffer | string // specified header for signature, default is empty
}
```

--------------------------
### bbsVerify
**使用当前公钥验证签名，仅支持 BLS12-381-G2 曲线**

```JavaScript
Boolean BlsKey.bbsVerify(Array messages,
    Buffer sig,
    Object opts = {}) async;
```

调用参数:
* messages: Array, 指定完整的消息数组
* sig: [Buffer](Buffer.md), 指定要验证的签名
* opts: Object, 指定验证选项

返回结果:
* Boolean, 返回验证后的结果

opts 支持以下参数:

```JavaScript
{
    header: Buffer | string // specified header for signature, default is empty
}
```

--------------------------
### proofGen
**使用当前公钥和签名生成一个证明，仅支持 BLS12-381-G2 曲线**

```JavaScript
Buffer BlsKey.proofGen(Buffer sig,
    Array messages,
    Array idx,
    Object opts = {}) async;
```

调用参数:
* sig: [Buffer](Buffer.md), 指定生成证明时使用的签名
* messages: Array, 指定完整的消息数组
* idx: Array, 指定生成证明时使用的消息索引，索引以 1 为基数
* opts: Object, 指定证明选项

返回结果:
* [Buffer](Buffer.md), 返回生成的证明

opts 支持以下参数:

```JavaScript
{
    header: Buffer | string, // specified header for signature, default is empty
    proof_header: Buffer | string // specified header for proof, default is empty
}
```

--------------------------
### proofVerify
**使用当前公钥验证证明，仅支持 BLS12-381-G2 曲线**

```JavaScript
Boolean BlsKey.proofVerify(Array messages,
    Array idx,
    Buffer proof,
    Object opts = {}) async;
```

调用参数:
* messages: Array, 指定根据索引过滤的消息数组
* idx: Array, 指定证明使用的消息索引，索引以 1 为基数
* proof: [Buffer](Buffer.md), 指定生成的证明
* opts: Object, 指定证明选项

返回结果:
* Boolean, 返回验证后的结果

opts 支持以下参数:

```JavaScript
{
    header: Buffer | string, // specified header for signature, default is empty
    proof_header: Buffer | string // specified header for proof, default is empty
}
```

--------------------------
### computeSecret
**使用当前算法计算椭圆曲线 Diffie-Hellman (ECDH) 共享密钥**

```JavaScript
Buffer BlsKey.computeSecret(ECKey publicKey) async;
```

调用参数:
* publicKey: [ECKey](ECKey.md), 指定对方的公钥

返回结果:
* [Buffer](Buffer.md), 返回计算出的共享密钥

--------------------------
### isPrivate
**查询当前密钥是否为私钥**

```JavaScript
Boolean BlsKey.isPrivate();
```

返回结果:
* Boolean, 为 True 表示为私钥

--------------------------
### clone
**复制当前密钥**

```JavaScript
PKey BlsKey.clone();
```

返回结果:
* [PKey](PKey.md), 当前密钥的复制对象

--------------------------
### pem
**返回当前 key 的 PEM 格式编码**

```JavaScript
String BlsKey.pem();
```

返回结果:
* String, 当前 key 的 PEM 格式编码

--------------------------
### der
**返回当前 key 的 DER 格式编码**

```JavaScript
Buffer BlsKey.der();
```

返回结果:
* [Buffer](Buffer.md), 当前 key 的 DER 格式编码

--------------------------
### json
**返回当前 key 的 jwt 格式编码**

```JavaScript
Object BlsKey.json(Object opts = {});
```

调用参数:
* opts: Object, 指定导出选项

返回结果:
* Object, 当前 key 的 jwt 格式编码

opts 支持以下参数:

```JavaScript
{
    compress: false // specify whether to output public key in compressed form
}
```

支持压缩的曲线为：secp192r1, secp192k1, secp256r1, secp256k1, brainpoolP256r1,
               secp384r1, brainpoolP384r1, brainpoolP512r1, secp521r1, sm2

--------------------------
### equals
**比较两个公/私钥是否相同**

```JavaScript
Boolean BlsKey.equals(object key);
```

调用参数:
* key: [object](object.md), 指定对方的公/私钥

返回结果:
* Boolean, 相同则返回 true

--------------------------
### encrypt
**使用当前算法密码公钥加密数据**

```JavaScript
Buffer BlsKey.encrypt(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 指定要加密的数据

返回结果:
* [Buffer](Buffer.md), 返回加密后的数据

--------------------------
### decrypt
**使用当前算法密码私钥解密数据**

```JavaScript
Buffer BlsKey.decrypt(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 指定要解密的数据

返回结果:
* [Buffer](Buffer.md), 返回解密后的数据

--------------------------
### sign
**使用当前算法密码私钥签名数据**

```JavaScript
Buffer BlsKey.sign(Buffer data,
    Object opts = {}) async;
```

调用参数:
* data: [Buffer](Buffer.md), 指定要签名的数据，当算法为 RSA，需对入参以 alg 指定的算法做 [hash](../../module/ifs/hash.md)
* opts: Object, 指定签名选项

返回结果:
* [Buffer](Buffer.md), 返回签名后的数据

opts 支持以下参数:

```JavaScript
{
    alg: 0, // specify the hash algorithm for signing, only valid for RSA, default is 0. Supported algorithms: 0=NONE,1=MD5,2=SHA1,3=SHA224,4=SHA256,5=SHA384,6=SHA512,7=RIPEMD160
    format: "der", // specify the signature format, default is der, supported formats: der, raw
    recoverable: false // specify whether to return a recoverable signature, only valid for secp256k1
}
```

--------------------------
### verify
**使用当前算法密码公钥验证数据**

```JavaScript
Boolean BlsKey.verify(Buffer data,
    Buffer sign,
    Object opts = {}) async;
```

调用参数:
* data: [Buffer](Buffer.md), 指定要验证的数据
* sign: [Buffer](Buffer.md), 指定要验证的签名
* opts: Object, 指定验证选项

返回结果:
* Boolean, 返回验证后的结果

opts 支持以下参数:

```JavaScript
{
    alg: 0, // specify the hash algorithm for signing, only valid for RSA, default is 0. Supported algorithms: 0=NONE,1=MD5,2=SHA1,3=SHA224,4=SHA256,5=SHA384,6=SHA512,7=RIPEMD160
    format: "der" // specify the signature format, default is der, supported formats: der, raw
}
```

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String BlsKey.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value BlsKey.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

