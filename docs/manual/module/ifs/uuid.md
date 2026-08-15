# 模块 uuid
uuid 模块提供唯一 id 的创建于操作。它可以用于生成符合各种不同要求的 UUID(Universally Unique Identifier)

`uuid` 模块提供了多个静态函数，可以用于配置和生成不同种类的 UUID。
以下是使用 md5 创建 uuid 的例子:

```JavaScript
const uuid = require('uuid');
const ns = uuid.DNS;
const name = 'example.com';
console.log(uuid.md5(ns, name));
```

在以上例子中，首先引入了 uuid 模块，然后指定了名字空间和名称，并通过 md5 算法生成了符合要求的 UUID，并输出到控制台。
同样，我们还可以使用 snowflake 算法生成 uuid，以下是使用 snowflake 算法创建 uuid 的例子：

```JavaScript
const uuid = require('uuid');
const s = uuid.snowflake();
console.log(s);
```

在以上例子中，snowflake() 方法会返回一个 [Buffer](../../object/ifs/Buffer.md) 对象，可以将其转换为字符串后输出到控制台，以获取生成的 uuid。

## 静态函数
        
### parse
**解析 uuid 字符串**

```JavaScript
static Buffer uuid.parse(String uuid);
```

调用参数:
* uuid: String, 要解析的 uuid 字符串

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解析后的二进制 id

--------------------------
### stringify
**将二进制数组转换为 uuid 字符串**

```JavaScript
static String uuid.stringify(Buffer arr,
    Integer offset = 0);
```

调用参数:
* arr: [Buffer](../../object/ifs/Buffer.md), 包含 uuid 二进制数据的数组或 [Buffer](../../object/ifs/Buffer.md)，长度需不少于 16 字节
* offset: Integer, 可选，指定 uuid 数据在数组中的起始偏移，默认为 0

返回结果:
* String, 返回转换后的 uuid 字符串

--------------------------
### v1
**使用时间戳创建 uuid**

```JavaScript
static String uuid.v1(Object options = {});
```

调用参数:
* options: Object, 可选参数对象，支持以下属性：node（[Buffer](../../object/ifs/Buffer.md)，节点 ID）、clockseq（Integer，时钟序列）、msecs（Integer，毫秒时间戳）、nsecs（Integer，纳秒时间戳）

返回结果:
* String, 返回一个生成的 uuid 字符串

--------------------------
### v3
**使用 MD5 命名空间创建 uuid（二进制命名空间格式）**

```JavaScript
static String uuid.v3(String name,
    Buffer ns);
```

调用参数:
* name: String, 指定名称
* ns: [Buffer](../../object/ifs/Buffer.md), 命名空间 UUID 的二进制表示，长度需为 16 字节

返回结果:
* String, 返回一个生成的 uuid 字符串

--------------------------
**使用 MD5 命名空间创建 uuid（字符串格式）**

```JavaScript
static String uuid.v3(String name,
    String ns);
```

调用参数:
* name: String, 指定名称
* ns: String, 命名空间 UUID 字符串，或使用预定义命名空间

返回结果:
* String, 返回一个生成的 uuid 字符串

--------------------------
### v4
**使用随机数创建 uuid**

```JavaScript
static String uuid.v4(Object options = {});
```

调用参数:
* options: Object, 可选参数对象，支持以下属性：random（[Buffer](../../object/ifs/Buffer.md)，随机数）、rng（Function，随机数生成器）

返回结果:
* String, 返回一个生成的 uuid 字符串

--------------------------
### v5
**使用 SHA1 命名空间创建 uuid（二进制命名空间格式）**

```JavaScript
static String uuid.v5(String name,
    Buffer ns);
```

调用参数:
* name: String, 指定名称
* ns: [Buffer](../../object/ifs/Buffer.md), 命名空间 UUID 的二进制表示，长度需为 16 字节

返回结果:
* String, 返回一个生成的 uuid 字符串

--------------------------
**使用 SHA1 命名空间创建 uuid（字符串格式）**

```JavaScript
static String uuid.v5(String name,
    String ns);
```

调用参数:
* name: String, 指定名称
* ns: String, 命名空间 UUID 字符串，或使用预定义命名空间

返回结果:
* String, 返回一个生成的 uuid 字符串

--------------------------
### version
**获取 uuid 的版本号**

```JavaScript
static Integer uuid.version(String uuid);
```

调用参数:
* uuid: String, 要检查的 uuid 字符串

返回结果:
* Integer, 返回 uuid 的版本号（0-7），如果格式无效则返回 undefined

