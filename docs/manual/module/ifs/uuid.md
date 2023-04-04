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

