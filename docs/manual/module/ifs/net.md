# 模块 net
net 模块提供网络基础能力，包括建立 TCP 连接、域名解析、IP 地址检测、创建 TCP 服务器等，是 [http](http.md)、[tls](tls.md)、smtp 等网络模块的基础

模块的主要能力：

- **连接**：`connect` 以多种形式建立 TCP 连接，支持 `tcp://`、`ssl://`、`unix:`、`pipe://` 协议；
- **解析**：`resolve`、`ip`、`ipv6` 查询主机名的地址；
- **服务器**：`createServer` 创建 TCP 服务器；
- **检测**：`isIP`、`isIPv4`、`isIPv6` 检测 IP 地址格式；
- **对象别名**：`Socket`、`Smtp`、`TcpServer`、`Url`。

引用方式：

```JavaScript
var net = require('net');
```

建立 TCP 连接示例：

```JavaScript
var net = require('net');

// 指定端口与主机
var sock = net.connect(80, 'example.com');
sock.send('GET / HTTP/1.0\r\n\r\n');
console.log(sock.recv());
sock.close();

// 使用 URL 形式，支持 tcp:// 与 ssl:// 协议
var ssl = net.connect('ssl://example.com:443');
```

## 对象
        
### Socket
**创建一个 [Socket](../../object/ifs/Socket.md) 对象，参见 [Socket](../../object/ifs/Socket.md)**

```JavaScript
Socket net.Socket;
```

--------------------------
### Smtp
**创建一个 [Smtp](../../object/ifs/Smtp.md) 对象，参见 [Smtp](../../object/ifs/Smtp.md)**

```JavaScript
Smtp net.Smtp;
```

--------------------------
### TcpServer
**创建一个 [TcpServer](../../object/ifs/TcpServer.md) 对象，参见 [TcpServer](../../object/ifs/TcpServer.md)**

```JavaScript
TcpServer net.TcpServer;
```

--------------------------
### Url
**创建一个 [UrlObject](../../object/ifs/UrlObject.md) 对象，参见 [UrlObject](../../object/ifs/UrlObject.md)**

```JavaScript
UrlObject net.Url;
```

## 静态函数
        
### info
**查询当前运行环境网络信息**

```JavaScript
static Object net.info();
```

返回结果:
* Object, 返回网卡信息

--------------------------
### resolve
**查询给定的主机名的地址**

```JavaScript
static String net.resolve(String name,
    Integer family = AF_INET) async;
```

调用参数:
* name: String, 指定主机名
* family: Integer, 指定查询返回类型，缺省为 AF_INET

返回结果:
* String, 返回查询的 ip 字符串

family 指定返回的地址族，取值为 AF_INET 或 AF_INET6，其他取值抛出异常。

--------------------------
### ip
**快速查询的主机地址，等效于 resolve(name)**

```JavaScript
static String net.ip(String name) async;
```

调用参数:
* name: String, 指定主机名

返回结果:
* String, 返回查询的 ip 字符串

