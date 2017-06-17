# 模块 net
网络访问模块

基础模块。可用于创建和操作网络资源，引用方式：
```JavaScript
var net = require('net');
```
## 对象
        
### Socket
创建一个 Socket 对象，参见 Socket
```JavaScript
Socket net.Socket;
```

### Smtp
创建一个 Smtp 对象，参见 Smtp
```JavaScript
Smtp net.Smtp;
```

### TcpServer
创建一个 TcpServer 对象，参见 TcpServer
```JavaScript
TcpServer net.TcpServer;
```

### Url
创建一个 UrlObject 对象，参见 UrlObject
```JavaScript
UrlObject net.Url;
```

## 函数
        
### info
查询当前运行环境网络信息
```JavaScript
static Object net.info();
```

返回结果:
* 返回网卡信息

### resolve
查询给定的主机名的地址
```JavaScript
static String net.resolve(String name,
                Integer family = undefined) async;
```

调用参数:
* name - 指定主机名
* family - 指定查询返回类型，缺省为 AF_INET

返回结果:
* 返回查询的 ip 字符串

### ip
快速查询的主机地址，等效与 resolve(name)
```JavaScript
static String net.ip(String name) async;
```

调用参数:
* name - 指定主机名

返回结果:
* 返回查询的 ip 字符串

### ipv6
快速查询的主机 ipv6 地址，等效与 resolve(name, net.AF_INET6)
```JavaScript
static String net.ipv6(String name) async;
```

调用参数:
* name - 指定主机名

返回结果:
* 返回查询的 ipv6 字符串

### connect
创建一个 Socket 对象并建立连接，参见 Socket
```JavaScript
static Stream net.connect(String host,
                Integer port,
                Integer timeout = 0,
                Integer family = undefined) async;
```

调用参数:
* host - 指定对方地址或主机名
* port - 指定对方端口
* timeout - 指定超时时间，单位是毫秒，默认为0
* family - 指定地址集，缺省为 AF_INET，ipv4

返回结果:
* 返回连接成功的 Socket 对象

--------------------------
创建一个 Socket 或 SslSocket 对象并建立连接
```JavaScript
static Stream net.connect(String url,
                Integer timeout = 0) async;
```

调用参数:
* url - 指定连接的协议，可以是：tcp://host:port 或者 ssl://host:port
* timeout - 指定超时时间，单位是毫秒，默认为0

返回结果:
* 返回连接成功的 Socket 或者 SslSocket 对象

### openSmtp
创建一个 Smtp 对象并建立连接，参见 Smtp
```JavaScript
static Smtp net.openSmtp(String url,
                Integer timeout = 0) async;
```

调用参数:
* url - 指定连接的协议，可以是：tcp://host:port 或者 ssl://host:port
* timeout - 指定超时时间，单位是毫秒，默认为0

返回结果:
* 返回连接成功的 Smtp 对象

### backend
查询当前系统异步网络引擎
```JavaScript
static String net.backend();
```

返回结果:
* 返回网络引擎名称

## 常量
        
### AF_INET
地址集常量，指定 ipv4
```JavaScript
const net.AF_INET = 2;
```

### AF_INET6
地址集常量，指定 ipv6
```JavaScript
const net.AF_INET6 = 10;
```

### SOCK_STREAM
协议族常量，指定 tcp
```JavaScript
const net.SOCK_STREAM = 1;
```

### SOCK_DGRAM
协议族常量，指定 udp
```JavaScript
const net.SOCK_DGRAM = 2;
```

