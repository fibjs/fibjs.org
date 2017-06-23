# 对象 Smtp
Smtp对象

## 继承关系
<div class="inherits"><svg width="77pt" height="320pt" viewBox="0.00 0.00 77.00 320.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 316)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-316 73,-316 73,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="6,-220 6,-312 63,-312 63,-220 6,-220"/>
<polygon fill="none" stroke="#000000" points="6.5,-290 6.5,-312 63.5,-312 63.5,-290 6.5,-290"/>
<text text-anchor="start" x="21.6625" y="-298" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="6.5,-220 6.5,-290 63.5,-290 63.5,-220 6.5,-220"/>
<text text-anchor="start" x="11.5" y="-276" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="11.5" y="-264" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="11.5" y="-252" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="11.5" y="-240" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="11.5" y="-228" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Smtp -->
<g id="node2" class="node">
<title>Smtp</title>
<g id="a_node2"><a xlink:title="Smtp">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-184 69,-184 69,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-162 .5,-184 69.5,-184 69.5,-162 .5,-162"/>
<text text-anchor="start" x="23.332" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Smtp</text>
<polygon fill="none" stroke="#000000" points=".5,-140 .5,-162 69.5,-162 69.5,-140 .5,-140"/>
<text text-anchor="start" x="5.5" y="-148" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Smtp()</text>
<polygon fill="none" stroke="#000000" points=".5,-106 .5,-140 69.5,-140 69.5,-106 .5,-106"/>
<text text-anchor="start" x="5.5" y="-126" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> timeout</text>
<text text-anchor="start" x="5.5" y="-114" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> socket</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-106 69.5,-106 69.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-92" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> connect()</text>
<text text-anchor="start" x="5.5" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> command()</text>
<text text-anchor="start" x="5.5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> hello()</text>
<text text-anchor="start" x="5.5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> login()</text>
<text text-anchor="start" x="5.5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> from()</text>
<text text-anchor="start" x="5.5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> to()</text>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> data()</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> quit()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Smtp -->
<g id="edge1" class="edge">
<title>object-&gt;Smtp</title>
<path fill="none" stroke="#000000" d="M34.5,-209.6889C34.5,-201.4874 34.5,-192.8685 34.5,-184.1806"/>
<polygon fill="#000000" stroke="#000000" points="31.0001,-209.828 34.5,-219.828 38.0001,-209.8281 31.0001,-209.828"/>
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

