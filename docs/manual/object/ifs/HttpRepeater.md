# 对象 HttpRepeater
[http](../../module/ifs/http.md) 请求转发处理器

[http](../../module/ifs/http.md) 用于将 [http](../../module/ifs/http.md) 请求转发到后端服务器
用法如下：

```JavaScript
var http = require('http');
var hr = new http.Repeater('http://10.0.0.100:8080/test');
```

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<class>Handler|new Handler()|invoke()]
[<this>HttpRepeater|new HttpRepeater()|urls;client|load()]

[object] <:- [Handler]
[Handler] <:- [HttpRepeater]
```

## 构造函数
        
### HttpRepeater
**HttpRepeater 构造函数，创建一个新的 HttpRepeater 对象**

```JavaScript
new HttpRepeater(String url);
```

调用参数:
* url: String, 指定一个后端服务器 [url](../../module/ifs/url.md)

--------------------------
**HttpRepeater 构造函数，创建一个新的 HttpRepeater 对象**

```JavaScript
new HttpRepeater(Array urls);
```

调用参数:
* urls: Array, 指定一组后端服务器 [url](../../module/ifs/url.md)

## 成员属性
        
### urls
**NArray, 查询当前后端服务器 [url](../../module/ifs/url.md) 列表**

```JavaScript
readonly NArray HttpRepeater.urls;
```

--------------------------
### client
**[HttpClient](HttpClient.md), 请求转发处理器内部使用的 [HttpClient](HttpClient.md) 对象**

```JavaScript
readonly HttpClient HttpRepeater.client;
```

## 成员函数
        
### load
**加载一组新的后端 [url](../../module/ifs/url.md)**

```JavaScript
HttpRepeater.load(Array urls);
```

调用参数:
* urls: Array, 指定一组后端服务器 [url](../../module/ifs/url.md)

--------------------------
### invoke
**处理一个消息或对象**

```JavaScript
Handler HttpRepeater.invoke(object v) async;
```

调用参数:
* v: [object](object.md), 指定处理的消息或对象

返回结果:
* [Handler](Handler.md), 返回下一步的处理器

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String HttpRepeater.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value HttpRepeater.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

