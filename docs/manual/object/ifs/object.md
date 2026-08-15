# 对象 object
基础对象，所有对象均继承于此

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", fillcolor="lightgray", id="me", label="{object|toString()\ltoJSON()\l}"];
    AbortController [tooltip="AbortController", URL="AbortController.md", label="{AbortController}"];
    AsyncLocalStorage [tooltip="AsyncLocalStorage", URL="AsyncLocalStorage.md", label="{AsyncLocalStorage}"];
    AsyncResource [tooltip="AsyncResource", URL="AsyncResource.md", label="{AsyncResource}"];
    Blob [tooltip="Blob", URL="Blob.md", label="{Blob}"];
    File [tooltip="File", URL="File.md", label="{File}"];
    Buffer [tooltip="Buffer", URL="Buffer.md", label="{Buffer}"];
    Cipher [tooltip="Cipher", URL="Cipher.md", label="{Cipher}"];
    ConsoleObject [tooltip="ConsoleObject", URL="ConsoleObject.md", label="{ConsoleObject}"];
    CryptoKey [tooltip="CryptoKey", URL="CryptoKey.md", label="{CryptoKey}"];
    DOMEvent [tooltip="DOMEvent", URL="DOMEvent.md", label="{DOMEvent}"];
    DOMParser [tooltip="DOMParser", URL="DOMParser.md", label="{DOMParser}"];
    DOMTokenList [tooltip="DOMTokenList", URL="DOMTokenList.md", label="{DOMTokenList}"];
    DbConnection [tooltip="DbConnection", URL="DbConnection.md", label="{DbConnection}"];
    MySQL [tooltip="MySQL", URL="MySQL.md", label="{MySQL}"];
    SQLite [tooltip="SQLite", URL="SQLite.md", label="{SQLite}"];
    Digest [tooltip="Digest", URL="Digest.md", label="{Digest}"];
    DirEntry [tooltip="DirEntry", URL="DirEntry.md", label="{DirEntry}"];
    ECDH [tooltip="ECDH", URL="ECDH.md", label="{ECDH}"];
    EventEmitter [tooltip="EventEmitter", URL="EventEmitter.md", label="{EventEmitter}"];
    AbortSignal [tooltip="AbortSignal", URL="AbortSignal.md", label="{AbortSignal}"];
    ChildProcess [tooltip="ChildProcess", URL="ChildProcess.md", label="{ChildProcess}"];
    DgramSocket [tooltip="DgramSocket", URL="DgramSocket.md", label="{DgramSocket}"];
    EventSource [tooltip="EventSource", URL="EventSource.md", label="{EventSource}"];
    FSWatcher [tooltip="FSWatcher", URL="FSWatcher.md", label="{FSWatcher}"];
    Http2Session [tooltip="Http2Session", URL="Http2Session.md", label="{Http2Session}"];
    HttpClient [tooltip="HttpClient", URL="HttpClient.md", label="{HttpClient}"];
    MenuItem [tooltip="MenuItem", URL="MenuItem.md", label="{MenuItem}"];
    Message [tooltip="Message", URL="Message.md", label="{Message}"];
    HttpMessage [tooltip="HttpMessage", URL="HttpMessage.md", label="{HttpMessage}"];
    HttpRequest [tooltip="HttpRequest", URL="HttpRequest.md", label="{HttpRequest}"];
    HttpResponse [tooltip="HttpResponse", URL="HttpResponse.md", label="{HttpResponse}"];
    WebSocketMessage [tooltip="WebSocketMessage", URL="WebSocketMessage.md", label="{WebSocketMessage}"];
    WorkerMessage [tooltip="WorkerMessage", URL="WorkerMessage.md", label="{WorkerMessage}"];
    MessagePort [tooltip="MessagePort", URL="MessagePort.md", label="{MessagePort}"];
    RTCDataChannel [tooltip="RTCDataChannel", URL="RTCDataChannel.md", label="{RTCDataChannel}"];
    RTCPeerConnection [tooltip="RTCPeerConnection", URL="RTCPeerConnection.md", label="{RTCPeerConnection}"];
    Service [tooltip="Service", URL="Service.md", label="{Service}"];
    StatsWatcher [tooltip="StatsWatcher", URL="StatsWatcher.md", label="{StatsWatcher}"];
    Stream [tooltip="Stream", URL="Stream.md", label="{Stream}"];
    BufferedStream [tooltip="BufferedStream", URL="BufferedStream.md", label="{BufferedStream}"];
    Http2Stream [tooltip="Http2Stream", URL="Http2Stream.md", label="{Http2Stream}"];
    SeekableStream [tooltip="SeekableStream", URL="SeekableStream.md", label="{SeekableStream}"];
    FileStream [tooltip="FileStream", URL="FileStream.md", label="{FileStream}"];
    MemoryStream [tooltip="MemoryStream", URL="MemoryStream.md", label="{MemoryStream}"];
    RangeStream [tooltip="RangeStream", URL="RangeStream.md", label="{RangeStream}"];
    Socket [tooltip="Socket", URL="Socket.md", label="{Socket}"];
    TLSSocket [tooltip="TLSSocket", URL="TLSSocket.md", label="{TLSSocket}"];
    TTYInputStream [tooltip="TTYInputStream", URL="TTYInputStream.md", label="{TTYInputStream}"];
    TTYOutputStream [tooltip="TTYOutputStream", URL="TTYOutputStream.md", label="{TTYOutputStream}"];
    TcpServer [tooltip="TcpServer", URL="TcpServer.md", label="{TcpServer}"];
    Http2Server [tooltip="Http2Server", URL="Http2Server.md", label="{Http2Server}"];
    HttpServer [tooltip="HttpServer", URL="HttpServer.md", label="{HttpServer}"];
    HttpsServer [tooltip="HttpsServer", URL="HttpsServer.md", label="{HttpsServer}"];
    TLSServer [tooltip="TLSServer", URL="TLSServer.md", label="{TLSServer}"];
    WebSocket [tooltip="WebSocket", URL="WebSocket.md", label="{WebSocket}"];
    WebView [tooltip="WebView", URL="WebView.md", label="{WebView}"];
    Worker [tooltip="Worker", URL="Worker.md", label="{Worker}"];
    ZlibCodec [tooltip="ZlibCodec", URL="ZlibCodec.md", label="{ZlibCodec}"];
    Deflate [tooltip="Deflate", URL="Deflate.md", label="{Deflate}"];
    DeflateRaw [tooltip="DeflateRaw", URL="DeflateRaw.md", label="{DeflateRaw}"];
    Gunzip [tooltip="Gunzip", URL="Gunzip.md", label="{Gunzip}"];
    Gzip [tooltip="Gzip", URL="Gzip.md", label="{Gzip}"];
    Inflate [tooltip="Inflate", URL="Inflate.md", label="{Inflate}"];
    InflateRaw [tooltip="InflateRaw", URL="InflateRaw.md", label="{InflateRaw}"];
    Unzip [tooltip="Unzip", URL="Unzip.md", label="{Unzip}"];
    Fiber [tooltip="Fiber", URL="Fiber.md", label="{Fiber}"];
    FileHandle [tooltip="FileHandle", URL="FileHandle.md", label="{FileHandle}"];
    Handler [tooltip="Handler", URL="Handler.md", label="{Handler}"];
    Chain [tooltip="Chain", URL="Chain.md", label="{Chain}"];
    HttpHandler [tooltip="HttpHandler", URL="HttpHandler.md", label="{HttpHandler}"];
    HttpRepeater [tooltip="HttpRepeater", URL="HttpRepeater.md", label="{HttpRepeater}"];
    Routing [tooltip="Routing", URL="Routing.md", label="{Routing}"];
    TLSHandler [tooltip="TLSHandler", URL="TLSHandler.md", label="{TLSHandler}"];
    HeapGraphEdge [tooltip="HeapGraphEdge", URL="HeapGraphEdge.md", label="{HeapGraphEdge}"];
    HeapGraphNode [tooltip="HeapGraphNode", URL="HeapGraphNode.md", label="{HeapGraphNode}"];
    HeapSnapshot [tooltip="HeapSnapshot", URL="HeapSnapshot.md", label="{HeapSnapshot}"];
    HttpCollection [tooltip="HttpCollection", URL="HttpCollection.md", label="{HttpCollection}"];
    FormData [tooltip="FormData", URL="FormData.md", label="{FormData}"];
    Headers [tooltip="Headers", URL="Headers.md", label="{Headers}"];
    URLSearchParams [tooltip="URLSearchParams", URL="URLSearchParams.md", label="{URLSearchParams}"];
    HttpCookie [tooltip="HttpCookie", URL="HttpCookie.md", label="{HttpCookie}"];
    HttpUploadData [tooltip="HttpUploadData", URL="HttpUploadData.md", label="{HttpUploadData}"];
    Iterator [tooltip="Iterator", URL="Iterator.md", label="{Iterator}"];
    KeyObject [tooltip="KeyObject", URL="KeyObject.md", label="{KeyObject}"];
    LevelDB [tooltip="LevelDB", URL="LevelDB.md", label="{LevelDB}"];
    Lock [tooltip="Lock", URL="Lock.md", label="{Lock}"];
    Condition [tooltip="Condition", URL="Condition.md", label="{Condition}"];
    Event [tooltip="Event", URL="Event.md", label="{Event}"];
    Semaphore [tooltip="Semaphore", URL="Semaphore.md", label="{Semaphore}"];
    Menu [tooltip="Menu", URL="Menu.md", label="{Menu}"];
    MessageChannel [tooltip="MessageChannel", URL="MessageChannel.md", label="{MessageChannel}"];
    MessageEvent [tooltip="MessageEvent", URL="MessageEvent.md", label="{MessageEvent}"];
    PerformanceEntry [tooltip="PerformanceEntry", URL="PerformanceEntry.md", label="{PerformanceEntry}"];
    PerformanceMark [tooltip="PerformanceMark", URL="PerformanceMark.md", label="{PerformanceMark}"];
    PerformanceMeasure [tooltip="PerformanceMeasure", URL="PerformanceMeasure.md", label="{PerformanceMeasure}"];
    PerformanceObserver [tooltip="PerformanceObserver", URL="PerformanceObserver.md", label="{PerformanceObserver}"];
    PerformanceObserverEntryList [tooltip="PerformanceObserverEntryList", URL="PerformanceObserverEntryList.md", label="{PerformanceObserverEntryList}"];
    RTCIceCandidate [tooltip="RTCIceCandidate", URL="RTCIceCandidate.md", label="{RTCIceCandidate}"];
    RTCSessionDescription [tooltip="RTCSessionDescription", URL="RTCSessionDescription.md", label="{RTCSessionDescription}"];
    Redis [tooltip="Redis", URL="Redis.md", label="{Redis}"];
    RedisHash [tooltip="RedisHash", URL="RedisHash.md", label="{RedisHash}"];
    RedisList [tooltip="RedisList", URL="RedisList.md", label="{RedisList}"];
    RedisSet [tooltip="RedisSet", URL="RedisSet.md", label="{RedisSet}"];
    RedisSortedSet [tooltip="RedisSortedSet", URL="RedisSortedSet.md", label="{RedisSortedSet}"];
    SandBox [tooltip="SandBox", URL="SandBox.md", label="{SandBox}"];
    Script [tooltip="Script", URL="Script.md", label="{Script}"];
    SecureContext [tooltip="SecureContext", URL="SecureContext.md", label="{SecureContext}"];
    Sign [tooltip="Sign", URL="Sign.md", label="{Sign}"];
    Smtp [tooltip="Smtp", URL="Smtp.md", label="{Smtp}"];
    Stat [tooltip="Stat", URL="Stat.md", label="{Stat}"];
    StreamReader [tooltip="StreamReader", URL="StreamReader.md", label="{StreamReader}"];
    StringDecoder [tooltip="StringDecoder", URL="StringDecoder.md", label="{StringDecoder}"];
    TextDecoder [tooltip="TextDecoder", URL="TextDecoder.md", label="{TextDecoder}"];
    TextEncoder [tooltip="TextEncoder", URL="TextEncoder.md", label="{TextEncoder}"];
    Timer [tooltip="Timer", URL="Timer.md", label="{Timer}"];
    Tray [tooltip="Tray", URL="Tray.md", label="{Tray}"];
    UrlObject [tooltip="UrlObject", URL="UrlObject.md", label="{UrlObject}"];
    Verify [tooltip="Verify", URL="Verify.md", label="{Verify}"];
    X509Certificate [tooltip="X509Certificate", URL="X509Certificate.md", label="{X509Certificate}"];
    X509CertificateRequest [tooltip="X509CertificateRequest", URL="X509CertificateRequest.md", label="{X509CertificateRequest}"];
    XMLSerializer [tooltip="XMLSerializer", URL="XMLSerializer.md", label="{XMLSerializer}"];
    XmlAttr [tooltip="XmlAttr", URL="XmlAttr.md", label="{XmlAttr}"];
    XmlNamedNodeMap [tooltip="XmlNamedNodeMap", URL="XmlNamedNodeMap.md", label="{XmlNamedNodeMap}"];
    XmlNode [tooltip="XmlNode", URL="XmlNode.md", label="{XmlNode}"];
    XmlCharacterData [tooltip="XmlCharacterData", URL="XmlCharacterData.md", label="{XmlCharacterData}"];
    XmlComment [tooltip="XmlComment", URL="XmlComment.md", label="{XmlComment}"];
    XmlText [tooltip="XmlText", URL="XmlText.md", label="{XmlText}"];
    XmlCDATASection [tooltip="XmlCDATASection", URL="XmlCDATASection.md", label="{XmlCDATASection}"];
    XmlDocument [tooltip="XmlDocument", URL="XmlDocument.md", label="{XmlDocument}"];
    XmlDocumentFragment [tooltip="XmlDocumentFragment", URL="XmlDocumentFragment.md", label="{XmlDocumentFragment}"];
    XmlDocumentType [tooltip="XmlDocumentType", URL="XmlDocumentType.md", label="{XmlDocumentType}"];
    XmlElement [tooltip="XmlElement", URL="XmlElement.md", label="{XmlElement}"];
    XmlProcessingInstruction [tooltip="XmlProcessingInstruction", URL="XmlProcessingInstruction.md", label="{XmlProcessingInstruction}"];
    XmlNodeList [tooltip="XmlNodeList", URL="XmlNodeList.md", label="{XmlNodeList}"];
    ZipFile [tooltip="ZipFile", URL="ZipFile.md", label="{ZipFile}"];

    object -> AbortController [dir=back];
    object -> AsyncLocalStorage [dir=back];
    object -> AsyncResource [dir=back];
    object -> Blob [dir=back];
    Blob -> File [dir=back];
    object -> Buffer [dir=back];
    object -> Cipher [dir=back];
    object -> ConsoleObject [dir=back];
    object -> CryptoKey [dir=back];
    object -> DOMEvent [dir=back];
    object -> DOMParser [dir=back];
    object -> DOMTokenList [dir=back];
    object -> DbConnection [dir=back];
    DbConnection -> MySQL [dir=back];
    DbConnection -> SQLite [dir=back];
    object -> Digest [dir=back];
    object -> DirEntry [dir=back];
    object -> ECDH [dir=back];
    object -> EventEmitter [dir=back];
    EventEmitter -> AbortSignal [dir=back];
    EventEmitter -> ChildProcess [dir=back];
    EventEmitter -> DgramSocket [dir=back];
    EventEmitter -> EventSource [dir=back];
    EventEmitter -> FSWatcher [dir=back];
    EventEmitter -> Http2Session [dir=back];
    EventEmitter -> HttpClient [dir=back];
    EventEmitter -> MenuItem [dir=back];
    EventEmitter -> Message [dir=back];
    Message -> HttpMessage [dir=back];
    HttpMessage -> HttpRequest [dir=back];
    HttpMessage -> HttpResponse [dir=back];
    Message -> WebSocketMessage [dir=back];
    Message -> WorkerMessage [dir=back];
    EventEmitter -> MessagePort [dir=back];
    EventEmitter -> RTCDataChannel [dir=back];
    EventEmitter -> RTCPeerConnection [dir=back];
    EventEmitter -> Service [dir=back];
    EventEmitter -> StatsWatcher [dir=back];
    EventEmitter -> Stream [dir=back];
    Stream -> BufferedStream [dir=back];
    Stream -> Http2Stream [dir=back];
    Stream -> SeekableStream [dir=back];
    SeekableStream -> FileStream [dir=back];
    SeekableStream -> MemoryStream [dir=back];
    SeekableStream -> RangeStream [dir=back];
    Stream -> Socket [dir=back];
    Stream -> TLSSocket [dir=back];
    Stream -> TTYInputStream [dir=back];
    Stream -> TTYOutputStream [dir=back];
    EventEmitter -> TcpServer [dir=back];
    TcpServer -> Http2Server [dir=back];
    TcpServer -> HttpServer [dir=back];
    HttpServer -> HttpsServer [dir=back];
    TcpServer -> TLSServer [dir=back];
    EventEmitter -> WebSocket [dir=back];
    EventEmitter -> WebView [dir=back];
    EventEmitter -> Worker [dir=back];
    EventEmitter -> ZlibCodec [dir=back];
    ZlibCodec -> Deflate [dir=back];
    ZlibCodec -> DeflateRaw [dir=back];
    ZlibCodec -> Gunzip [dir=back];
    ZlibCodec -> Gzip [dir=back];
    ZlibCodec -> Inflate [dir=back];
    ZlibCodec -> InflateRaw [dir=back];
    ZlibCodec -> Unzip [dir=back];
    object -> Fiber [dir=back];
    object -> FileHandle [dir=back];
    object -> Handler [dir=back];
    Handler -> Chain [dir=back];
    Handler -> HttpHandler [dir=back];
    Handler -> HttpRepeater [dir=back];
    Handler -> Routing [dir=back];
    Handler -> TLSHandler [dir=back];
    object -> HeapGraphEdge [dir=back];
    object -> HeapGraphNode [dir=back];
    object -> HeapSnapshot [dir=back];
    object -> HttpCollection [dir=back];
    HttpCollection -> FormData [dir=back];
    HttpCollection -> Headers [dir=back];
    HttpCollection -> URLSearchParams [dir=back];
    object -> HttpCookie [dir=back];
    object -> HttpUploadData [dir=back];
    object -> Iterator [dir=back];
    object -> KeyObject [dir=back];
    object -> LevelDB [dir=back];
    object -> Lock [dir=back];
    Lock -> Condition [dir=back];
    Lock -> Event [dir=back];
    Lock -> Semaphore [dir=back];
    object -> Menu [dir=back];
    object -> MessageChannel [dir=back];
    object -> MessageEvent [dir=back];
    object -> PerformanceEntry [dir=back];
    PerformanceEntry -> PerformanceMark [dir=back];
    PerformanceEntry -> PerformanceMeasure [dir=back];
    object -> PerformanceObserver [dir=back];
    object -> PerformanceObserverEntryList [dir=back];
    object -> RTCIceCandidate [dir=back];
    object -> RTCSessionDescription [dir=back];
    object -> Redis [dir=back];
    object -> RedisHash [dir=back];
    object -> RedisList [dir=back];
    object -> RedisSet [dir=back];
    object -> RedisSortedSet [dir=back];
    object -> SandBox [dir=back];
    object -> Script [dir=back];
    object -> SecureContext [dir=back];
    object -> Sign [dir=back];
    object -> Smtp [dir=back];
    object -> Stat [dir=back];
    object -> StreamReader [dir=back];
    object -> StringDecoder [dir=back];
    object -> TextDecoder [dir=back];
    object -> TextEncoder [dir=back];
    object -> Timer [dir=back];
    object -> Tray [dir=back];
    object -> UrlObject [dir=back];
    object -> Verify [dir=back];
    object -> X509Certificate [dir=back];
    object -> X509CertificateRequest [dir=back];
    object -> XMLSerializer [dir=back];
    object -> XmlAttr [dir=back];
    object -> XmlNamedNodeMap [dir=back];
    object -> XmlNode [dir=back];
    XmlNode -> XmlCharacterData [dir=back];
    XmlCharacterData -> XmlComment [dir=back];
    XmlCharacterData -> XmlText [dir=back];
    XmlText -> XmlCDATASection [dir=back];
    XmlNode -> XmlDocument [dir=back];
    XmlNode -> XmlDocumentFragment [dir=back];
    XmlNode -> XmlDocumentType [dir=back];
    XmlNode -> XmlElement [dir=back];
    XmlNode -> XmlProcessingInstruction [dir=back];
    object -> XmlNodeList [dir=back];
    object -> ZipFile [dir=back];
}
```

## 成员函数
        
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String object.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value object.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

