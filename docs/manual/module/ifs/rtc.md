# 模块 rtc
WebRTC 网络实时通信模块

## 对象
        
### RTCPeerConnection
**WebRTC 连接对象，参见 [RTCPeerConnection](../../object/ifs/RTCPeerConnection.md)**

```JavaScript
RTCPeerConnection rtc.RTCPeerConnection;
```

--------------------------
### RTCSessionDescription
**WebRTC 会话描述对象，参见 [RTCSessionDescription](../../object/ifs/RTCSessionDescription.md)**

```JavaScript
RTCSessionDescription rtc.RTCSessionDescription;
```

--------------------------
### RTCIceCandidate
**WebRTC ICE 候选参数对象，参见 [RTCIceCandidate](../../object/ifs/RTCIceCandidate.md)**

```JavaScript
RTCIceCandidate rtc.RTCIceCandidate;
```

## 静态函数
        
### listen
**在指定地址和端口上绑定一个 WebRTC 侦听服务**

```JavaScript
static rtc.listen(String bind_address,
    Integer local_port,
    Function cb);
```

调用参数:
* bind_address: String, 绑定地址
* local_port: Integer, 本地端口
* cb: Function, 回调函数

bind 方法用于在指定地址和端口上绑定一个 WebRTC 侦听服务，用于响应未握手的 WebRTC 连接请求。

--------------------------
**在指定端口上绑定一个 WebRTC 侦听服务**

```JavaScript
static rtc.listen(Integer local_port,
    Function cb);
```

调用参数:
* local_port: Integer, 本地端口
* cb: Function, 回调函数

bind 方法用于在指定端口上绑定一个 WebRTC 侦听服务，用于响应未握手的 WebRTC 连接请求。

--------------------------
### stopListen
**解除 WebRTC 侦听服务绑定**

```JavaScript
static rtc.stopListen(String bind_address,
    Integer local_port);
```

调用参数:
* bind_address: String, 绑定地址
* local_port: Integer, 本地端口

--------------------------
**解除 WebRTC 侦听服务绑定**

```JavaScript
static rtc.stopListen(Integer local_port);
```

调用参数:
* local_port: Integer, 本地端口

--------------------------
### setSctpSettings
**@! @brief 设置 WebRTC 全局 SCTP 参数**

```JavaScript
static rtc.setSctpSettings(Object settings);
```

调用参数:
* settings: Object, SCTP 参数

setSctpSettings 方法用于设置 WebRTC 全局 SCTP 参数，新设置的参数会立即生效。已经存在的连接不受影响。支持以下参数：
   - `recvBufferSize` - 接收缓冲区大小，以字节为单位（默认值: 1MiB）
   - `sendBufferSize` - 发送缓冲区大小，以字节为单位（默认值: 1MiB）
   - `maxChunksOnQueue` - 队列中最大数据块数量（默认值: 10K）
   - `initialCongestionWindow` - 初始拥塞窗口大小，以 MTU（最大传输单元）为单位（默认值: 10 MTUs）
   - `maxBurst` - 最大突发传输量，以 MTU 为单位（默认值: 10 MTUs）
   - `congestionControlModule` - 拥塞控制模块，0: RFC2581（默认），1: HSTCP，2: H-TCP，3: RTCC
   - `delayedSackTimeMs` - 延迟确认时间，以毫秒为单位（默认值: 20ms）
   - `minRetransmitTimeoutMs` - 最小重传超时时间，以毫秒为单位（默认值: 200ms）
   - `maxRetransmitTimeoutMs` - 最大重传超时时间，以毫秒为单位（默认值: 10s）
   - `initialRetransmitTimeoutMs` - 初始重传超时时间，以毫秒为单位（默认值: 1s）
   - `maxRetransmitAttempts` - 最大重传尝试次数（默认值: 5）
   - `heartbeatIntervalMs` - 心跳间隔时间，以毫秒为单位（默认值: 10s）

