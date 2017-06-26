# 对象 Smtp
Smtp对象

## 继承关系
<div class="inherits"><svg width="75pt" height="310pt" viewBox="0.00 0.00 75.11 310.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 306)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-306 71.11,-306 71.11,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="4.7235,-213.5 4.7235,-301.5 62.3865,-301.5 62.3865,-213.5 4.7235,-213.5"/>
<text text-anchor="middle" x="33.555" y="-288.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="4.7235,-281.5 62.3865,-281.5 "/>
<text text-anchor="start" x="12.7235" y="-268.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="12.7235" y="-256.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="12.7235" y="-244.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="12.7235" y="-232.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="12.7235" y="-220.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Smtp -->
<g id="node2" class="node">
<title>Smtp</title>
<g id="a_node2"><a xlink:title="Smtp">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-176.5 67.11,-176.5 67.11,-.5 0,-.5"/>
<text text-anchor="middle" x="33.555" y="-163.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Smtp</text>
<polyline fill="none" stroke="#000000" points="0,-156.5 67.11,-156.5 "/>
<text text-anchor="start" x="8" y="-143.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Smtp()</text>
<polyline fill="none" stroke="#000000" points="0,-136.5 67.11,-136.5 "/>
<text text-anchor="start" x="8" y="-123.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">timeout</text>
<text text-anchor="start" x="8" y="-111.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">socket</text>
<polyline fill="none" stroke="#000000" points="0,-104.5 67.11,-104.5 "/>
<text text-anchor="start" x="8" y="-91.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">connect()</text>
<text text-anchor="start" x="8" y="-79.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">command()</text>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">hello()</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">login()</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">from()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">to()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">data()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">quit()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Smtp -->
<g id="edge1" class="edge">
<title>object-&gt;Smtp</title>
<path fill="none" stroke="#000000" d="M33.555,-203.0622C33.555,-194.6261 33.555,-185.7304 33.555,-176.778"/>
<polygon fill="#000000" stroke="#000000" points="30.0551,-203.0972 33.555,-213.0972 37.0551,-203.0973 30.0551,-203.0972"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Smtp
** Smtp 对象构造函数 **

```JavaScript
new Smtp();
```

## 成员属性
        
### timeout
** Integer, 查询和设置超时时间 单位毫秒 **

```JavaScript
Integer Smtp.timeout;
```

--------------------------
### socket
** [Stream](Stream.md), 查询 Smtp 对象当前连接的 [Socket](Socket.md) **

```JavaScript
readonly Stream Smtp.socket;
```

## 成员函数
        
### connect
** 建立到指定的服务器 **

```JavaScript
Smtp.connect(String url) async;
```

调用参数:
* url: String, 指定连接的协议，可以是：tcp://host:port 或者 [ssl](../../module/ifs/ssl.md)://host:port

--------------------------
### command
** 发送指定命令，并返回响应，服务器报错则抛出错误 **

```JavaScript
String Smtp.command(String cmd,
    String arg) async;
```

调用参数:
* cmd: String, 命令名
* arg: String, 参数

返回结果:
* String, 如果成功，返回服务器响应

--------------------------
### hello
** 发送 HELO 命令，服务器报错则抛出错误 **

```JavaScript
Smtp.hello(String hostname = "localhost") async;
```

调用参数:
* hostname: String, 主机名，缺省为“localhost”

--------------------------
### login
** 用指定的用户及密码登录服务器，服务器报错则抛出错误 **

```JavaScript
Smtp.login(String username,
    String password) async;
```

调用参数:
* username: String, 用户名
* password: String, 密码

--------------------------
### from
** 指定发件人信箱，服务器报错则抛出错误 **

```JavaScript
Smtp.from(String address) async;
```

调用参数:
* address: String, 发件人信箱

--------------------------
### to
** 指定收件人信箱，服务器报错则抛出错误 **

```JavaScript
Smtp.to(String address) async;
```

调用参数:
* address: String, 收件人信箱

--------------------------
### data
** 发送文本到收件人，服务器报错则抛出错误 **

```JavaScript
Smtp.data(String txt) async;
```

调用参数:
* txt: String, 要发送的文本

--------------------------
### quit
** 退出并关闭连接，服务器报错则抛出错误 **

```JavaScript
Smtp.quit() async;
```

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Smtp.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Smtp.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Smtp.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Smtp.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Smtp.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

