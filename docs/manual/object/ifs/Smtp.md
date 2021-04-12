# 对象 Smtp
Smtp对象

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<this>Smtp|new Smtp()|timeout;socket|connect();command();hello();login();from();to();data();quit()]

[object] <:- [Smtp]
```

## 构造函数
        
### Smtp
**Smtp 对象构造函数**

```JavaScript
new Smtp();
```

## 成员属性
        
### timeout
**Integer, 查询和设置超时时间 单位毫秒**

```JavaScript
Integer Smtp.timeout;
```

--------------------------
### socket
**[Stream](Stream.md), 查询 Smtp 对象当前连接的 [Socket](Socket.md)**

```JavaScript
readonly Stream Smtp.socket;
```

## 成员函数
        
### connect
**建立到指定的服务器**

```JavaScript
Smtp.connect(String url) async;
```

调用参数:
* url: String, 指定连接的协议，可以是：tcp://host:port 或者 [ssl](../../module/ifs/ssl.md)://host:port

--------------------------
### command
**发送指定命令，并返回响应，服务器报错则抛出错误**

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
**发送 HELO 命令，服务器报错则抛出错误**

```JavaScript
Smtp.hello(String hostname = "localhost") async;
```

调用参数:
* hostname: String, 主机名，缺省为“localhost”

--------------------------
### login
**用指定的用户及密码登录服务器，服务器报错则抛出错误**

```JavaScript
Smtp.login(String username,
    String password) async;
```

调用参数:
* username: String, 用户名
* password: String, 密码

--------------------------
### from
**指定发件人信箱，服务器报错则抛出错误**

```JavaScript
Smtp.from(String address) async;
```

调用参数:
* address: String, 发件人信箱

--------------------------
### to
**指定收件人信箱，服务器报错则抛出错误**

```JavaScript
Smtp.to(String address) async;
```

调用参数:
* address: String, 收件人信箱

--------------------------
### data
**发送文本到收件人，服务器报错则抛出错误**

```JavaScript
Smtp.data(String txt) async;
```

调用参数:
* txt: String, 要发送的文本

--------------------------
### quit
**退出并关闭连接，服务器报错则抛出错误**

```JavaScript
Smtp.quit() async;
```

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String Smtp.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value Smtp.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

