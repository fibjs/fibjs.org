# Modules
* System
  - [child_process](ifs/child_process.md) - The child_process module runs external programs and JavaScript modules in child processes; it provides streaming, buffered and synchronous call forms
  - [console](ifs/console.md) - Console access: leveled logging, output devices, terminal control and input
  - [coroutine](ifs/coroutine.md) - The fiber runtime: fiber creation and scheduling, parallel execution and fiber-level
  - [global](ifs/global.md) - The global object, the base object that every script and module can access directly
  - [gui](ifs/gui.md) - Desktop GUI: browser-backed windows, native menus, tray icons and modal dialogs
  - [module](ifs/module.md) - The module module exposes Node.js-compatible helpers about the module system itself
  - [os](ifs/os.md) - The os module reports the operating system the process runs on: platform and kernel identity, CPU and memory resources, user and network information, plus fibjs time helpers
  - [process](ifs/process.md) - The process module describes and controls the current fibjs process: its arguments and environment, working directory, resources, exit and standard streams; useful for command line tools, service entry points and diagnostics
  - [timers](ifs/timers.md) - The timers module schedules callbacks: a one-time or repeated delay, an immediate callback and a function call with a timeout limit; useful for delayed tasks, periodic polling, letting other work run and protecting against blocking code
  - [tty](ifs/tty.md) - Detects terminals and wraps the process standard streams in TTY stream classes
  - [vm](ifs/vm.md) - The vm module runs JavaScript source text in the current context or in a fresh, isolated context and exposes the SandBox module registry; use it to evaluate generated code, reuse a compiled script and keep evaluated code away from host globals
  - [worker_threads](ifs/worker_threads.md) - The worker_threads module runs JavaScript in real OS threads, one isolate per Worker, and exchanges structured-clone messages with them
* File System
  - [fs](ifs/fs.md) - The fs module provides file system operations: reading and writing files and directories, creating and removing them, changing permissions, querying status, resolving paths and watching files; useful for file management, logging and persisted configuration
  - [io](ifs/io.md) - The io module provides stream creation and data movement between streams
  - [path](ifs/path.md) - The path module provides utilities for working with file and directory paths; it is
  - [path_posix](ifs/path_posix.md) - The posix rule set of the path module: it processes POSIX paths on every platform
  - [path_win32](ifs/path_win32.md) - The win32 rule set of the path module: it processes Windows paths on every platform
* Network
  - [dgram](ifs/dgram.md) - The dgram module provides UDP datagram sockets: create a socket, bind it to a local port, send datagrams to a destination and receive each datagram as one message; useful for discovery and telemetry protocols, broadcast and multicast delivery and any service where message boundaries matter
  - [dns](ifs/dns.md) - The dns module resolves host names to IP addresses: query the first address of a name or all of its addresses, restricted to an address family when needed; useful for connection targets, service discovery and address checks
  - [http](ifs/http.md) - The http module provides HTTP client and server capabilities: creating HTTP/HTTPS servers, sending requests, handling requests and responses, cookies, proxies and compression
  - [http2](ifs/http2.md) - the http2 module provides HTTP/2 client and server capabilities
  - [mime](ifs/mime.md) - The mime module maps file names and extensions to MIME types and manages a process-wide extension registry
  - [mq](ifs/mq.md) - The message queue module: the handler pipeline behind the network servers
  - [net](ifs/net.md) - The net module provides TCP networking: connecting to TCP servers and unix sockets, resolving host names, detecting IP addresses and creating TCP servers; it is the foundation of the network modules (http, tls, smtp, dgram)
  - [punycode](ifs/punycode.md) - The punycode module converts internationalized domain names between Unicode and the ASCII-compatible Punycode encoding of RFC 3492
  - [querystring](ifs/querystring.md) - The querystring module parses and serializes URL query strings with the application/x-www-form-urlencoded rules
  - [rtc](ifs/rtc.md) - The rtc module establishes WebRTC peer connections: it negotiates a session between two endpoints through the signaling channel of the application and then carries text or binary data over data channels without a central relay, which suits file transfer, chat and bidirectional streams between browsers or between fibjs processes
  - [tls](ifs/tls.md) - The tls module adds TLS/SSL encryption to stream connections: it creates secure contexts, TLS servers and TLS clients, and verifies peer certificates
  - [url](ifs/url.md) - The url module parses, formats and resolves URLs; it provides the WHATWG URL and URLSearchParams classes together with the legacy UrlObject API, file path conversion and internationalized domain name conversion
