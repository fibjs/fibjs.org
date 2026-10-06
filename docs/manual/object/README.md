# Built-in Objects
* [AbortController](ifs/AbortController.md) - The controller object that owns an AbortSignal and cancels the operations listening to it
* [AbortSignal](ifs/AbortSignal.md) - The signal that communicates cancellation to asynchronous operations
* [AsyncLocalStorage](ifs/AsyncLocalStorage.md) - AsyncLocalStorage stores a value and makes it available to an asynchronous call chain, similar to thread-local storage; it is used to carry request-scoped data such as a request id, a user or a trace context across callbacks, promises and fibers without passing it as an argument
* [AsyncResource](ifs/AsyncResource.md) - AsyncResource captures the asynchronous context at construction time so it can be restored later; it is the building block for wrapping callback-based APIs whose callbacks must run in the context of the operation that started them
* [Blob](ifs/Blob.md) - An immutable container of raw bytes, the Web Blob API of fibjs
* [Buffer](ifs/Buffer.md) - Fixed-length binary data buffer used by io, hashing, compression and network protocols
* [BufferedStream](ifs/BufferedStream.md) - A buffered reader over any Stream, with text helpers
* [CSSStyleDeclaration](ifs/CSSStyleDeclaration.md) - CSSStyleDeclaration is the live view of an element's inline `style` declaration block, obtained from the `style` property of an HTML-mode element
* [Chain](ifs/Chain.md) - A message handler chain that runs a series of handlers in order
* [ChildProcess](ifs/ChildProcess.md) - A handle to a child process created by spawn, fork or the callback form of exec, execFile and run
* [Cipher](ifs/Cipher.md) - Symmetric cipher object that transforms a byte stream with a secret key
* [Condition](ifs/Condition.md) - A condition variable: park fibers until shared state becomes true
* [ConsoleObject](ifs/ConsoleObject.md) - Console-like logger bound to a pair of writable objects
* [CryptoKey](ifs/CryptoKey.md) - Handle to a Web Crypto key: key material plus algorithm, extractable flag and usages
* [DOMEvent](ifs/DOMEvent.md) - DOMEvent is the DOM-style event object installed as the global `Event` class: a value
* [DOMParser](ifs/DOMParser.md) - DOMParser parses an HTML or XML source string into an XmlDocument; the class is a global and Node.js has no equivalent
* [DOMStringMap](ifs/DOMStringMap.md) - DOMStringMap is the live camelCase view of the `data-*` attributes of an element, obtained from the `dataset` property
* [DOMTokenList](ifs/DOMTokenList.md) - The DOMTokenList object represents a set of space-separated tokens, commonly
* [DbConnection](ifs/DbConnection.md) - DbConnection is the base class of SQL database connections: it owns one session
* [Deflate](ifs/Deflate.md) - Deflate is the Node.js compatible codec that compresses data to the zlib format
* [DeflateRaw](ifs/DeflateRaw.md) - DeflateRaw is the Node.js compatible codec that compresses data to raw deflate
* [DgramSocket](ifs/DgramSocket.md) - A UDP datagram socket: an EventEmitter endpoint that binds a local port, sends one datagram at a time to a destination, and delivers every received datagram through the 'message' event
* [Digest](ifs/Digest.md) - Streaming message-digest (hash) object, also used for HMAC
* [Dir](ifs/Dir.md) - Iterator over the entries of one directory, read one entry at a time
* [DirEntry](ifs/DirEntry.md) - A directory entry: the name and the type of one item inside a directory
* [ECDH](ifs/ECDH.md) - Elliptic-curve Diffie-Hellman key-agreement object
* [Event](ifs/Event.md) - Event is the fiber-level event primitive of the coroutine module: a broadcast gate that
* [EventEmitter](ifs/EventEmitter.md) - EventEmitter is the observer-pattern base class of the runtime; every class that can
* [EventSource](ifs/EventSource.md) - A client for the Server-Sent Events protocol, the fibjs EventSource implementation
* [FSWatcher](ifs/FSWatcher.md) - Watches a file or directory with the platform notification service
* [Fiber](ifs/Fiber.md) - The handle of a fiber: identity, lifetime and fiber-local storage
* [File](ifs/File.md) - An in-memory file: a Blob with a file name and a modification time
* [FileHandle](ifs/FileHandle.md) - An open file descriptor: reads, writes and inspects one open file by position
* [FileStream](ifs/FileStream.md) - Binary file stream: reads, writes and positions one open file
* [FormData](ifs/FormData.md) - An ordered collection of form field names and values, inheriting from HttpCollection
* [Gunzip](ifs/Gunzip.md) - Gunzip is the Node.js compatible codec that decompresses gzip data
* [Gzip](ifs/Gzip.md) - Gzip is the Node.js compatible codec that compresses data to the gzip container
* [Handler](ifs/Handler.md) - The message handler contract and the constructor that builds every handler form
* [Headers](ifs/Headers.md) - The case-insensitive HTTP header collection of the Fetch API, inheriting from
* [HeapGraphEdge](ifs/HeapGraphEdge.md) - A directed reference between two HeapGraphNode objects
* [HeapGraphNode](ifs/HeapGraphNode.md) - A single object node in a heap snapshot graph
* [HeapSnapshot](ifs/HeapSnapshot.md) - A captured view of the V8 heap as a graph of nodes and edges
* [Http2Server](ifs/Http2Server.md) - an HTTP/2 server: it accepts TLS connections that negotiate the `h2` ALPN protocol
* [Http2Session](ifs/Http2Session.md) - an HTTP/2 session: a TLS connection shared by many concurrent streams with its settings and lifecycle
* [Http2Stream](ifs/Http2Stream.md) - one HTTP/2 stream: an independent request/response carried by a session, a duplex Stream
* [HttpClient](ifs/HttpClient.md) - The HttpClient class provides an independent HTTP/HTTPS client: its own connection pool, cookie jar, defaults and optional TLS identity
* [HttpCollection](ifs/HttpCollection.md) - HttpCollection is the ordered multi-map base class behind the HTTP collections of fibjs: Headers, URLSearchParams, FormData and the request cookie collection
* [HttpCookie](ifs/HttpCookie.md) - HttpCookie represents one HTTP cookie: a name/value pair with the domain, path, expiry and security attributes that scope it
* [HttpHandler](ifs/HttpHandler.md) - Turns a stream carrying HTTP messages into request/response handling
* [HttpMessage](ifs/HttpMessage.md) - HTTP message base object: the protocol metadata shared by HttpRequest and HttpResponse
* [HttpRepeater](ifs/HttpRepeater.md) - An HTTP request forwarder (reverse proxy) to one or more backend servers
* [HttpRequest](ifs/HttpRequest.md) - The HTTP request message: what a server receives and what a client sends
* [HttpResponse](ifs/HttpResponse.md) - The HTTP response message: what a handler writes and what a client receives
* [HttpServer](ifs/HttpServer.md) - The HTTP server object: a TcpServer plus HttpHandler that serves requests by handlers
* [HttpUploadData](ifs/HttpUploadData.md) - HttpUploadData describes one part of a multipart/form-data upload: its file name, media type, transfer encoding and content stream
* [HttpsServer](ifs/HttpsServer.md) - The HTTPS server: an HttpServer whose connections are terminated by an embedded TLSServer
* [Inflate](ifs/Inflate.md) - Inflate is the Node.js compatible codec that decompresses zlib-format data
* [InflateRaw](ifs/InflateRaw.md) - InflateRaw is the Node.js compatible codec that decompresses raw deflate data
* [Iterator](ifs/Iterator.md) - Iterator is the abstract base class of every fibjs object that yields values one by one
* [KeyObject](ifs/KeyObject.md) - Opaque handle to symmetric or asymmetric key material
* [LevelDB](ifs/LevelDB.md) - An embedded key-value store backed by LevelDB and kept in a directory
* [Lock](ifs/Lock.md) - A reentrant mutual-exclusion lock between fibers
* [MemoryStream](ifs/MemoryStream.md) - Memory stream object: a growable in-memory buffer used as a read/write stream
* [Menu](ifs/Menu.md) - Ordered list of MenuItem objects, shown as a window menu bar or a tray menu
* [MenuItem](ifs/MenuItem.md) - Menu item, one row of a native Menu, created from a plain object descriptor
* [Message](ifs/Message.md) - Basic message object: the payload unit shared by the networking stacks
* [MessageChannel](ifs/MessageChannel.md) - MessageChannel creates a connected pair of MessagePort objects
* [MessageEvent](ifs/MessageEvent.md) - MessageEvent is the object a MessagePort delivers for a received message; the payload is available in its `data` property
* [MessagePort](ifs/MessagePort.md) - MessagePort is one end of a message channel; a value posted to it is structured-cloned and delivered to the paired port
* [MySQL](ifs/MySQL.md) - MySQL is the DbConnection implementation for MySQL servers
* [PerformanceEntry](ifs/PerformanceEntry.md) - The base class of a timeline record, describing one mark or measure
* [PerformanceMark](ifs/PerformanceMark.md) - A mark recorded in the performance timeline: a named timestamp with an optional detail
* [PerformanceMeasure](ifs/PerformanceMeasure.md) - A measure computed from a start and an end: a duration entry with an optional detail
* [PerformanceObserver](ifs/PerformanceObserver.md) - Observes performance entries and delivers them to a callback
* [PerformanceObserverEntryList](ifs/PerformanceObserverEntryList.md) - The batch of performance entries passed to a PerformanceObserver callback
* [RTCDataChannel](ifs/RTCDataChannel.md) - RTCDataChannel is one bidirectional data channel of an RTCPeerConnection
* [RTCIceCandidate](ifs/RTCIceCandidate.md) - RTCIceCandidate holds one ICE candidate of a WebRTC session: a transport address at which a peer can be reached during the connectivity checks
* [RTCPeerConnection](ifs/RTCPeerConnection.md) - RTCPeerConnection manages one WebRTC session: it negotiates the session through descriptions, gathers ICE candidates and hosts the data channels that carry the application data
* [RTCSessionDescription](ifs/RTCSessionDescription.md) - RTCSessionDescription wraps one session description (SDP) of a WebRTC session
* [RangeStream](ifs/RangeStream.md) - Range query stream reading object
* [Redis](ifs/Redis.md) - A Redis connection: the general command surface and the typed key views
* [RedisHash](ifs/RedisHash.md) - A view of one Redis hash key: field and value operations without repeating the key
* [RedisList](ifs/RedisList.md) - A view of one Redis list key: element operations without repeating the key in every call
* [RedisSet](ifs/RedisSet.md) - A view of one Redis set key: member operations without repeating the key
* [RedisSortedSet](ifs/RedisSortedSet.md) - A view of one Redis sorted-set key: score-ordered member operations
* [Routing](ifs/Routing.md) - Matches a message against routing rules and dispatches it to the first match
* [SQLite](ifs/SQLite.md) - SQLite is the DbConnection implementation for SQLite databases: one file (or an
* [SandBox](ifs/SandBox.md) - An isolated module registry that runs code with an optional standalone global object; use it to load untrusted or host-reloaded code without touching the host module table
* [Script](ifs/Script.md) - A precompiled script: compiles source text once, then runs it in any context; use it instead of the one-shot vm.runIn* functions when the same code is executed repeatedly or across contexts
* [SecureContext](ifs/SecureContext.md) - A TLS configuration shared by connections: certificates, trust store, protocol versions, ALPN list and verification flags
* [SeekableStream](ifs/SeekableStream.md) - A stream whose current position can be queried and moved
* [Semaphore](ifs/Semaphore.md) - A counting semaphore between fibers: limits concurrency and hands work from
* [Service](ifs/Service.md) - A Windows system service: run a JavaScript function under the Service Control Manager
* [Sign](ifs/Sign.md) - Streaming signature generator
* [Smtp](ifs/Smtp.md) - A minimal SMTP client that talks to a mail server command by command
* [Socket](ifs/Socket.md) - A network socket: a TCP, unix socket or Windows pipe endpoint used to connect, listen and transfer data
* [Stat](ifs/Stat.md) - File status information object
* [Statement](ifs/Statement.md) - Statement is a prepared statement created by DbConnection.prepare(): it can be
* [StatsWatcher](ifs/StatsWatcher.md) - File Stats watcher object
* [Stream](ifs/Stream.md) - The abstract byte-stream base class shared by every fibjs stream object
* [StreamReader](ifs/StreamReader.md) - A lightweight reader over a fibjs Stream, shaped like a WHATWG reader
* [StringDecoder](ifs/StringDecoder.md) - Decodes a byte stream into text chunk by chunk, holding back the incomplete tail of a multibyte character so that characters split across chunk boundaries survive
* [TLSHandler](ifs/TLSHandler.md) - A TLS protocol handler: it upgrades each accepted raw stream to TLS and invokes the wrapped handler with the resulting TLSSocket
* [TLSServer](ifs/TLSServer.md) - A TLS server: a fiber-per-connection TCP server whose listener receives an encrypted TLSSocket
* [TLSSocket](ifs/TLSSocket.md) - An encrypted stream endpoint: the TLS counterpart of a Socket, reading and writing through an established TLS session
* [TTYInputStream](ifs/TTYInputStream.md) - The readable side of a terminal: reads input and switches between cooked and raw mode
* [TTYOutputStream](ifs/TTYOutputStream.md) - The writable side of a terminal: window size, resize events and ANSI cursor control
* [TcpServer](ifs/TcpServer.md) - A fiber-per-connection TCP server: it binds an address and hands every accepted connection to a handler, one Socket and one fiber per client
* [TextDecoder](ifs/TextDecoder.md) - Decodes bytes into JavaScript strings, the Web TextDecoder API of fibjs
* [TextEncoder](ifs/TextEncoder.md) - Encodes JavaScript strings into bytes, the Web TextEncoder API of fibjs
* [Timer](ifs/Timer.md) - Timer is the handle returned by every timer scheduling function; it controls the timer lifecycle: keep-alive, cancellation and state
* [Tray](ifs/Tray.md) - System tray icon with an optional menu, created by gui.createTray
* [URLSearchParams](ifs/URLSearchParams.md) - The ordered query-parameter collection of the URL Standard, inheriting from
* [Unzip](ifs/Unzip.md) - Unzip is the Node.js compatible codec that decompresses gzip or zlib data by
* [UrlObject](ifs/UrlObject.md) - URL object implementing the WHATWG URL standard and the legacy URL object at once
* [Verify](ifs/Verify.md) - Streaming signature verifier
* [WebSocket](ifs/WebSocket.md) - A WebSocket client and server endpoint, the fibjs implementation of the WebSocket API
* [WebSocketMessage](ifs/WebSocketMessage.md) - The message object exchanged by WebSocket peers, a Message with frame metadata
* [WebView](ifs/WebView.md) - WebView object, an embedded browser view owned by a desktop application window
* [Worker](ifs/Worker.md) - Worker creates a JavaScript child thread and controls it; use it for CPU-bound work that would block the fiber scheduler of the main isolate
* [X509Certificate](ifs/X509Certificate.md) - A parsed X.509 certificate: reads the subject, issuer, validity, extensions,
* [X509CertificateRequest](ifs/X509CertificateRequest.md) - An X.509 certificate request (CSR): a subject and a public key signed by the
* [XMLSerializer](ifs/XMLSerializer.md) - XMLSerializer serializes a DOM node into XML text; the class is a global and Node.js has no equivalent
* [XmlAttr](ifs/XmlAttr.md) - The XmlAttr object represents one attribute of an XmlElement: a name, a value
* [XmlCDATASection](ifs/XmlCDATASection.md) - The XmlCDATASection object represents a CDATA section in a document
* [XmlCharacterData](ifs/XmlCharacterData.md) - The abstract interface that provides the character-handling members shared by
* [XmlComment](ifs/XmlComment.md) - The XmlComment object represents the content of a comment node in a document
* [XmlDocument](ifs/XmlDocument.md) - XmlDocument is the root of the fibjs XML/HTML DOM: it owns the node tree and
* [XmlDocumentFragment](ifs/XmlDocumentFragment.md) - The XmlDocumentFragment object represents a lightweight document object that
* [XmlDocumentType](ifs/XmlDocumentType.md) - The XmlDocumentType object represents the doctype declaration of a document
* [XmlElement](ifs/XmlElement.md) - XmlElement is the element node type of the fibjs XML/HTML DOM: the only node that
* [XmlNamedNodeMap](ifs/XmlNamedNodeMap.md) - The XmlNamedNodeMap object represents the attributes of an element as an
* [XmlNode](ifs/XmlNode.md) - The abstract base interface of every node in the fibjs XML/HTML DOM: it defines
* [XmlNodeList](ifs/XmlNodeList.md) - The XmlNodeList object represents an ordered list of nodes, 0-based and
* [XmlProcessingInstruction](ifs/XmlProcessingInstruction.md) - The XmlProcessingInstruction object represents a processing instruction
* [XmlText](ifs/XmlText.md) - The XmlText object represents a run of plain text in a document
* [ZipFile](ifs/ZipFile.md) - The ZipFile object gives read and write access to the entries of a single zip archive
* [ZlibCodec](ifs/ZlibCodec.md) - ZlibCodec is the base class of the Node.js compatible zlib codec classes; build
* [object](ifs/object.md) - The base class of every native object and the hooks used to convert one
