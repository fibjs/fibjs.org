# 对象 TextDecoder
TextDecoder 解码对象

创建方法

```JavaScript
var textDecoder = new util.TextDecoder('utf8');
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
[<this>TextDecoder|new TextDecoder()|encoding|decode()]

[object] <:- [TextDecoder]
```

## 构造函数
        
### TextDecoder
**TextDecoder 对象构造函数，使用参数构造**

```JavaScript
new TextDecoder(String codec = "utf8",
    Object opts = {});
```

调用参数:
* codec: String, 指定解码字符集
* opts: Object, 指定解码选项

## 成员属性
        
### encoding
**String, 查询当前的编码字符集**

```JavaScript
readonly String TextDecoder.encoding;
```

## 成员函数
        
### decode
**将二进制数据转换为文本**

```JavaScript
String TextDecoder.decode(Buffer data,
    Object opts = {});
```

调用参数:
* data: [Buffer](Buffer.md), 要转换的二进制
* opts: Object, 指定解码选项

返回结果:
* String, 返回解码的文本

--------------------------
**将二进制数据转换为文本**

```JavaScript
String TextDecoder.decode();
```

返回结果:
* String, 返回解码的文本

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String TextDecoder.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value TextDecoder.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

