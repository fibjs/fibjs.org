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
<div class="inherits"><svg width="103pt" height="328pt" viewBox="0.00 0.00 103.00 328.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 324)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-324 99,-324 99,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="19,-228 19,-320 76,-320 76,-228 19,-228"/>
<polygon fill="none" stroke="#000000" points="19.5,-298 19.5,-320 76.5,-320 76.5,-298 19.5,-298"/>
<text text-anchor="start" x="34.6625" y="-306" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="19.5,-228 19.5,-298 76.5,-298 76.5,-228 19.5,-228"/>
<text text-anchor="start" x="24.5" y="-284" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="24.5" y="-272" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="24.5" y="-260" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="24.5" y="-248" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="24.5" y="-236" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Handler -->
<g id="node2" class="node">
<title>Handler</title>
<g id="a_node2"><a xlink:href="Handler.md" xlink:title="Handler">
<polygon fill="#ffffff" stroke="transparent" points="7,-126 7,-192 88,-192 88,-126 7,-126"/>
<polygon fill="none" stroke="#000000" points="7.5,-170 7.5,-192 88.5,-192 88.5,-170 7.5,-170"/>
<text text-anchor="start" x="30.4985" y="-178" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Handler</text>
<polygon fill="none" stroke="#000000" points="7.5,-148 7.5,-170 88.5,-170 88.5,-148 7.5,-148"/>
<text text-anchor="start" x="12.5" y="-156" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Handler()</text>
<polygon fill="none" stroke="#000000" points="7.5,-126 7.5,-148 88.5,-148 88.5,-126 7.5,-126"/>
<text text-anchor="start" x="12.5" y="-134" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> invoke()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Handler -->
<g id="edge1" class="edge">
<title>object-&gt;Handler</title>
<path fill="none" stroke="#000000" d="M47.5,-217.6502C47.5,-208.8735 47.5,-200.0612 47.5,-192.0314"/>
<polygon fill="#000000" stroke="#000000" points="44.0001,-217.8877 47.5,-227.8877 51.0001,-217.8878 44.0001,-217.8877"/>
</g>
<!-- SslHandler -->
<g id="node3" class="node">
<title>SslHandler</title>
<g id="a_node3"><a xlink:title="SslHandler">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-90 95,-90 95,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-68 .5,-90 95.5,-90 95.5,-68 .5,-68"/>
<text text-anchor="start" x="23.5545" y="-76" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SslHandler</text>
<polygon fill="none" stroke="#000000" points=".5,-46 .5,-68 95.5,-68 95.5,-46 .5,-46"/>
<text text-anchor="start" x="5.5" y="-54" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new SslHandler()</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-46 95.5,-46 95.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> verification</text>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> ca</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> handler</text>
</a>
</g>
</g>
<!-- Handler&#45;&gt;SslHandler -->
<g id="edge2" class="edge">
<title>Handler-&gt;SslHandler</title>
<path fill="none" stroke="#000000" d="M47.5,-115.5605C47.5,-107.3264 47.5,-98.6915 47.5,-90.3987"/>
<polygon fill="#000000" stroke="#000000" points="44.0001,-115.72 47.5,-125.72 51.0001,-115.7201 44.0001,-115.72"/>
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

