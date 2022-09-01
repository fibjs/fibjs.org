# 对象 TextEncoder
TextEncoder 编码对象

创建方法

```JavaScript
var textEncoder = new util.TextEncoder('utf8');
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
[<this>TextEncoder|new TextEncoder()|encoding|encode()]

[object] <:- [TextEncoder]
```

## 构造函数
        
### TextEncoder
**TextEncoder 对象构造函数，使用参数构造**

```JavaScript
new TextEncoder(String codec = "utf8",
    Object opts = {});
```

调用参数:
* codec: String, 指定编码字符集
* opts: Object, 指定编码选项

## 成员属性
        
### encoding
**String, 查询当前的编码字符集**

```JavaScript
readonly String TextEncoder.encoding;
```

## 成员函数
        
### encode
**将文本转换为二进制数据**

```JavaScript
Buffer TextEncoder.encode(String data = "",
    Object opts = {});
```

调用参数:
* data: String, 要转换的文本
* opts: Object, 指定编码选项

返回结果:
* [Buffer](Buffer.md), 返回编码的二进制数据

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String TextEncoder.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value TextEncoder.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

