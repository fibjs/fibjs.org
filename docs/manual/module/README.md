# 基础模块
* System
  - [child_process](ifs/child_process.md) - 子进程管理模块
  - [console](ifs/console.md) - 控制台访问对象
  - [coroutine](ifs/coroutine.md) - 并发控制模块
  - [global](ifs/global.md) - 全局对象，所有脚本均可以访问的基础对象
  - [gui](ifs/gui.md) - gui 模块
  - [os](ifs/os.md) - 操作系统与文件系统处理模块
  - [process](ifs/process.md) - 进程处理模块，用以管理当前进程的资源
  - [timers](ifs/timers.md) - timers 模块
  - [tty](ifs/tty.md) - tty 模块
  - [vm](ifs/vm.md) - 安全沙箱模块，用于隔离不同安全等级的运行环境
  - [worker_threads](ifs/worker_threads.md) - worker 基础模块
* File System
  - [fs](ifs/fs.md) - 文件系统处理模块
  - [io](ifs/io.md) - 输入输出处理模块
  - [path](ifs/path.md) - 文件路径处理模块
  - [path_posix](ifs/path_posix.md) - 文件路径处理模块
  - [path_win32](ifs/path_win32.md) - 文件路径处理模块
* Network
  - [dgram](ifs/dgram.md) - dgram 模块提供了 UDP 数据包 socket 的实现
  - [dns](ifs/dns.md) - dns 域名查询模块
  - [http](ifs/http.md) - 超文本传输协议模块，用以支持 http 协议处理，模块别名：https
  - [mq](ifs/mq.md) - 消息队列模块
  - [net](ifs/net.md) - 网络访问模块
  - [punycode](ifs/punycode.md) - punycode 国际化域名转换模块
  - [querystring](ifs/querystring.md) - http query 处理模块
  - [ssl](ifs/ssl.md) - ssl/tls 模块，模块别名：tls
  - [url](ifs/url.md) - url 处理模块
  - [ws](ifs/ws.md) - websocket 支持模块
* Encoding
  - [base32](ifs/base32.md) - base32 编码与解码模块
  - [base64](ifs/base64.md) - base64 编码与解码模块
  - [base58](ifs/base58.md) - base58 编码与解码模块
  - [encoding](ifs/encoding.md) - 编码与解码模块，用于处理不同的数据编码格式与二进制之间的转换
  - [hex](ifs/hex.md) - hex 编码与解码模块
  - [iconv](ifs/iconv.md) - iconv 编码与解码模块
  - [json](ifs/json.md) - json 编码与解码模块
  - [msgpack](ifs/msgpack.md) - msgpack 编码与解码模块
  - [string_decoder](ifs/string_decoder.md) - 解码 Buffer 到字符串
* Crypto
  - [crypto](ifs/crypto.md) - 加密算法模块
  - [hash](ifs/hash.md) - 信息摘要计算模块，可用于计算信息摘要和摘要签名
* Compress
  - [zip](ifs/zip.md) - zip 格式文件压缩解压模块
  - [zlib](ifs/zlib.md) - zlib 压缩解压模块
* Test Suite
  - [assert](ifs/assert.md) - 断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出
  - [performance](ifs/performance.md) - performance 基础性能监控模块
  - [perf_hooks](ifs/perf_hooks.md) - perf_hooks 基础模块
  - [profiler](ifs/profiler.md) - 内存 profiler 模块
  - [test](ifs/test.md) - 测试套件模块，用以定义管理测试套件
* Utility
  - [db](ifs/db.md) - 数据库访问模块
  - [gd](ifs/gd.md) - 图像文件处理模块
  - [registry](ifs/registry.md) - Windows 注册表访问模块
  - [util](ifs/util.md) - 常用工具模块
  - [uuid](ifs/uuid.md) - uuid 唯一 id 模块
  - [xml](ifs/xml.md) - xml 处理模块
* Constants
  - [constants](ifs/constants.md) - 常用常量定义模块
  - [fs_constants](ifs/fs_constants.md) - fs 模块常用常量定义模块
* [multibase](ifs/multibase.md) - multibase 编码与解码模块
