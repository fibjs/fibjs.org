# 对象 XmlNamedNodeMap
XmlNamedNodeMap 对象表示一个无顺序的属性列表

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<this>XmlNamedNodeMap|operator\[\]|length|item();getNamedItem()]

[object] <:- [XmlNamedNodeMap]
```

## 操作符
        
### operator[]
**可使用下标直接访问数据**

```JavaScript
readonly XmlAttr XmlNamedNodeMap[];
```

## 成员属性
        
### length
**Integer, 返回属性列表中的属性数目**

```JavaScript
readonly Integer XmlNamedNodeMap.length;
```

## 成员函数
        
### item
**返回属性列表中处于指定的索引号的属性**

```JavaScript
XmlAttr XmlNamedNodeMap.item(Integer index);
```

调用参数:
* index: Integer, 指定要查询的索引

返回结果:
* [XmlAttr](XmlAttr.md), 指定索引号的属性

--------------------------
### getNamedItem
**查询指定名称的属性**

```JavaScript
XmlAttr XmlNamedNodeMap.getNamedItem(String name);
```

调用参数:
* name: String, 指定要查询的名称

返回结果:
* [XmlAttr](XmlAttr.md), 返回查询出的属性

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String XmlNamedNodeMap.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value XmlNamedNodeMap.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

