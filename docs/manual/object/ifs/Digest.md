# 对象 Digest
信息摘要对象

可以这样使用 Digest 对象:
```
const crypto = require('crypto');
// create a SHA-512 digest object
const digest = crypto.createHash('sha512');
// update digest with data
digest.update('hello');
digest.update('world');
// get digest result
const result = digest.digest();
console.log(result);

// output result in hex and base64
console.log(result.toString('hex'));
console.log(result.toString('base64'));
```
上述代码中，使用 `crypto.createHash()` 方法创建了一个 SHA-512 摘要运算对象，可以通过 `update()` 方法逐步添加要进行摘要的数据，并通过 `digest()` 方法获取摘要结果。

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    Digest [tooltip="Digest", fillcolor="lightgray", id="me", label="{Digest|size\l|update()\ldigest()\lsign()\lverify()\l}"];

    object -> Digest [dir=back];
}
```

## 成员属性
        
### size
**Integer, 查询当前信息摘要算法的摘要字节数**

```JavaScript
readonly Integer Digest.size;
```

## 成员函数
        
### update
**更新二进制摘要信息**

```JavaScript
Digest Digest.update(Buffer data);
```

调用参数:
* data: [Buffer](Buffer.md), 二进制数据块

返回结果:
* Digest, 返回信息摘要对象本身

--------------------------
**更新字符串摘要信息**

```JavaScript
Digest Digest.update(String data,
    String codec = "utf8");
```

调用参数:
* data: String, 字符串数据
* codec: String, 指定编码格式，允许值为："buffer", "[hex](../../module/ifs/hex.md)", "[base32](../../module/ifs/base32.md)", "[base58](../../module/ifs/base58.md)", "[base64](../../module/ifs/base64.md)", "utf8", 或者 [iconv](../../module/ifs/iconv.md) 模块支持的字符集

返回结果:
* Digest, 返回信息摘要对象本身

--------------------------
### digest
**计算并返回摘要**

```JavaScript
Value Digest.digest(String codec = "buffer");
```

调用参数:
* codec: String, 指定编码格式，允许值为："buffer", "[hex](../../module/ifs/hex.md)", "[base32](../../module/ifs/base32.md)", "[base58](../../module/ifs/base58.md)", "[base64](../../module/ifs/base64.md)", "utf8", 或者 [iconv](../../module/ifs/iconv.md) 模块支持的字符集

返回结果:
* Value, 返回指定编码的摘要表示

--------------------------
### sign
**签名并返回摘要**

```JavaScript
Buffer Digest.sign(PKey key,
    Object opts = {}) async;
```

调用参数:
* key: [PKey](PKey.md), 签名的私钥
* opts: Object, 指定签名选项

返回结果:
* [Buffer](Buffer.md), 返回签名后的数据

opts 支持以下参数:

```JavaScript
{
    alg: 0 指定签名的 hash 算法， 仅在 RSA 时有效， 缺省为 0. 支持算法: 0 = NONE,
    1 = MD5,
    2 = SHA1,
    3 = SHA224,
    4 = SHA256,
    5 = SHA384,
    6 = SHA512,
    7 = RIPEMD160
}
```

--------------------------
### verify
**验证签名是否一致**

```JavaScript
Boolean Digest.verify(PKey key,
    Buffer sign,
    Object opts = {}) async;
```

调用参数:
* key: [PKey](PKey.md), 验证签名的公钥
* sign: [Buffer](Buffer.md), 指定要验证的签名
* opts: Object, 指定验证选项

返回结果:
* Boolean, 返回验证后的结果

opts 支持以下参数:

```JavaScript
{
    alg: 0 指定签名的 hash 算法， 仅在 RSA 时有效， 缺省为 0. 支持算法: 0 = NONE,
    1 = MD5,
    2 = SHA1,
    3 = SHA224,
    4 = SHA256,
    5 = SHA384,
    6 = SHA512,
    7 = RIPEMD160
}
```

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String Digest.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value Digest.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

