# 模块 dns
dns 域名查询模块

基础模块，引用方式：

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
static String dns.lookup(String name) async;
```

调用参数:
* name: String, 指定主机名

返回结果:
* String, 返回查询的 ip 字符串

