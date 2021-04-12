# 对象 XmlAttr
XmlAttr 对象表示 [XmlElement](XmlElement.md) 对象的属性

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<this>XmlAttr|localName;value;name;namespaceURI;prefix;nodeName;nodeValue]

[object] <:- [XmlAttr]
```

## 成员属性
        
### localName
**String, 查询元素的本地名称。如果选定的节点无命名空间，则该属性等同于 nodeName**

```JavaScript
readonly String XmlAttr.localName;
```

--------------------------
### value
**String, 属性的值**

```JavaScript
String XmlAttr.value;
```

--------------------------
### name
**String, 属性的名称**

```JavaScript
readonly String XmlAttr.name;
```

--------------------------
### namespaceURI
**String, 查询元素的命名空间的 URI。如果选定的节点无命名空间，则该属性返回 NULL**

```JavaScript
readonly String XmlAttr.namespaceURI;
```

--------------------------
### prefix
**String, 查询和设置元素的命名空间前缀。如果选定的节点无命名空间，则该属性返回 NULL**

```JavaScript
String XmlAttr.prefix;
```

--------------------------
### nodeName
**String, 属性的名称，为兼容的目的**

```JavaScript
readonly String XmlAttr.nodeName;
```

--------------------------
### nodeValue
**String, 属性的值，为兼容的目的**

```JavaScript
String XmlAttr.nodeValue;
```

## 成员函数
        
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String XmlAttr.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value XmlAttr.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

