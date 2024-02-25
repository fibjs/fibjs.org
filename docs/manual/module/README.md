# 基础模块
* System
  - [child_process](ifs/child_process.md) - 子进程管理模块
  - [console](ifs/console.md) - 控制台访问对象
  - [coroutine](ifs/coroutine.md) - 并发控制模块
  - [global](ifs/global.md) - 全局对象，所有脚本均可以访问的基础对象
  - [gui](ifs/gui.md) - gui 模块
  - [os](ifs/os.md) - `os` 模块是核心模块之一，用于运行的操作系统函数。它提供了与操作系统交互的实用程序功能，包括文件地址、文件路径、网络接口、主机名、操作系统类型等
  - [process](ifs/process.md) - 进程处理模块，用以管理当前进程的资源
  - [timers](ifs/timers.md) - timers 模块是一个内置模块，提供了一些与时间相关的函数和对象，包括 setTimeout()、setInterval()、clearInterval()、clearTimeout() 等等
  - [tty](ifs/tty.md) - tty 模块
  - [vm](ifs/vm.md) - 沙箱模块，用于隔离不同安全等级的运行环境
  - [worker_threads](ifs/worker_threads.md) - worker 基础模块
* File System
  - [fs](ifs/fs.md) - fs 模块是文件系统操作模块。它提供了读取文件、写入文件、打开文件、关闭文件、更改文件权限等磁盘 I/O 操作，支持同步和异步两种用法。fs 模块还提供了文件监视器功能，可以监听文件系统中文件和目录的变化，并回调指定的函数。
  - [io](ifs/io.md) - 输入输出处理模块
  - [path](ifs/path.md) - path 模块是一个核心模块，它提供了一些工具函数来处理文件和目录的路径。它不会检查路径是否存在或是否是有效路径，而是只提供了处理路径的方法
  - [path_posix](ifs/path_posix.md) - 文件路径处理模块
  - [path_win32](ifs/path_win32.md) - 文件路径处理模块
* Network
  - [dgram](ifs/dgram.md) - dgram 基础模块之一，主要用于实现 UDP 数据包 socket 的封装。
  - [dns](ifs/dns.md) - dns 域名查询模块
  - [http](ifs/http.md) - http 模块封装了 HTTP 请求和响应的处理，让我们可以轻松地创建一个 http 服务器，也可以模拟客户端发起 http 请求。使用 http 模块，开发者可以很方便地编写和处理 HTTP 协议相关的代码
  - [mq](ifs/mq.md) - 消息队列模块
  - [net](ifs/net.md) - 网络访问模块
  - [punycode](ifs/punycode.md) - punycode 国际化域名转换模块
  - [querystring](ifs/querystring.md) - querystring 模块提供了一些用于解析和序列化 URL 查询参数的实用函数，使用 querystring 模块可以方便地将 URL 查询参数解析为对象或字符串，也可以将对象序列化为 URL 查询参数字符串
  - [ssl](ifs/ssl.md) - ssl 模块是 fibjs 内置的加密模块，可以用于建立网络连接的 SSL 超文本传输协议。该模块提供加密验证，客户端和服务器可以确保连接是安全的
  - [url](ifs/url.md) - url 处理模块，url 模块提供了 Url 类，用于处理 URL 相关的操作，包括解析、组装、拼接等
  - [ws](ifs/ws.md) - websocket 支持模块
* Encoding
  - [base32](ifs/base32.md) - base32 编码与解码模块
  - [base64](ifs/base64.md) - base64 编码与解码模块
  - [base58](ifs/base58.md) - base58 编码与解码模块
  - [encoding](ifs/encoding.md) - `encoding` 模块是 FibJS 内置的一个模块，用于实现各种数据编码格式与二进制之间的转换。这些数据编码格式包括了 `base64`、`base32`、`hex`、`json`、`msgpack`、`multibase`、`base58` 等等一些常用的数据编码格式。
  - [hex](ifs/hex.md) - hex 模块是内置模块，在编码和解码二进制数据和 ASCII 字符之间提供了十六进制的实现方式。`hex` 模块提供了编码和解码两种功能
  - [iconv](ifs/iconv.md) - `iconv` 是内置的一个转换模块，用于实现各种不同编码之间的数据转换
  - [json](ifs/json.md) - json 编码与解码模块
  - [multibase](ifs/multibase.md) - multibase 是在 Base1x 编码的基础上，引入了多种编码前缀的编码方式
  - [msgpack](ifs/msgpack.md) - msgpack是一种比 JSON 更轻量的数据交换格式，它可以将 JSON 对象序列化为二进制数据，以达到更快、更高效的数据交换效果
  - [string_decoder](ifs/string_decoder.md) - 解码 Buffer 到字符串
* Crypto
  - [crypto](ifs/crypto.md) - `crypto` 模块是 `fibjs` 内置的加密算法模块。它提供了对称加密、非对称加密、摘要算法、密码学随机数生成器等功能。在使用之前，需要通过 `require('crypto')` 加载该模块。
  - [hash](ifs/hash.md) - hash 模块主要用于实现消息摘要算法，是实现加密算法中，非常重要的一个子模块。同时，消息摘要算法也是许多加密算法的基础。
* Compress
  - [zip](ifs/zip.md) - zip 模块是一个用于文件压缩和解压缩的模块。它提供了压缩、解压缩、查找和枚举 zip 文件中的文件列表等操作
  - [zlib](ifs/zlib.md) - zlib 是内置的压缩模块，支持 gzip、deflate、zlib 等多种压缩格式和模式
* Test
  - [assert](ifs/assert.md) - 断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出
  - [performance](ifs/performance.md) - performance 基础性能监控模块
  - [perf_hooks](ifs/perf_hooks.md) - perf_hooks 基础模块
  - [profiler](ifs/profiler.md) - 内存 profiler 模块
  - [test](ifs/test.md) - test 模块是一个测试框架，结合断言模块 `assert` 可以方便地编写各种测试用例
* Utility
  - [db](ifs/db.md) - 数据库访问模块
  - [registry](ifs/registry.md) - registry 模块是一个操作 Windows 注册表（Registry）的模块。它提供了访问注册表的方法和常量，可以读取、修改、删除、添加等操作。registry 模块提供的操作方式和 Windows 应用程序使用的方式类似，但却是在 FibJS 中提供了能力。常量有常见的 Root、 数据类型等常量，还有一些用于不同操作的返回值的常量
  - [types](ifs/types.md) - types 模块提供了对数据类型判断的工具函数
  - [util](ifs/util.md) - util 模块提供了对数据类型的判断、对象属性的复制、模版字符串的解析、事件处理等实用的工具函数
  - [uuid](ifs/uuid.md) - uuid 模块提供唯一 id 的创建于操作。它可以用于生成符合各种不同要求的 UUID(Universally Unique Identifier)
  - [xml](ifs/xml.md) - xml 处理模块，可以使用 xml 模块解析和处理 xml 和 html 文件
* Constants
  - [constants](ifs/constants.md) - 常用常量定义模块
  - [fs_constants](ifs/fs_constants.md) - fs 模块常用常量定义模块
  - [crypto_constants](ifs/crypto_constants.md) - crypto 模块常用常量定义模块