--------------------------
### v6
**使用重排序时间戳创建 uuid v6**

```JavaScript
static String uuid.v6(Object options = {});
```

调用参数:
* options: Object, 可选参数对象，支持以下属性：node（[Buffer](../../object/ifs/Buffer.md)，节点 ID）、clockseq（Integer，时钟序列）、msecs（Integer，毫秒时间戳）、nsecs（Integer，纳秒时间戳）

返回结果:
* String, 返回一个生成的 uuid 字符串

--------------------------
### v7
**使用 Unix Epoch 时间戳创建 uuid v7**

```JavaScript
static String uuid.v7(Object options = {});
```

调用参数:
* options: Object, 可选参数对象，支持以下属性：msecs（Integer，毫秒时间戳）

返回结果:
* String, 返回一个生成的 uuid 字符串

--------------------------
### v1ToV6
**将 uuid v1 转换为 v6**

```JavaScript
static String uuid.v1ToV6(String uuid);
```

调用参数:
* uuid: String, v1 格式的 uuid 字符串

返回结果:
* String, 返回转换后的 v6 uuid 字符串

--------------------------
### v6ToV1
**将 uuid v6 转换为 v1**

```JavaScript
static String uuid.v6ToV1(String uuid);
```

调用参数:
* uuid: String, v6 格式的 uuid 字符串

返回结果:
* String, 返回转换后的 v1 uuid 字符串

--------------------------
### validate
**验证 uuid 字符串是否符合规范**

```JavaScript
static Boolean uuid.validate(String uuid);
```

调用参数:
* uuid: String, 要验证的 uuid 字符串

返回结果:
* Boolean, 返回 true 表示符合规范，false 表示不符合规范

--------------------------
### node
**使用时间和主机名创建 uuid**

```JavaScript
static Buffer uuid.node();
```

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回一个生成的二进制 id

--------------------------
### md5
**使用特定命名的 md5 创建 uuid**

```JavaScript
static Buffer uuid.md5(Integer ns,
    String name);
```

调用参数:
* ns: Integer, 指定命名空间，可以为 [uuid.DNS](uuid.md#DNS), [uuid.URL](uuid.md#URL), [uuid.OID](uuid.md#OID), [uuid.X509](uuid.md#X509)
* name: String, 指定名称

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回一个生成的二进制 id

--------------------------
### random
**使用随机数创建 uuid**

```JavaScript
static Buffer uuid.random();
```

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回一个生成的二进制 id

--------------------------
### sha1
**使用特定命名的 sha1 创建 uuid**

```JavaScript
static Buffer uuid.sha1(Integer ns,
    String name);
```

调用参数:
* ns: Integer, 指定命名空间，可以为 [uuid.DNS](uuid.md#DNS), [uuid.URL](uuid.md#URL), [uuid.OID](uuid.md#OID), [uuid.X509](uuid.md#X509)
* name: String, 指定名称

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回一个生成的二进制 id

--------------------------
### snowflake
**使用 Snowflake 算法创建 uuid**

```JavaScript
static Buffer uuid.snowflake();
```

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回一个生成的二进制 id

## 静态属性
        
### hostID
**Integer, 查询和修改 Snowflake 算法的主机 id**

```JavaScript
static Integer uuid.hostID;
```

## 常量
        
### DNS
**md5 与 sha1 创建 uuid 时指定 name 命名为域名**

```JavaScript
const uuid.DNS = 0;
```

--------------------------
### URL
**md5 与 sha1 创建 uuid 时指定 name 命名为 [url](url.md) 地址**

```JavaScript
const uuid.URL = 1;
```

--------------------------
### OID
**md5 与 sha1 创建 uuid 时指定 name 命名为 ISO OID**

```JavaScript
const uuid.OID = 2;
```

--------------------------
### X509
**md5 与 sha1 创建 uuid 时指定 name 命名为 X.500 DN**

```JavaScript
const uuid.X509 = 3;
```

--------------------------
### NIL
**返回一个空的 uuid**

```JavaScript
const uuid.NIL = "00000000-0000-0000-0000-000000000000";
```

--------------------------
### MAX
**返回一个最大 UUID 字符串**

```JavaScript
const uuid.MAX = "ffffffff-ffff-ffff-ffff-ffffffffffff";
```

--------------------------
### DNS_NAMESPACE
**v3 和 v5 的 DNS 命名空间 UUID**

```JavaScript
const uuid.DNS_NAMESPACE = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
```

--------------------------
### URL_NAMESPACE
**v3 和 v5 的 URL 命名空间 UUID**

```JavaScript
const uuid.URL_NAMESPACE = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
```

