# 对象 HttpCookie
[http](/docs/manual/module/ifs/http.md.html) Cookie 对象，用于添加和处理 cookie

## 构造函数
        
### HttpCookie
[HttpCookie](/docs/manual/object/ifs/httpcookie.md.html) 构造函数，创建一个新的 [HttpCookie](/docs/manual/object/ifs/httpcookie.md.html) 对象
```JavaScript
 new HttpCookie(Object opts = {});
```

调用参数:
* opts - 指定创建的 cookie 的属性

--------------------------
[HttpCookie](/docs/manual/object/ifs/httpcookie.md.html) 构造函数，创建一个新的 [HttpCookie](/docs/manual/object/ifs/httpcookie.md.html) 对象
```JavaScript
 new HttpCookie(String name,
                String value,
                Object opts = {});
```

调用参数:
* name - 指定创建的 cookie 名称
* value - 指定创建的 cookie 值
* opts - 指定创建的 cookie 的其它属性

## 函数
        
### parse
解析给定的字符串，填充 cookie 对象
```JavaScript
HttpCookie.parse(String header);
```

调用参数:
* header - 指定需要解析的 header 字符串

### match
检测给定的 [url](/docs/manual/module/ifs/url.md.html) 是否匹配当前设置
```JavaScript
Boolean HttpCookie.match(String url);
```

调用参数:
* url - 指定测试的 url

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
HttpCookie.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean HttpCookie.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
```JavaScript
String HttpCookie.toString();
```

返回结果:
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value HttpCookie.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value HttpCookie.valueOf();
```

返回结果:
* 返回对象本身的数值

## 属性
        
### name
查询和设置 cookie 名称
```JavaScript
String HttpCookie.name;
```

### value
查询和设置 cookie 的值
```JavaScript
String HttpCookie.value;
```

### domain
查询和设置 cookie 的域名范围
```JavaScript
String HttpCookie.domain;
```

### path
查询和设置 cookie 的路径范围
```JavaScript
String HttpCookie.path;
```

### expires
查询和设置 cookie 的过期时间
```JavaScript
Date HttpCookie.expires;
```

### httpOnly
查询和设置 cookie 是否仅允许 [http](/docs/manual/module/ifs/http.md.html) 请求，缺省 false
```JavaScript
Boolean HttpCookie.httpOnly;
```

### secure
查询和设置 cookie 是否仅通过 https 传递，缺省 false
```JavaScript
Boolean HttpCookie.secure;
```

