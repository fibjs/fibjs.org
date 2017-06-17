# 内置对象
* [AsyncWait](ifs/AsyncWait.md) - 消息处理器异步等待对象
* [BlockQueue](ifs/BlockQueue.md) - 阻塞 FIFO（先进先出）队列对象
* [Buffer](ifs/Buffer.md) - 二进制数据缓存对象，用于 io 读写的数据处理
* [BufferedStream](ifs/BufferedStream.md) - 缓存读取对象
* [Chain](ifs/Chain.md) - 消息处理器链处理对象
* [Cipher](ifs/Cipher.md) - 对称加密算法对象
* [Condition](ifs/Condition.md) - 条件变量对象
* [DatagramPacket](ifs/DatagramPacket.md) - UDP 数据包
* [DbConnection](ifs/DbConnection.md) - 数据库连接对象，用于建立和维护一个数据库连接会话。
* [DBResult](ifs/DBResult.md) - 数据库结果集合对象
* [DBRow](ifs/DBRow.md) - 数据库记录对象
* [Digest](ifs/Digest.md) - 信息摘要对象
* [Event](ifs/Event.md) - 事件对象
* [EventEmitter](ifs/EventEmitter.md) - 事件触发对象，可用于建立观察者模式，支持事件触发的对象均继承于此，同一事件的同一函数只会产生一次回调
* [EventInfo](ifs/EventInfo.md) - 事件信息对象，用于在事件中传递信息
* [Fiber](ifs/Fiber.md) - 纤程操作对象，此对象不可直接创建
* [File](ifs/File.md) - 文件操作对象，用于二进制文件读写
* [GridFS](ifs/GridFS.md) - MongoDB GridFS 分布式文件系统访问对象
* [Handler](ifs/Handler.md) - 消息处理器接口
* [HandlerEx](ifs/HandlerEx.md) - 扩展消息处理器接口
* [HeapGraphEdge](ifs/HeapGraphEdge.md) - HeapGraphEdge表示两个HeapGraphNode节点间的关联，从上游节点到下游节点
* [HeapGraphNode](ifs/HeapGraphNode.md) - HeapGraphNode表示堆视图中的一个节点
* [HeapSnapshot](ifs/HeapSnapshot.md) - HeapSnapshots记录JS堆在某个时刻的状态
* [HttpClient](ifs/HttpClient.md) - http客户端对象
* [HttpCollection](ifs/HttpCollection.md) - http 容器对象，用于 http header，cookie，query，form，等数据的存储与组织
* [HttpCookie](ifs/HttpCookie.md) - http Cookie 对象，用于添加和处理 cookie
* [HttpHandler](ifs/HttpHandler.md) - http 协议转换处理器
* [HttpMessage](ifs/HttpMessage.md) - http 基础消息对象
* [HttpRequest](ifs/HttpRequest.md) - http 请求消息对象
* [HttpResponse](ifs/HttpResponse.md) - http 响应消息对象
* [HttpServer](ifs/HttpServer.md) - http 服务器对象
* [HttpsServer](ifs/HttpsServer.md) - https 服务器对象
* [HttpUploadData](ifs/HttpUploadData.md) - 包含 multipart 的一个条目数据
* [Image](ifs/Image.md) - 图像处理对象，用以对图像进行转换，绘制，存储等操作
* [Int64](ifs/Int64.md) - 64位整数对象
* [LevelDB](ifs/LevelDB.md) - LevelDB 数据库对象
* [List](ifs/List.md) - Variant 数组对象，一般用以返回一组 Variant 数据
* [Lock](ifs/Lock.md) - 纤程锁对象
* [LruCache](ifs/LruCache.md) - LRU(least recently used) 缓存对象
* [Map](ifs/Map.md) - 字典对象
* [MemoryStream](ifs/MemoryStream.md) - 内存流对象
* [Message](ifs/Message.md) - 基础消息对象
* [MongoCollection](ifs/MongoCollection.md) - mongodb 数据库数据集对象
* [MongoCursor](ifs/MongoCursor.md) - mongodb 数据库数据游标对象
* [MongoDB](ifs/MongoDB.md) - mongodb 数据库连接对象
* [MongoID](ifs/MongoID.md) - mongodb 数据库数据唯一标识对象，用于存储传递 oid
* [MSSQL](ifs/MSSQL.md) - SQL Server 数据库连接对象
* [MySQL](ifs/MySQL.md) - mysql 数据库连接对象
* [object](ifs/object.md) - 基础对象，所有对象均继承于此
* [PKey](ifs/PKey.md) - 不对称加密算法对象
* [Queue](ifs/Queue.md) - FIFO（先进先出）队列对象
* [Redis](ifs/Redis.md) - Redis 数据库客户端对象
* [RedisHash](ifs/RedisHash.md) - Redis 数据库客户端 Hash 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库
* [RedisList](ifs/RedisList.md) - Redis 数据库客户端 List 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库
* [RedisSet](ifs/RedisSet.md) - Redis 数据库客户端 Set 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库
* [RedisSortedSet](ifs/RedisSortedSet.md) - Redis 数据库客户端 SortedSet 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库
* [Regex](ifs/Regex.md) - 正则表达式对象
* [Routing](ifs/Routing.md) - 消息处理器路由对象
* [SandBox](ifs/SandBox.md) - 安全沙箱对象，用于管理一个独立的运行空间
* [SeekableStream](ifs/SeekableStream.md) - 可移动当前指针的流对象接口
* [Semaphore](ifs/Semaphore.md) - 纤程信号量对象
* [Service](ifs/Service.md) - 系统服务管理对象
* [Smtp](ifs/Smtp.md) - Smtp对象
* [Socket](ifs/Socket.md) - 网络套接口对象
* [SQLite](ifs/SQLite.md) - sqlite 数据库连接对象
* [SslHandler](ifs/SslHandler.md) - ssl 协议转换处理器
* [SslServer](ifs/SslServer.md) - ssl 服务器对象，可方便创建一个标准多纤程 ssl 服务器
* [SslSocket](ifs/SslSocket.md) - ssl 网络套接口对象
* [Stat](ifs/Stat.md) - 文件的基础信息对象
* [Stats](ifs/Stats.md) - 数据统计对象，用以构建应用运行时数据收集
* [Stream](ifs/Stream.md) - 流操作对象，用于二进制数据流读写
* [SubProcess](ifs/SubProcess.md) - 子进程对象
* [TcpServer](ifs/TcpServer.md) - tcp 服务器对象，可方便创建一个标准多纤程 tcp 服务器
* [TextColor](ifs/TextColor.md) - 终端输出颜色配置对象
* [Timer](ifs/Timer.md) - 定时器处理器对象
* [UrlObject](ifs/UrlObject.md) - Url 处理对象
* [WebSocket](ifs/WebSocket.md) - WebSocket 包协议转换处理器
* [WebSocketHandler](ifs/WebSocketHandler.md) - WebSocket 包协议转换处理器
* [WebSocketMessage](ifs/WebSocketMessage.md) - websocket 消息对象
* [WebView](ifs/WebView.md) - 浏览器窗口对象
* [Worker](ifs/Worker.md) - 独立线程工作对象
* [X509Cert](ifs/X509Cert.md) - x509 证书对象
* [X509Crl](ifs/X509Crl.md) - x509 撤销证书对象
* [X509Req](ifs/X509Req.md) - x509 证书请求对象
* [XmlAttr](ifs/XmlAttr.md) - XmlAttr 对象表示 XmlElement 对象的属性
* [XmlCDATASection](ifs/XmlCDATASection.md) - XmlCDATASection 对象表示文档中的 CDATA 区段
* [XmlCharacterData](ifs/XmlCharacterData.md) - XmlCharacterData 接口提供了 XmlText 和 XmlComment 节点的常用功能
* [XmlComment](ifs/XmlComment.md) - XmlComment 对象表示文档中注释节点的内容
* [XmlDocument](ifs/XmlDocument.md) - XmlDocument 对象代表整个 XML 文档
* [XmlDocumentType](ifs/XmlDocumentType.md) - XmlDocumentType 对象用于访问 XML 所定义的实体
* [XmlElement](ifs/XmlElement.md) - XmlElement 对象表示 XML 文档中的元素
* [XmlNamedNodeMap](ifs/XmlNamedNodeMap.md) - XmlNamedNodeMap 对象表示一个无顺序的属性列表
* [XmlNode](ifs/XmlNode.md) - XmlNode 对象是整个 DOM 的基础数据类型
* [XmlNodeList](ifs/XmlNodeList.md) - XmlNodeList 对象代表一个有顺序的节点列表
* [XmlProcessingInstruction](ifs/XmlProcessingInstruction.md) - XmlProcessingInstruction 对象表示 xml 处理指令
* [XmlText](ifs/XmlText.md) - XmlText 对象表示元素或属性的文本内容
* [ZipFile](ifs/ZipFile.md) - zip 文件访问对象
* [ZipInfo](ifs/ZipInfo.md) - zip 文件访问对象
* [ZmqSocket](ifs/ZmqSocket.md) - ZeroMQ 套接口对象