--------------------------
### ipv6
**快速查询的主机 ipv6 地址，等效于 resolve(name, [net.AF_INET6](net.md#AF_INET6))**

```JavaScript
static String net.ipv6(String name) async;
```

调用参数:
* name: String, 指定主机名

返回结果:
* String, 返回查询的 ipv6 字符串

--------------------------
### connect
**创建一个 [Socket](../../object/ifs/Socket.md) 对象并建立连接**

```JavaScript
static Stream net.connect(Object options) async;
```

调用参数:
* options: Object, 指定连接选项对象

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回连接成功的 [Socket](../../object/ifs/Socket.md) 对象

options 参数可以包含以下属性：
 - port: 指定对方端口
 - host: 指定对方地址或主机名
 - timeout: 指定超时时间，单位是毫秒，默认为 0

--------------------------
**建立一个连接，并在连接建立后触发 connect 事件**

```JavaScript
static Stream net.connect(Object options,
    Function connectListener) async;
```

调用参数:
* options: Object, 指定连接选项对象，可以包含以下属性：
* connectListener: Function, 指定 once 的 connect 事件监听器

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回连接的 [Socket](../../object/ifs/Socket.md) 对象

--------------------------
**创建一个 [Socket](../../object/ifs/Socket.md) 或 SslSocket 对象并建立连接**

```JavaScript
static Stream net.connect(String url,
    Integer timeout = 0) async;
```

调用参数:
* url: String, 指定连接的协议，可以是：tcp://host:port 或者 ssl://host:port，也可以是：unix:/usr/local/proc1 或者 pipe://./pipe/proc1，连接 pipe 时需要用 `/` 替换 `\`
* timeout: Integer, 指定超时时间，单位是毫秒，默认为 0

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回连接成功的 [Socket](../../object/ifs/Socket.md) 或者 SslSocket 对象

--------------------------
**创建一个 [Socket](../../object/ifs/Socket.md) 对象并建立连接**

```JavaScript
static Stream net.connect(Integer port,
    String host = "localhost",
    Integer timeout = 0) async;
```

调用参数:
* port: Integer, 指定对方端口
* host: String, 指定对方地址或主机名，缺省为 localhost
* timeout: Integer, 指定超时时间，单位是毫秒，默认为 0

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回连接成功的 [Socket](../../object/ifs/Socket.md) 对象

--------------------------
**建立一个连接，并在连接建立后触发 connect 事件**

```JavaScript
static Stream net.connect(Integer port,
    Function connectListener) async;
```

调用参数:
* port: Integer, 指定对方端口
* connectListener: Function, 指定 once 的 connect 事件监听器

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回连接的 [Socket](../../object/ifs/Socket.md) 对象

--------------------------
**建立一个连接，并在连接建立后触发 connect 事件**

```JavaScript
static Stream net.connect(Integer port,
    String host,
    Function connectListener) async;
```

调用参数:
* port: Integer, 指定对方端口
* host: String, 指定对方地址或主机名，缺省为 localhost
* connectListener: Function, 指定 once 的 connect 事件监听器

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回连接的 [Socket](../../object/ifs/Socket.md) 对象

--------------------------
**建立一个连接，并在连接建立后触发 connect 事件**

```JavaScript
static Stream net.connect(Integer port,
    String host,
    Integer timeout,
    Function connectListener) async;
```

调用参数:
* port: Integer, 指定对方端口
* host: String, 指定对方地址或主机名，缺省为 localhost
* timeout: Integer, 指定超时时间，单位是毫秒，默认为 0
* connectListener: Function, 指定 once 的 connect 事件监听器

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回连接的 [Socket](../../object/ifs/Socket.md) 对象

--------------------------
**建立一个连接，并在连接建立后触发 connect 事件**

```JavaScript
static Stream net.connect(String path,
    Function connectListener) async;
```

调用参数:
* path: String, 指定 unix socket 或 Windows pipe 路径
* connectListener: Function, 指定 once 的 connect 事件监听器

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回连接的 [Socket](../../object/ifs/Socket.md) 对象

--------------------------
**建立一个连接，并在连接建立后触发 connect 事件**

```JavaScript
static Stream net.connect(String path,
    Integer timeout,
    Function connectListener) async;
```

调用参数:
* path: String, 指定 unix socket 或 Windows pipe 路径
* timeout: Integer, 指定超时时间，单位是毫秒，默认为 0
* connectListener: Function, 指定 once 的 connect 事件监听器

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回连接的 [Socket](../../object/ifs/Socket.md) 对象

--------------------------
### openSmtp
**创建一个 [Smtp](../../object/ifs/Smtp.md) 对象并建立连接，参见 [Smtp](../../object/ifs/Smtp.md)**

```JavaScript
static Smtp net.openSmtp(String url,
    Integer timeout = 0) async;
```

调用参数:
* url: String, 指定连接的协议，可以是：tcp://host:port 或者 ssl://host:port
* timeout: Integer, 指定超时时间，单位是毫秒，默认为 0

返回结果:
* [Smtp](../../object/ifs/Smtp.md), 返回连接成功的 [Smtp](../../object/ifs/Smtp.md) 对象

--------------------------
### createServer
**创建一个 TCP 服务器**

```JavaScript
static TcpServer net.createServer(Object options,
    Handler listener);
```

调用参数:
* options: Object, 服务器选项对象，可以包含以下属性：
* listener: [Handler](../../object/ifs/Handler.md), 连接处理函数

返回结果:
* [TcpServer](../../object/ifs/TcpServer.md), 返回 [TcpServer](../../object/ifs/TcpServer.md) 对象

--------------------------
**创建一个 TCP 服务器**

```JavaScript
static TcpServer net.createServer(Handler listener);
```

调用参数:
* listener: [Handler](../../object/ifs/Handler.md), 连接处理函数

返回结果:
* [TcpServer](../../object/ifs/TcpServer.md), 返回未绑定端口的 [TcpServer](../../object/ifs/TcpServer.md) 对象，需调用 listen() 启动

--------------------------
### backend
**查询当前系统异步网络引擎**

```JavaScript
static String net.backend();
```

返回结果:
* String, 返回网络引擎名称

--------------------------
### isIP
**检测输入是否是 IP 地址**

```JavaScript
static Integer net.isIP(String ip = "");
```

调用参数:
* ip: String, 指定要检测的字符串

返回结果:
* Integer, 非合法的 IP 地址，返回 0, 如果是 IPv4 则返回 4，如果是 IPv6 则返回 6

--------------------------
### isIPv4
**检测输入是否是 IPv4 地址**

```JavaScript
static Boolean net.isIPv4(String ip = "");
```

调用参数:
* ip: String, 指定要检测的字符串

返回结果:
* Boolean, 如果是 IPv4 则返回 true.否则返回 false

--------------------------
### isIPv6
**检测输入是否是 IPv6 地址**

```JavaScript
static Boolean net.isIPv6(String ip = "");
```

调用参数:
* ip: String, 指定要检测的字符串

返回结果:
* Boolean, 如果是 IPv6 则返回 true.否则返回 false

## 静态属性
        
### use_uv_socket
**Boolean, 查询和设置 socket 后端是否使用 uv，缺省为 false**

```JavaScript
static Boolean net.use_uv_socket;
```

## 常量
        
### AF_UNIX
**地址集常量，指定 unix socket**

```JavaScript
const net.AF_UNIX = 1;
```

--------------------------
### AF_PIPE
**地址集常量，指定 Windows pipe**

```JavaScript
const net.AF_PIPE = 1;
```

--------------------------
### AF_INET
**地址集常量，指定 ipv4**

```JavaScript
const net.AF_INET = 2;
```

--------------------------
### AF_INET6
**地址集常量，指定 ipv6**

```JavaScript
const net.AF_INET6 = 10;
```