* Encoding
  - [base32](ifs/base32.md) - The base32 module encodes binary data with the RFC 4648 base32 alphabet
  - [base64](ifs/base64.md) - The base64 module encodes binary data with the RFC 4648 alphabet, URL-safe or not
  - [base58](ifs/base58.md) - The base58 module encodes binary data with the Bitcoin base58 alphabet
  - [encoding](ifs/encoding.md) - The `encoding` module is fibjs's byte-and-text conversion toolbox: it converts between Buffer bytes and JavaScript strings in the representations used by files, network protocols and storage formats, going beyond the encodings that Buffer alone provides
  - [hex](ifs/hex.md) - The hex module converts binary data to and from hexadecimal text
  - [json](ifs/json.md) - The json module serializes JavaScript values to and from JSON text
  - [multibase](ifs/multibase.md) - The multibase module encodes binary data as a self-describing string carrying its codec
  - [msgpack](ifs/msgpack.md) - The msgpack module serializes values to the MessagePack binary format and back
  - [string_decoder](ifs/string_decoder.md) - Node.js-compatible alias module whose single export is the StringDecoder class
* Crypto
  - [crypto](ifs/crypto.md) - The `crypto` module is the built-in cryptography module of fibjs. It provides
  - [subtle](ifs/subtle.md) - Promise-based Web Crypto operations: digests, keys, signatures and ECDH agreement
  - [webcrypto](ifs/webcrypto.md) - Web Crypto API for fibjs: random values, UUIDs, keys and subtle operations
* Compress
  - [zip](ifs/zip.md) - The zip module opens, creates and inspects zip archives and mounts them as a read-only FS
  - [zlib](ifs/zlib.md) - The zlib module is the built-in compression module of fibjs: it compresses and
* Test
  - [assert](ifs/assert.md) - The assert module provides the legacy comparison-mode assertion functions used to
  - [performance](ifs/performance.md) - Provides the performance timeline API: a monotonic clock plus named marks and measures for measuring and instrumenting application timings
  - [perf_hooks](ifs/perf_hooks.md) - Node.js compatibility entry point that exposes the performance measurement API
  - [v8](ifs/v8.md) - V8 runtime introspection: heap statistics, heap snapshots and value serialization
  - [test](ifs/test.md) - The test module is fibjs's built-in test framework: it provides the describe/it style
  - [test_suite](ifs/test_suite.md) - The test_suite module defines the nested suites of the test framework: a suite
* Utility
  - [colors](ifs/colors.md) - ANSI escape sequences that color terminal output
  - [db](ifs/db.md) - The db module opens and manages database connections: it is the single entry
  - [registry](ifs/registry.md) - The registry module accesses the Windows Registry: it reads, writes, enumerates and deletes keys and values; the module exists only in Windows builds
  - [types](ifs/types.md) - Built-in type-tag inspection helpers, exposed as `util.types`
  - [util](ifs/util.md) - Utility helpers for formatting, inspecting, type checks, async wrappers and collections
  - [uuid](ifs/uuid.md) - Generates and converts UUIDs (universally unique identifiers) as defined by RFC 9562 and its predecessor RFC 4122
  - [xml](ifs/xml.md) - The XML/HTML DOM toolkit of fibjs: it parses XML and HTML text into an
* Constants
  - [constants](ifs/constants.md) - The legacy aggregate constants module: dynamic library flags, error codes, process
  - [fs_constants](ifs/fs_constants.md) - The constants of the fs module: file open, access, seek, type, permission and copy
  - [crypto_constants](ifs/crypto_constants.md) - The crypto_constants module defines the RSA padding modes and PSS salt lengths
  - [zlib_constants](ifs/zlib_constants.md) - The zlib_constants module enumerates the constants of the zlib library bundled
* [assert_strict](ifs/assert_strict.md) - The assert_strict module provides the strict comparison-mode assertion functions;
* [async_hooks](ifs/async_hooks.md) - The async_hooks module exposes the Node.js compatible classes for tracking asynchronous context: AsyncLocalStorage and AsyncResource
* [http2_constants](ifs/http2_constants.md) - The http2_constants module collects the HTTP/2 protocol constants used by the http2
* [os_constants](ifs/os_constants.md) - The constant object of the os module: the errno, signal, priority and dlopen tables
* [os_constants_dlopen](ifs/os_constants_dlopen.md) - The dlopen table of os.constants: the dynamic loader flags accepted by
* [os_constants_errno](ifs/os_constants_errno.md) - The errno table of os.constants: the POSIX error codes of the running platform
* [os_constants_priority](ifs/os_constants_priority.md) - The priority table of os.constants: the process scheduling levels of libuv
* [os_constants_signals](ifs/os_constants_signals.md) - The signals table of os.constants: the signal numbers of the running platform
* [sse](ifs/sse.md) - The sse module is the server side of the Server-Sent Events protocol: it upgrades an HTTP request into a text/event-stream response and pushes events to EventSource clients
