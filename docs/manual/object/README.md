# 内置对象
* [BlsKey](ifs/BlsKey.md) - 椭圆曲线加密算法对象
* [Buffer](ifs/Buffer.md) - 二进制数据缓存对象，用于 io 读写的数据处理
* [BufferedStream](ifs/BufferedStream.md) - 缓存读取对象
* [Chain](ifs/Chain.md) - 消息处理器链处理对象
* [ChildProcess](ifs/ChildProcess.md) - 子进程对象
* [Cipher](ifs/Cipher.md) - 对称加密算法对象
* [Condition](ifs/Condition.md) - 条件变量对象
* [DbConnection](ifs/DbConnection.md) - DBConnection 是数据库连接的基类，用于建立和维护一个数据库连接会话。其实现了连接的基本操作，并作为派生类的基础。同时支持开始事务、提交事务、回滚事务等操作。
* [DgramSocket](ifs/DgramSocket.md) - dgram.Socket 对象是一个封装了数据包函数功能的 EventEmitter。
* [Digest](ifs/Digest.md) - 信息摘要对象
* [ECKey](ifs/ECKey.md) - ECKey 类是在 crypto 模块中实现的，可以使用该类来生成 ECDSA 密钥对、签名和验证消息等
* [Ed25519Key](ifs/Ed25519Key.md) - 椭圆曲线加密算法对象
* [Event](ifs/Event.md) - Event 模块提供了一个事件对象，用于协同共享数据操作。它允许多个纤程（协程）之间进行同步操作，以实现协作式多任务。事件对象有 wait，pulse 和 clear 三个方法，wait 方法将阻塞当前纤程，直至事件被触发，pulse 方法将唤醒所有等待该事件的纤程，而 clear 方法则将事件标志重置为 false。通过使用 coroutine.Event 模块，开发者可以控制纤程之间的执行顺序和数据共享，实现复杂业务逻辑。
* [EventEmitter](ifs/EventEmitter.md) - EventEmitter 是事件触发对象，它可以被用于建立观察者模式，支持事件触发的对象均继承于此
* [FSWatcher](ifs/FSWatcher.md) - 文件系统观察对象
* [Fiber](ifs/Fiber.md) - 纤程操作对象，此对象不可直接创建
* [File](ifs/File.md) - 文件操作对象，用于二进制文件读写
* [FileHandle](ifs/FileHandle.md) - 文件句柄对象
* [Handler](ifs/Handler.md) - 消息处理器接口
* [HeapGraphEdge](ifs/HeapGraphEdge.md) - HeapGraphEdge表示两个HeapGraphNode节点间的关联，从上游节点到下游节点
* [HeapGraphNode](ifs/HeapGraphNode.md) - HeapGraphNode表示堆视图中的一个节点
* [HeapSnapshot](ifs/HeapSnapshot.md) - HeapSnapshots记录JS堆在某个时刻的状态
* [HttpClient](ifs/HttpClient.md) - HttpClient 是针对 HTTP 客户端功能设计的类库，提供了基本的 HTTP/HTTPS 请求、代理访问、cookie 管理等功能
* [HttpCollection](ifs/HttpCollection.md) - HttpCollection 是一个通用容器，用于处理 http 消息中的 headers, query, form, cookie 数据
* [HttpCookie](ifs/HttpCookie.md) - HttpCookie 是 HTTP 协议封装的 cookie 对象，它提供了获取、设置 cookie 的各个属性，同时也支持多个 cookie 的组织与处理，是 http.Request 和 http.Response 两个对象都支持的一个重要属性
* [HttpHandler](ifs/HttpHandler.md) - http 协议转换处理器
* [HttpMessage](ifs/HttpMessage.md) - http 基础消息对象
* [HttpRepeater](ifs/HttpRepeater.md) - HttpRepeater 是一个 HTTP 请求转发器，可以将 HTTP 请求转发到指定的后端服务器并获得响应。它常常用于需要在前端与多个服务端交互的复杂系统中，或者用于负载均衡
* [HttpRequest](ifs/HttpRequest.md) - HttpRequest 是用来处理 HTTP 请求的类， 它允许你创建 HTTP 请求并与服务器交互。你可以使用它来向 Web 服务器发送 GET、POST 以及其它类型的 HTTP 请求
* [HttpResponse](ifs/HttpResponse.md) - HttpResponse 是一个 HTTP 响应对象，使用 HttpRequest.response 对象完成 Http 服务端数据响应，或 http.request 请求返回服务器的响应数据
* [HttpServer](ifs/HttpServer.md) - HttpServer 是内置对象之一，它是用于创建 HTTP 服务器的对象。一个 HttpServer 对象包含两个必传的参数：端口和事件处理接口对象。在事件处理接口对象中，具体的实现方式可以是简单的回调函数，也可以使用复杂的路由、链式处理数组等方式
* [HttpUploadData](ifs/HttpUploadData.md) - 包含 multipart 的一个条目数据
* [HttpsServer](ifs/HttpsServer.md) - HttpsServer 是用于创建 https 服务器的对象，HttpsServer 对象可以使用 HttpServer 所有的接口函数和属性。HttpsServer 对象可以通过在创建时传入之前使用 openssl 生成的证书对象 (X509Cert 类型) 和密钥对象 (PKey 类型)，从而为客户端提供 ssl 加密保护的服务
* [Image](ifs/Image.md) - 图像处理对象，用以对图像进行转换，绘制，存储等操作
* [Iterator](ifs/Iterator.md) - 迭代器对象，用于遍历集合数据
* [LevelDB](ifs/LevelDB.md) - evelDB 是 fibjs 内置的数据库操作对象，用于创建和管理键值对形式的字典对象。使用 LevelDB 对象，可轻松实现键值对数据的存储、查询、删除、枚举等操作。它基于 Google 开源的 LevelDB 实现，具有高效、可靠、可扩展等优点
* [Lock](ifs/Lock.md) - Lock 是一个内建对象，它可以用来控制纤程并发访问, 可以通过一个纤程获取锁，来阻止其他纤程同时获取。Lock 可以通过 coroutine.Lock() 函数创建
* [LruCache](ifs/LruCache.md) - LruCache(Least Recently Used Cache) 是用来维护LRU缓存的类。它可以存储一定数量的值，并且保持了容器的尺寸。当新数据进来时，如果容器还没有到达尺寸限制，新数据可以直接加入到容器中。如果容器已满，则容器将淘汰最近最少使用的数据
* [MemoryStream](ifs/MemoryStream.md) - 内存流对象
* [Message](ifs/Message.md) - 基础消息对象
* [MySQL](ifs/MySQL.md) - MySQL 对象是用于操作 MySQL 数据库的类,
* [Odbc](ifs/Odbc.md) - Odbc 数据库连接对象
* [PKey](ifs/PKey.md) - PKey 是内置的 crypto 模块提供的对象，它表示一对密钥：公钥和私钥。PKey 支持在 JS 中生成密钥、载入密钥、存储密钥以及对加密过程进行管理
* [RangeStream](ifs/RangeStream.md) - Range 查询流读取对象
* [Redis](ifs/Redis.md) - Redis 数据库客户端对象
* [RedisHash](ifs/RedisHash.md) - Redis 数据库客户端 Hash 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库
* [RedisList](ifs/RedisList.md) - Redis 数据库客户端 List 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库
* [RedisSet](ifs/RedisSet.md) - Redis 数据库客户端 Set 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库
* [RedisSortedSet](ifs/RedisSortedSet.md) - Redis 数据库客户端 SortedSet 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库
* [Routing](ifs/Routing.md) - 消息处理器路由对象
* [SQLite](ifs/SQLite.md) - SQLite 对象是内置模块 db 的一个成员，主要负责 SQLite 数据库的连接和操作，可用于 SQLite 数据库的创建、查询、插入、更新等操作。同时，SQLite 对象也提供了一些类似备份、格式化 SQL 等高级操作。SQLite 连接对象还支持事务操作
* [SandBox](ifs/SandBox.md) - 隔离沙箱对象，用于管理一个独立的运行空间
* [Script](ifs/Script.md) - Script 脚本编译和运行对象
* [SeekableStream](ifs/SeekableStream.md) - 可移动当前指针的流对象接口
* [Semaphore](ifs/Semaphore.md) - 纤程信号量对象
* [Service](ifs/Service.md) - 系统服务管理对象
* [Smtp](ifs/Smtp.md) - Smtp对象
* [Socket](ifs/Socket.md) - 网络套接口对象
* [SslHandler](ifs/SslHandler.md) - ssl 协议转换处理器
* [SslServer](ifs/SslServer.md) - ssl 服务器对象，可方便创建一个标准多纤程 ssl 服务器
* [SslSocket](ifs/SslSocket.md) - ssl 网络套接口对象
* [Stat](ifs/Stat.md) - 文件的基础信息对象
* [StatsWatcher](ifs/StatsWatcher.md) - 文件 Stats 观察对象
* [Stream](ifs/Stream.md) - 流操作对象，用于二进制数据流读写
* [StringDecoder](ifs/StringDecoder.md) - 流解码对象
* [TTYInputStream](ifs/TTYInputStream.md) - tty 读流对象, 用于对 tty 进行读取, 写入
* [TTYOutputStream](ifs/TTYOutputStream.md) - tty 写流对象, 用于处理 tty 输出
* [TcpServer](ifs/TcpServer.md) - TcpServer` 是高并发的 TCP Socket 服务器，可以用来创建一个初始状态下已经与客户端建立了 TCP 连接的 TCP 服务器
* [TextDecoder](ifs/TextDecoder.md) - TextDecoder 解码对象
* [TextEncoder](ifs/TextEncoder.md) - TextEncoder 编码对象
* [Timer](ifs/Timer.md) - 定时器处理器对象
* [UrlObject](ifs/UrlObject.md) - UrlObject 是用于表示 URL 信息的一种对象，我们可以方便地使用 UrlObject 对象表示和操作一个 URL 地址。
* [WebSocket](ifs/WebSocket.md) - WebSocket 是一种基于 TCP 协议的全双工通信协议，在浏览器和服务器之间建立起一个不断开的连接，可以实现实时双向数据传输，并且可以支持任意格式的数据传输。在 fibjs 中，WebSocket 支持模块提供了相应的 API 接口，可以实现 WebSocket 服务器端和客户端的开发
* [WebSocketMessage](ifs/WebSocketMessage.md) - `WebSocketMessage` 是 WebSocket 协议中的一种消息类型，它封装了 WebSocket 传输协议中各类消息的数据格式和处理方式，可用于 WebSocket 客户端和服务端双方通信。
* [WebView](ifs/WebView.md) - 浏览器窗口对象
* [Worker](ifs/Worker.md) - Worker 对象是用于创建子线程的对象，可以在程序中创建和处理子线程。一个 Worker 对象可以理解为一个在与主线程不同的线程中执行的 JavaScript 进程。 Worker 不与主线程共享内存，不会阻塞主线程，是一种主流的异步编程方式
* [X509Cert](ifs/X509Cert.md) - X509Cert 是 crypto 模块中表示 x509 证书的对象，这个对象主要包括了从一个 DER 或者 PEM 格式的证书数据以及证书链数据构建出来的证书信息和方法，可以进行证书的解析和验证等操作
* [X509Crl](ifs/X509Crl.md) - X509Crl 对象是 crypto 模块中的一个对象，用来表示 X509 撤销证书，即证书的吊销列表，与 CA 相关的操作如 X509 证书链的验证都会用到撤销列表信息
* [X509Req](ifs/X509Req.md) - X509Req 对象是用于创建 x509 证书请求的对象，属于 crypto 模块
* [XmlAttr](ifs/XmlAttr.md) - XmlAttr 对象表示 XmlElement 对象的属性
* [XmlCDATASection](ifs/XmlCDATASection.md) - XmlCDATASection 对象表示文档中的 CDATA 区段
* [XmlCharacterData](ifs/XmlCharacterData.md) - XmlCharacterData 接口提供了 XmlText 和 XmlComment 节点的常用功能
* [XmlComment](ifs/XmlComment.md) - XmlComment 对象表示文档中注释节点的内容
* [XmlDocument](ifs/XmlDocument.md) - XmlDocument 是  xml 模块的一个对象，它代表整个 XML 文档，提供了对整个文档的访问入口
* [XmlDocumentType](ifs/XmlDocumentType.md) - XmlDocumentType 对象用于访问 XML 所定义的实体
* [XmlElement](ifs/XmlElement.md) - XmlElement 对象表示 XML 文档中的元素
* [XmlNamedNodeMap](ifs/XmlNamedNodeMap.md) - XmlNamedNodeMap 对象表示一个无顺序的属性列表
* [XmlNode](ifs/XmlNode.md) - XmlNode 对象是整个 DOM 的基础数据类型
* [XmlNodeList](ifs/XmlNodeList.md) - XmlNodeList 对象代表一个有顺序的节点列表
* [XmlProcessingInstruction](ifs/XmlProcessingInstruction.md) - XmlProcessingInstruction 对象表示 xml 处理指令
* [XmlText](ifs/XmlText.md) - XmlText 对象表示元素或属性的文本内容
* [ZipFile](ifs/ZipFile.md) - ZipFile 对象是 zip 格式文件压缩解压模块中的重要对象，提供了对 zip 文件的读写访问
* [object](ifs/object.md) - 基础对象，所有对象均继承于此
