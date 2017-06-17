# 对象 HttpsServer
https 服务器对象

https 服务器对象是将 SslServer 和 HttpHandler 组合封装的对象，方便快速搭建服务器，逻辑上相当于：
@code
var svr = new net.SslServer(crt, key, addr, port, new http.Handler(function(req){
   ...
}));
@endcode

创建方法：
@code
var http = require(&#34;http&#34;);
var svr = new http.HttpsServer(crt, key, 443, function(req){
    ...
});
@endcode
## 构造函数
        
### HttpsServer
HttpsServer 构造函数，在所有本机地址侦听
```JavaScript
 new HttpsServer(Array certs,
                Integer port,
                Handler hdlr);
```

**调用参数:**
* certs - 服务器证书列表，格式为
* port - 指定 http 服务器侦听端口
* hdlr - http 内置消息处理器，处理函数，链式处理数组，路由对象，详见

### HttpsServer
HttpsServer 构造函数
```JavaScript
 new HttpsServer(Array certs,
                String addr,
                Integer port,
                Handler hdlr);
```

**调用参数:**
* certs - 服务器证书列表，格式为
* addr - 指定 http 服务器侦听地址，为 &#34;&#34; 则在本机所有地址侦听
* port - 指定 http 服务器侦听端口
* hdlr - http 内置消息处理器，处理函数，链式处理数组，路由对象，详见

### HttpsServer
HttpsServer 构造函数，在所有本机地址侦听
```JavaScript
 new HttpsServer(X509Cert crt,
                PKey key,
                Integer port,
                Handler hdlr);
```

**调用参数:**
* crt - X509Cert 证书，用于客户端验证服务器
* key - PKey 私钥，用于与客户端会话
* port - 指定 http 服务器侦听端口
* hdlr - http 内置消息处理器，处理函数，链式处理数组，路由对象，详见

### HttpsServer
HttpsServer 构造函数
```JavaScript
 new HttpsServer(X509Cert crt,
                PKey key,
                String addr,
                Integer port,
                Handler hdlr);
```

**调用参数:**
* crt - X509Cert 证书，用于客户端验证服务器
* key - PKey 私钥，用于与客户端会话
* addr - 指定 http 服务器侦听地址，为 &#34;&#34; 则在本机所有地址侦听
* port - 指定 http 服务器侦听端口
* hdlr - http 内置消息处理器，处理函数，链式处理数组，路由对象，详见

## 函数
        
### onerror
设置错误处理器
```JavaScript
HttpsServer.onerror(Object hdlrs);
```

**调用参数:**
* hdlrs - 指定不同的错误的处理器，key 是错误号，value 是处理器，可以是内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler

### run
运行服务器并开始接收和分发连接，此函数不会返回
```JavaScript
HttpsServer.run();
```

### asyncRun
异步运行服务器并开始接收和分发连接，调用后立即返回，服务器在后台运行
```JavaScript
HttpsServer.asyncRun();
```

### stop
关闭 socket中止正在运行的服务器
```JavaScript
HttpsServer.stop();
```

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
HttpsServer.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean HttpsServer.equals(object expected);
```

**调用参数:**
* expected - 制定比较的目标对象

**返回结果:**
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String HttpsServer.toString();
```

**返回结果:**
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value HttpsServer.toJSON(String key = "");
```

**调用参数:**
* key - 未使用

**返回结果:**
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value HttpsServer.valueOf();
```

**返回结果:**
* 返回对象本身的数值

## 属性
        
### verification
设定证书验证模式，缺省为 VERIFY_NONE
```JavaScript
Integer HttpsServer.verification;
```

### ca
客户端证书验证 ca
```JavaScript
readonly X509Cert HttpsServer.ca;
```

### crossDomain
查询和设置是否允许跨域请求，缺省为 false
```JavaScript
Boolean HttpsServer.crossDomain;
```

### forceGZIP
查询和设置是否允强制使用 gzip 压缩输出，缺省为 false
```JavaScript
Boolean HttpsServer.forceGZIP;
```

### maxHeadersCount
查询和设置最大请求头个数，缺省为 128
```JavaScript
Integer HttpsServer.maxHeadersCount;
```

### maxUploadSize
查询和设置最大上传尺寸，以 MB 为单位，缺省为 64
```JavaScript
Integer HttpsServer.maxUploadSize;
```

### httpStats
查询 http 协议转换处理器的工作状态
```JavaScript
readonly Stats HttpsServer.httpStats;
```

返回的结果为一个 Stats 对象，结构如下：
@code
{
    total : 1000,    // 总计处理的请求
    pendding : 100,  // 当前正在处理的请求
    request : 10,    // 新建的请求
    response : 10,   // 发送的响应
    error : 100,     // 发生的错误（不计入 404）
    error_400 : 10,  // 发生的请求错误
    error_404 : 12,  // 文件未找到的数量
    error_500 : 2    // 内部处理错误
}
@endcode

### socket
服务器当前侦听的 Socket 对象
```JavaScript
readonly Socket HttpsServer.socket;
```

### handler
服务器当前事件处理接口对象
```JavaScript
Handler HttpsServer.handler;
```

### stats
查询当前服务器运行状态
```JavaScript
readonly Stats HttpsServer.stats;
```

返回的结果为一个 Stats 对象，初始化计数器如下：
@code
{
    total : 1000,      // 总计处理的连接
    connections : 100, // 当前正在处理的连接
    accept : 10,       // 上次查询后新建的连接
    close : 10         // 上次查询后关闭的连接
}
@endcode

