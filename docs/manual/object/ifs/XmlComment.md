# 对象 XmlComment
XmlComment 对象表示文档中注释节点的内容

XmlComment 节点表示 XML 文档中的注释。
使用由 [XmlCharacterData](XmlCharacterData.md) 接口继承的 data 属性，或使用由 [XmlNode](XmlNode.md) 接口继承的 nodeValue 属性，可以访问注释的内容。（即 <!-- 和 --> 之间的文本）。使用由 [XmlCharacterData](XmlCharacterData.md) 接口继承的各种方法可以操作注释的内容。

使用 [XmlDocument.createComment](XmlDocument.md#createComment)() 来创建一个注释对象。

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<class>XmlNode|nodeType;nodeName;nodeValue;ownerDocument;parentNode;childNodes;firstChild;lastChild;previousSibling;nextSibling|hasChildNodes();normalize();cloneNode();lookupPrefix();lookupNamespaceURI();insertBefore();insertAfter();appendChild();replaceChild();removeChild()]
[<class>XmlCharacterData|data;length|substringData();appendData();insertData();deleteData();replaceData()]
[<this>XmlComment]

[object] <:- [XmlNode]
[XmlNode] <:- [XmlCharacterData]
[XmlCharacterData] <:- [XmlComment]
```

## 成员属性
        
### data
**String, 该节点包含的文本**

```JavaScript
String XmlComment.data;
```

--------------------------
### length
**Integer, 该节点包含的字符数**

```JavaScript
readonly Integer XmlComment.length;
```

--------------------------
### nodeType
**Integer, 返回节点的节点类型**

```JavaScript
readonly Integer XmlComment.nodeType;
```

不同对象的 nodeType 会返回不同的值：
- [XmlElement](XmlElement.md): ELEMENT_NODE(1)
- [XmlAttr](XmlAttr.md): ATTRIBUTE_NODE(2)
- [XmlText](XmlText.md): TEXT_NODE(3)
- [XmlCDATASection](XmlCDATASection.md): CDATA_SECTION_NODE(4)
- [XmlProcessingInstruction](XmlProcessingInstruction.md): PROCESSING_INSTRUCTION_NODE(7)
- XmlComment: COMMENT_NODE(8)
- [XmlDocument](XmlDocument.md): DOCUMENT_NODE(9)
- [XmlDocumentType](XmlDocumentType.md): DOCUMENT_TYPE_NODE(10)

--------------------------
### nodeName
**String, 返回节点的名称，根据其类型**

```JavaScript
readonly String XmlComment.nodeName;
```

不同对象的 nodeName 会返回不同的值：
- [XmlElement](XmlElement.md): element name
- [XmlAttr](XmlAttr.md): 属性名称
- [XmlText](XmlText.md): \#text
- [XmlCDATASection](XmlCDATASection.md): \#cdata-section
- [XmlProcessingInstruction](XmlProcessingInstruction.md): 返回指定目标 target
- XmlComment: \#comment
- [XmlDocument](XmlDocument.md): \#document
- [XmlDocumentType](XmlDocumentType.md): doctype 名称

--------------------------
### nodeValue
**String, 返回节点的名称，根据其类型**

```JavaScript
String XmlComment.nodeValue;
```

不同对象的 nodeName 会返回不同的值：
- [XmlElement](XmlElement.md): null
- [XmlAttr](XmlAttr.md): 属性的值
- [XmlText](XmlText.md): 节点的内容
- [XmlCDATASection](XmlCDATASection.md): 节点的内容
- [XmlProcessingInstruction](XmlProcessingInstruction.md): 返回指定内容 data
- XmlComment: 注释文本
- [XmlDocument](XmlDocument.md): null
- [XmlDocumentType](XmlDocumentType.md): null

--------------------------
### ownerDocument
**[XmlDocument](XmlDocument.md), 返回节点的根元素（[XmlDocument](XmlDocument.md) 对象）**

```JavaScript
readonly XmlDocument XmlComment.ownerDocument;
```

--------------------------
### parentNode
**[XmlNode](XmlNode.md), 可返回某节点的父节点**

```JavaScript
readonly XmlNode XmlComment.parentNode;
```

--------------------------
### childNodes
**[XmlNodeList](XmlNodeList.md), 返回指定节点的子节点的节点列表**

```JavaScript
readonly XmlNodeList XmlComment.childNodes;
```

--------------------------
### firstChild
**[XmlNode](XmlNode.md), 返回节点的首个子节点**

```JavaScript
readonly XmlNode XmlComment.firstChild;
```

--------------------------
### lastChild
**[XmlNode](XmlNode.md), 返回节点的最后一个子节点**

```JavaScript
readonly XmlNode XmlComment.lastChild;
```

--------------------------
### previousSibling
**[XmlNode](XmlNode.md), 返回某节点之前紧跟的节点（处于同一树层级），如果没有此节点，那么该属性返回 null**

```JavaScript
readonly XmlNode XmlComment.previousSibling;
```

--------------------------
### nextSibling
**[XmlNode](XmlNode.md), 返回某个元素之后紧跟的节点（处于同一树层级中），如果无此节点，则属性返回 null**

```JavaScript
readonly XmlNode XmlComment.nextSibling;
```

## 成员函数
        
### substringData
**从节点中提取子串**

```JavaScript
String XmlComment.substringData(Integer offset,
    Integer count);
