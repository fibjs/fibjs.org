# 对象 HttpCookie
[http](../../module/ifs/http.md) Cookie 对象，用于添加和处理 cookie

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<this>HttpCookie|new HttpCookie()|name;value;domain;path;expires;httpOnly;secure|parse();match()]

[object] <:- [HttpCookie]
```

## 构造函数
        
### HttpCookie
**HttpCookie 构造函数，创建一个新的 HttpCookie 对象**

```JavaScript
new HttpCookie(Object opts = {});
```

调用参数:
* opts: Object, 指定创建的 cookie 的属性

opts 可以设置的选项如下：

```JavaScript
{
    "name": "", // 指定创建的 cookie 名称
    "value": "", // 指定创建的 cookie 值
    "expires": Date, // 指定创建的 cookie 过期时间
    "domain": "", // 指定创建的 cookie 的域名范围
    "path": "", // 指定创建的 cookie 的路径范围
    "secure": false, // 指定创建的 cookie 是否仅通过 https 传递
    "httpOnly": false, // 指定创建的 cookie 仅允许 http 请求
}
```

--------------------------
**HttpCookie 构造函数，创建一个新的 HttpCookie 对象**

```JavaScript
new HttpCookie(String name,
    String value,
    Object opts = {});
```

调用参数:
* name: String, 指定创建的 cookie 名称
* value: String, 指定创建的 cookie 值
* opts: Object, 指定创建的 cookie 的其它属性

opts 可以设置的选项如下：

```JavaScript
{
    "expires": Date, // 指定创建的 cookie 过期时间
    "domain": "", // 指定创建的 cookie 的域名范围
    "path": "", // 指定创建的 cookie 的路径范围
    "secure": false, // 指定创建的 cookie 是否仅通过 https 传递
    "httpOnly": false, // 指定创建的 cookie 仅允许 http 请求
}
```

## 成员属性
        
### name
**String, 查询和设置 cookie 名称**

```JavaScript
String HttpCookie.name;
```

--------------------------
### value
**String, 查询和设置 cookie 的值**

```JavaScript
String HttpCookie.value;
```

--------------------------
### domain
**String, 查询和设置 cookie 的域名范围**

```JavaScript
String HttpCookie.domain;
```

--------------------------
### path
**String, 查询和设置 cookie 的路径范围**

```JavaScript
String HttpCookie.path;
```

--------------------------
### expires
**Date, 查询和设置 cookie 的过期时间**

```JavaScript
Date HttpCookie.expires;
```

--------------------------
### httpOnly
**Boolean, 查询和设置 cookie 是否仅允许 [http](../../module/ifs/http.md) 请求，缺省 false**

```JavaScript
Boolean HttpCookie.httpOnly;
```

--------------------------
### secure
**Boolean, 查询和设置 cookie 是否仅通过 https 传递，缺省 false**

```JavaScript
Boolean HttpCookie.secure;
```

## 成员函数
        
### parse
**解析给定的字符串，填充 cookie 对象**

```JavaScript
HttpCookie.parse(String header);
```

调用参数:
* header: String, 指定需要解析的 header 字符串

--------------------------
### match
**检测给定的 [url](../../module/ifs/url.md) 是否匹配当前设置**

```JavaScript
Boolean HttpCookie.match(String url);
```

调用参数:
* url: String, 指定测试的 [url](../../module/ifs/url.md)

返回结果:
* Boolean, 匹配成功返回 true

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String HttpCookie.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value HttpCookie.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

