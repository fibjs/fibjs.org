# 模块 dns
dns 域名查询模块

基础模块，提供主机名的地址查询能力：

- `resolve`：查询主机名的全部地址，返回 ip 字符串数组；
- `lookup`：查询主机名的地址，支持指定地址族与返回全部结果。

引用方式：

```JavaScript
var dns = require('dns');
```

## 静态函数
        
### resolve
**查询给定的主机名的地址**

```JavaScript
static NArray dns.resolve(String name) async;
```

调用参数:
* name: String, 指定主机名

返回结果:
* NArray, 返回查询的 ip 字符串数组

--------------------------
### lookup
**查询给定的主机名的地址**

```JavaScript
static Variant dns.lookup(String name,
    Object options = {}) async;
```

调用参数:
* name: String, 指定主机名
* options: Object, 查询选项

返回结果:
* Variant, 返回查询的 ip 字符串

options 支持的选项如下：

```JavaScript
{
    "family": 0, // 指定地址族：0 为任意，4 为 IPv4，6 为 IPv6，也可使用 "IPv4"/"IPv6"。默认: 0
    "all": false // 为 true 时返回全部地址的对象数组，否则返回第一个地址的字符串。默认: false
}
```

all 为 true 时返回的数组元素包含 `address`（ip 字符串）与 `family`（地址族编号）字段。

