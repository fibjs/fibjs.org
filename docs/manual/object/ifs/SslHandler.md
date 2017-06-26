# 对象 SslHandler
[ssl](../../module/ifs/ssl.md) 协议转换处理器

用以将数据流转换为 [ssl](../../module/ifs/ssl.md) 流协议。SslHandler 是对 [SslSocket](SslSocket.md) 的封装，用于构建服务器，逻辑上相当于：

```JavaScript
var ss = new ssl.Socket(crt, key);

function(s) {
    var s1 = ss.accept(s);
    hdlr.invoke(s1);
    s1.close();
}
```

## 继承关系
<div class="inherits"><svg width="101pt" height="315pt" viewBox="0.00 0.00 100.67 315.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 311)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-311 96.665,-311 96.665,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="17.501,-218.5 17.501,-306.5 75.164,-306.5 75.164,-218.5 17.501,-218.5"/>
<text text-anchor="middle" x="46.3325" y="-293.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="17.501,-286.5 75.164,-286.5 "/>
<text text-anchor="start" x="25.501" y="-273.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="25.501" y="-261.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="25.501" y="-249.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="25.501" y="-237.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="25.501" y="-225.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Handler -->
<g id="node2" class="node">
<title>Handler</title>
<g id="a_node2"><a xlink:href="Handler.md" xlink:title="Handler">
<polygon fill="#ffffff" stroke="#000000" points="6.944,-121.5 6.944,-181.5 85.721,-181.5 85.721,-121.5 6.944,-121.5"/>
<text text-anchor="middle" x="46.3325" y="-168.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Handler</text>
<polyline fill="none" stroke="#000000" points="6.944,-161.5 85.721,-161.5 "/>
<text text-anchor="start" x="14.944" y="-148.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Handler()</text>
<polyline fill="none" stroke="#000000" points="6.944,-141.5 85.721,-141.5 "/>
<text text-anchor="start" x="14.944" y="-128.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">invoke()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Handler -->
<g id="edge1" class="edge">
<title>object-&gt;Handler</title>
<path fill="none" stroke="#000000" d="M46.3325,-208.0719C46.3325,-198.9417 46.3325,-189.7729 46.3325,-181.5542"/>
<polygon fill="#000000" stroke="#000000" points="42.8326,-208.3109 46.3325,-218.3109 49.8326,-208.311 42.8326,-208.3109"/>
</g>
<!-- SslHandler -->
<g id="node3" class="node">
<title>SslHandler</title>
<g id="a_node3"><a xlink:title="SslHandler">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-84.5 92.665,-84.5 92.665,-.5 0,-.5"/>
<text text-anchor="middle" x="46.3325" y="-71.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SslHandler</text>
<polyline fill="none" stroke="#000000" points="0,-64.5 92.665,-64.5 "/>
<text text-anchor="start" x="8" y="-51.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new SslHandler()</text>
<polyline fill="none" stroke="#000000" points="0,-44.5 92.665,-44.5 "/>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">verification</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">ca</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">handler</text>
</a>
</g>
</g>
<!-- Handler&#45;&gt;SslHandler -->
<g id="edge2" class="edge">
<title>Handler-&gt;SslHandler</title>
<path fill="none" stroke="#000000" d="M46.3325,-111.2085C46.3325,-102.5708 46.3325,-93.4211 46.3325,-84.7129"/>
<polygon fill="#000000" stroke="#000000" points="42.8326,-111.4267 46.3325,-121.4267 49.8326,-111.4268 42.8326,-111.4267"/>
</g>
</g>
</svg></div>

## 构造函数
        
### SslHandler
** SslHandler 构造函数，创建一个新的 SslHandler 对象 **

```JavaScript
new SslHandler(Array certs,
    Handler hdlr);
```

调用参数:
* certs: Array, 服务器证书列表
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

certs 格式为：

```JavaScript
[{
        crt: [X509Cert object],
        key: [PKey object]
    },
    {
        crt: [X509Cert object],
        key: [PKey object]
    }
]
```

--------------------------
** SslHandler 构造函数，创建一个新的 SslHandler 对象 **

```JavaScript
new SslHandler(X509Cert crt,
    PKey key,
    Handler hdlr);
```

调用参数:
* crt: [X509Cert](X509Cert.md), [X509Cert](X509Cert.md) 证书，用于客户端验证服务器
* key: [PKey](PKey.md), [PKey](PKey.md) 私钥，用于与客户端会话
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

## 成员属性
        
### verification
** Integer, 设定证书验证模式，缺省为 VERIFY_NONE **

```JavaScript
Integer SslHandler.verification;
```

--------------------------
### ca
** [X509Cert](X509Cert.md), 客户端证书验证证书链 **

```JavaScript
readonly X509Cert SslHandler.ca;
```

--------------------------
### handler
** [Handler](Handler.md), [ssl](../../module/ifs/ssl.md) 协议转换处理器当前事件处理接口对象 **

```JavaScript
Handler SslHandler.handler;
```

## 成员函数
        
### invoke
** 处理一个消息或对象 **

```JavaScript
Handler SslHandler.invoke(object v) async;
```

调用参数:
* v: [object](object.md), 指定处理的消息或对象

返回结果:
* Handler, 返回下一步的处理器

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
SslHandler.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean SslHandler.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String SslHandler.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value SslHandler.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value SslHandler.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

