# 对象 XmlNamedNodeMap
XmlNamedNodeMap 对象表示一个无顺序的属性列表

## 下标操作
        
** 可使用下标直接访问数据 **
```JavaScript
readonly XmlAttr XmlNamedNodeMap[];
```

## 成员函数
        
### item
** 返回属性列表中处于指定的索引号的属性 **
```JavaScript
XmlAttr XmlNamedNodeMap.item(Integer index);
```

调用参数:
* index: Integer, 指定要查询的索引

返回结果:
* [XmlAttr](XmlAttr.md), 指定索引号的属性

--------------------------
### getNamedItem
** 查询指定名称的属性 **
```JavaScript
XmlAttr XmlNamedNodeMap.getNamedItem(String name);
```

调用参数:
* name: String, 指定要查询的名称

返回结果:
* [XmlAttr](XmlAttr.md), 返回查询出的属性

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **
```JavaScript
XmlNamedNodeMap.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **
```JavaScript
Boolean XmlNamedNodeMap.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **
```JavaScript
String XmlNamedNodeMap.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **
```JavaScript
Value XmlNamedNodeMap.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **
```JavaScript
Value XmlNamedNodeMap.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

## 成员属性
        
### length
** Integer, 返回属性列表中的属性数目 **
```JavaScript
readonly Integer XmlNamedNodeMap.length;
```