```

调用参数:
* offset: Integer, 要返回的第一个字符的位置
* count: Integer, 要返回的子串中的字符数

返回结果:
* String, 返回提取的字符串

--------------------------
### appendData
**把字符串附加到节点上**

```JavaScript
XmlComment.appendData(String arg);
```

调用参数:
* arg: String, 要附加到节点的字符串

--------------------------
### insertData
**把字符串插入节点**

```JavaScript
XmlComment.insertData(Integer offset,
    String arg);
```

调用参数:
* offset: Integer, 要把字符串插入节点的字符位置
* arg: String, 要插入的字符串

--------------------------
### deleteData
**从节点删除文本**

```JavaScript
XmlComment.deleteData(Integer offset,
    Integer count);
```

调用参数:
* offset: Integer, 要删除的第一个字符的位置
* count: Integer, 要删除的字符的数量

--------------------------
### replaceData
**用指定的字符串替换节点的字符**

```JavaScript
XmlComment.replaceData(Integer offset,
    Integer count,
    String arg);
```

调用参数:
* offset: Integer, 节点要替换的字符位置
* count: Integer, 要替换的字符的数量
* arg: String, 要插入的字符串

--------------------------
### hasChildNodes
**查询是否存在子节点**

```JavaScript
Boolean XmlComment.hasChildNodes();
```

返回结果:
* Boolean, 存在任何子节点时返回 true，否则返回 false

--------------------------
### normalize
**合并相邻的 Text 节点并删除空的 Text 节点**

```JavaScript
XmlComment.normalize();
```

这个方法将遍历当前节点的所有子孙节点，通过删除空的 Text 节点，已经合并所有相邻的 Text 节点来规范化文档。该方法在进行节点的插入或删除操作后，对于简化文档树的结构很有用。

--------------------------
### cloneNode
**创建指定的节点的精确拷贝**

```JavaScript
XmlNode XmlComment.cloneNode(Boolean deep = true);
```

调用参数:
* deep: Boolean, 是否深度拷贝，为 true 时，被克隆的节点会克隆原节点的所有子节点

返回结果:
* [XmlNode](XmlNode.md), 返回所复制的节点

该方法将复制并返回调用它的节点的副本。如果传递给它的参数是 true，它还将递归复制当前节点的所有子孙节点。 否则，它只复制当前节点。返回的节点不属于文档树，它的 parentNode 属性为 null。当复制的是 Element 节点时，它的所有属性都将被复制。

--------------------------
### lookupPrefix
**返回在当前节点上匹配指定的命名空间 URI 的前缀**

```JavaScript
String XmlComment.lookupPrefix(String namespaceURI);
```

调用参数:
* namespaceURI: String, 指定匹配的命名空间 URI

返回结果:
* String, 返回匹配的前缀，未匹配到返回 null

--------------------------
### lookupNamespaceURI
**返回在当前节点上匹配指定的前缀的命名空间 URI**

```JavaScript
String XmlComment.lookupNamespaceURI(String prefix);
```

调用参数:
* prefix: String, 指定匹配的前缀

返回结果:
* String, 返回匹配的命名空间 URI，未匹配到返回 null

--------------------------
### insertBefore
**在已有的子节点前插入一个新的子节点**

```JavaScript
XmlNode XmlComment.insertBefore(XmlNode newChild,
    XmlNode refChild);
```

调用参数:
* newChild: [XmlNode](XmlNode.md), 插入新的节点
* refChild: [XmlNode](XmlNode.md), 在此节点前插入新节点

返回结果:
* [XmlNode](XmlNode.md), 返回新的子节点

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

--------------------------
### insertAfter
**在已有的子节点后插入一个新的子节点**

```JavaScript
XmlNode XmlComment.insertAfter(XmlNode newChild,
    XmlNode refChild);
```

调用参数:
* newChild: [XmlNode](XmlNode.md), 插入新的节点
* refChild: [XmlNode](XmlNode.md), 在此节点后插入新节点

返回结果:
* [XmlNode](XmlNode.md), 返回新的子节点

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

--------------------------
### appendChild
**向节点的子节点列表的末尾添加新的子节点**

```JavaScript
XmlNode XmlComment.appendChild(XmlNode newChild);
```

调用参数:
* newChild: [XmlNode](XmlNode.md), 指定添加的节点

返回结果:
* [XmlNode](XmlNode.md), 返回这个新的子节点

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

--------------------------
### replaceChild
**将某个子节点替换为另一个**

```JavaScript
XmlNode XmlComment.replaceChild(XmlNode newChild,
    XmlNode oldChild);
```

调用参数:
* newChild: [XmlNode](XmlNode.md), 指定新的节点
* oldChild: [XmlNode](XmlNode.md), 指定被替换的节点

返回结果:
* [XmlNode](XmlNode.md), 如替换成功，此方法可返回被替换的节点，如替换失败，则返回 null

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

--------------------------
### removeChild
**从子节点列表中删除某个节点**

```JavaScript
XmlNode XmlComment.removeChild(XmlNode oldChild);
```

调用参数:
* oldChild: [XmlNode](XmlNode.md), 指定被删除的节点

返回结果:
* [XmlNode](XmlNode.md), 如删除成功，此方法可返回被删除的节点，如失败，则返回 null

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String XmlComment.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value XmlComment.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

