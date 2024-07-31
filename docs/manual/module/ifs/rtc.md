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

