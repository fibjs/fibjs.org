# 基础模块
* System
  - [child_process](ifs/child_process.md) - 子进程管理模块
  - [console](ifs/console.md) - 控制台访问对象
  - [coroutine](ifs/coroutine.md) - 并发控制模块，提供纤程（fiber）的创建、调度、并发执行与同步原语
  - [global](ifs/global.md) - 全局对象，所有脚本均可以访问的基础对象
  - [gui](ifs/gui.md) - gui 模块
  - [module](ifs/module.md) - 基础模块管理
  - [os](ifs/os.md) - `os` 模块是核心模块之一，用于运行的操作系统函数。它提供了与操作系统交互的实用程序功能，包括文件地址、文件路径、网络接口、主机名、操作系统类型等
  - [process](ifs/process.md) - 进程处理模块，用以管理当前进程的资源
  - [timers](ifs/timers.md) - timers 模块提供定时任务调度能力，包括延时执行、周期执行、空闲执行与带超时限制的函数调用，可用于延迟任务、周期轮询、避免阻塞与超时保护等场景
  - [tty](ifs/tty.md) - tty 模块
  - [vm](ifs/vm.md) - 沙箱模块，用于隔离不同安全等级的运行环境
  - [worker_threads](ifs/worker_threads.md) - worker 基础模块，提供线程间通信能力
* File System
  - [fs](ifs/fs.md) - fs 模块提供文件系统操作能力，包括文件与目录的读写、创建、删除、权限修改、状态查询、路径解析、文件监视等，可用于构建文件管理、日志、配置持久化等场景
  - [io](ifs/io.md) - 输入输出处理模块，提供流对象的创建与流间数据搬运能力
  - [path](ifs/path.md) - path 模块是一个核心模块，它提供了一些工具函数来处理文件和目录的路径。它不会检查路径是否存在或是否是有效路径，而是只提供了处理路径的方法
  - [path_posix](ifs/path_posix.md) - 文件路径处理模块
  - [path_win32](ifs/path_win32.md) - 文件路径处理模块
* Network
  - [dgram](ifs/dgram.md) - dgram 基础模块之一，主要用于实现 UDP 数据包 socket 的封装。
  - [dns](ifs/dns.md) - dns 域名查询模块
  - [http](ifs/http.md) - http 模块提供 HTTP 服务端与客户端能力，可用于创建 HTTP/HTTPS 服务器、发起 HTTP 请求、处理请求与响应消息、管理 Cookie 等场景
  - [http2](ifs/http2.md) - http2 模块提供 HTTP/2 协议支持
  - [mime](ifs/mime.md) - MIME 解析模块
  - [mq](ifs/mq.md) - 消息队列模块
  - [net](ifs/net.md) - net 模块提供网络基础能力，包括建立 TCP 连接、域名解析、IP 地址检测、创建 TCP 服务器等，是 http、tls、smtp 等网络模块的基础
  - [punycode](ifs/punycode.md) - punycode 国际化域名转换模块
  - [querystring](ifs/querystring.md) - querystring 模块提供了一些用于解析和序列化 URL 查询参数的实用函数，使用 querystring 模块可以方便地将 URL 查询参数解析为对象或字符串，也可以将对象序列化为 URL 查询参数字符串
  - [rtc](ifs/rtc.md) - WebRTC 网络实时通信模块
  - [tls](ifs/tls.md) - tls 模块是 fibjs 内置的加密模块，用于建立 tls/ssl 加密网络连接，提供加密验证，确保客户端和服务器之间的连接是安全的
  - [url](ifs/url.md) - URL 处理模块，提供 URL 解析、格式化、文件路径转换和国际化域名处理等功能
* Encoding
  - [base32](ifs/base32.md) - base32 编码与解码模块
  - [base64](ifs/base64.md) - base64 编码与解码模块
  - [base58](ifs/base58.md) - base58 编码与解码模块
  - [encoding](ifs/encoding.md) - `encoding` 模块是 FibJS 内置的一个模块，用于实现各种数据编码格式与二进制之间的转换。这些数据编码格式包括了 `base64`、`base32`、`hex`、`json`、`msgpack`、`multibase`、`base58` 等等一些常用的数据编码格式。
  - [hex](ifs/hex.md) - hex 模块是内置模块，在编码和解码二进制数据和 ASCII 字符之间提供了十六进制的实现方式。`hex` 模块提供了编码和解码两种功能
  - [json](ifs/json.md) - json 编码与解码模块
  - [multibase](ifs/multibase.md) - multibase 是在 Base1x 编码的基础上，引入了多种编码前缀的编码方式
  - [msgpack](ifs/msgpack.md) - msgpack是一种比 JSON 更轻量的数据交换格式，它可以将 JSON 对象序列化为二进制数据，以达到更快、更高效的数据交换效果
  - [string_decoder](ifs/string_decoder.md) - 解码 Buffer 到字符串
* Crypto
  - [crypto](ifs/crypto.md) - `crypto` 模块是 `fibjs` 内置的加密算法模块。它提供了对称加密、非对称加密、摘要算法、密码学随机数生成器等功能。在使用之前，需要通过 `require('crypto')` 加载该模块
  - [subtle](ifs/subtle.md) - 提供对 SubtleCrypto API 的访问
  - [webcrypto](ifs/webcrypto.md) - WebCrypto API 模块
* Compress
  - [zip](ifs/zip.md) - zip 模块是一个用于文件压缩和解压缩的模块。它提供了压缩、解压缩、查找和枚举 zip 文件中的文件列表等操作
  - [zlib](ifs/zlib.md) - zlib 是内置的压缩模块，支持 gzip、deflate、zlib 等多种压缩格式和模式
* Test
  - [assert](ifs/assert.md) - 断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出
  - [performance](ifs/performance.md) - performance 基础性能监控模块
  - [perf_hooks](ifs/perf_hooks.md) - perf_hooks 基础模块
  - [v8](ifs/v8.md) - 内存 v8 模块
  - [test](ifs/test.md) - test 模块是一个测试框架，结合断言模块 `assert` 可以方便地编写各种测试用例，可作为函数调用
  - [test_suite](ifs/test_suite.md) - test_suite 模块是一个测试套件模块，可作为函数调用
* Utility
  - [colors](ifs/colors.md) - 颜色模块
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
  - [zlib_constants](ifs/zlib_constants.md) - zlib 模块常用常量定义模块
* [assert_strict](ifs/assert_strict.md) - 严格断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出
* [async_hooks](ifs/async_hooks.md) - 定义异步钩子模块
* [http2_constants](ifs/http2_constants.md) - http2 模块常用常量定义模块
* [os_constants](ifs/os_constants.md) - os 模块常量定义模块
* [os_constants_dlopen](ifs/os_constants_dlopen.md) - os_constants dlopen 子模块，包含动态链接库加载标志常量
* [os_constants_errno](ifs/os_constants_errno.md) - os_constants errno 子模块，包含 POSIX 错误码常量
* [os_constants_priority](ifs/os_constants_priority.md) - os_constants priority 子模块，包含进程优先级常量
* [os_constants_signals](ifs/os_constants_signals.md) - os_constants signals 子模块，包含 POSIX 信号常量
* [sse](ifs/sse.md) - Server-Sent Events (SSE) 模块，实现基于 HTTP 的服务器推送功能
