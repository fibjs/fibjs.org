# 对象 XmlProcessingInstruction
[XmlProcessingInstruction](/docs/manual/object/ifs/xmlprocessinginstruction.md.html) 对象表示 [xml](/docs/manual/module/ifs/xml.md.html) 处理指令

## 函数
        
### hasChildNodes
查询是否存在子节点
```JavaScript
Boolean XmlProcessingInstruction.hasChildNodes();
```

返回结果:
* 存在任何子节点时返回 true，否则返回 false

### normalize
合并相邻的 Text 节点并删除空的 Text 节点
```JavaScript
XmlProcessingInstruction.normalize();
```

这个方法将遍历当前节点的所有子孙节点，通过删除空的 Text 节点，已经合并所有相邻的 Text 节点来规范化文档。该方法在进行节点的插入或删除操作后，对于简化文档树的结构很有用。

### cloneNode
创建指定的节点的精确拷贝
```JavaScript
XmlNode XmlProcessingInstruction.cloneNode(Boolean deep = true);
```

调用参数:
* deep - 是否深度拷贝，为 true 时，被克隆的节点会克隆原节点的所有子节点

返回结果:
* 返回所复制的节点

该方法将复制并返回调用它的节点的副本。如果传递给它的参数是 true，它还将递归复制当前节点的所有子孙节点。 否则，它只复制当前节点。返回的节点不属于文档树，它的 parentNode 属性为 null。当复制的是 Element 节点时，它的所有属性都将被复制。

### lookupPrefix
返回在当前节点上匹配指定的命名空间 URI 的前缀
```JavaScript
String XmlProcessingInstruction.lookupPrefix(String namespaceURI);
```

调用参数:
* namespaceURI - 指定匹配的命名空间 URI

返回结果:
* 返回匹配的前缀，未匹配到返回 null

### lookupNamespaceURI
返回在当前节点上匹配指定的前缀的命名空间 URI
```JavaScript
String XmlProcessingInstruction.lookupNamespaceURI(String prefix);
```

调用参数:
* prefix - 指定匹配的前缀

返回结果:
* 返回匹配的命名空间 URI，未匹配到返回 null

### insertBefore
在已有的子节点前插入一个新的子节点
```JavaScript
XmlNode XmlProcessingInstruction.insertBefore(XmlNode newChild,
                XmlNode refChild);
```

调用参数:
* newChild - 插入新的节点
* refChild - 在此节点前插入新节点

返回结果:
* 返回新的子节点

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

### insertAfter
在已有的子节点后插入一个新的子节点
```JavaScript
XmlNode XmlProcessingInstruction.insertAfter(XmlNode newChild,
                XmlNode refChild);
```

调用参数:
* newChild - 插入新的节点
* refChild - 在此节点后插入新节点

返回结果:
* 返回新的子节点

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

### appendChild
向节点的子节点列表的末尾添加新的子节点
```JavaScript
XmlNode XmlProcessingInstruction.appendChild(XmlNode newChild);
```

调用参数:
* newChild - 指定添加的节点

返回结果:
* 返回这个新的子节点

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

### replaceChild
将某个子节点替换为另一个
```JavaScript
XmlNode XmlProcessingInstruction.replaceChild(XmlNode newChild,
                XmlNode oldChild);
```

调用参数:
* newChild - 指定新的节点
* oldChild - 指定被替换的节点

返回结果:
* 如替换成功，此方法可返回被替换的节点，如替换失败，则返回 null

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

### removeChild
从子节点列表中删除某个节点
```JavaScript
XmlNode XmlProcessingInstruction.removeChild(XmlNode oldChild);
```

调用参数:
* oldChild - 指定被删除的节点

返回结果:
* 如删除成功，此方法可返回被删除的节点，如失败，则返回 null

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
XmlProcessingInstruction.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean XmlProcessingInstruction.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
```JavaScript
String XmlProcessingInstruction.toString();
```

返回结果:
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value XmlProcessingInstruction.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value XmlProcessingInstruction.valueOf();
```

返回结果:
* 返回对象本身的数值

## 属性
        
### target
返回此处理指令的目标
```JavaScript
readonly String XmlProcessingInstruction.target;
```

### data
设置或返回此处理指令的内容
```JavaScript
String XmlProcessingInstruction.data;
```

### nodeType
返回节点的节点类型
```JavaScript
readonly Integer XmlProcessingInstruction.nodeType;
```

不同对象的 nodeType 会返回不同的值：
- [XmlElement](/docs/manual/object/ifs/xmlelement.md.html): ELEMENT_NODE(1)
- [XmlAttr](/docs/manual/object/ifs/xmlattr.md.html): ATTRIBUTE_NODE(2)
- [XmlText](/docs/manual/object/ifs/xmltext.md.html): TEXT_NODE(3)
- [XmlCDATASection](/docs/manual/object/ifs/xmlcdatasection.md.html): CDATA_SECTION_NODE(4)
- [XmlProcessingInstruction](/docs/manual/object/ifs/xmlprocessinginstruction.md.html): PROCESSING_INSTRUCTION_NODE(7)
- [XmlComment](/docs/manual/object/ifs/xmlcomment.md.html): COMMENT_NODE(8)
- [XmlDocument](/docs/manual/object/ifs/xmldocument.md.html): DOCUMENT_NODE(9)
- [XmlDocumentType](/docs/manual/object/ifs/xmldocumenttype.md.html): DOCUMENT_TYPE_NODE(10)

### nodeName
返回节点的名称，根据其类型
```JavaScript
readonly String XmlProcessingInstruction.nodeName;
```

不同对象的 nodeName 会返回不同的值：
- [XmlElement](/docs/manual/object/ifs/xmlelement.md.html): element name
- [XmlAttr](/docs/manual/object/ifs/xmlattr.md.html): 属性名称
- [XmlText](/docs/manual/object/ifs/xmltext.md.html): \#text
- [XmlCDATASection](/docs/manual/object/ifs/xmlcdatasection.md.html): \#cdata-section
- [XmlProcessingInstruction](/docs/manual/object/ifs/xmlprocessinginstruction.md.html): 返回指定目标 target
- [XmlComment](/docs/manual/object/ifs/xmlcomment.md.html): \#comment
- [XmlDocument](/docs/manual/object/ifs/xmldocument.md.html): \#document
- [XmlDocumentType](/docs/manual/object/ifs/xmldocumenttype.md.html): doctype 名称

### nodeValue
返回节点的名称，根据其类型
```JavaScript
String XmlProcessingInstruction.nodeValue;
```

不同对象的 nodeName 会返回不同的值：
- [XmlElement](/docs/manual/object/ifs/xmlelement.md.html): null
- [XmlAttr](/docs/manual/object/ifs/xmlattr.md.html): 属性的值
- [XmlText](/docs/manual/object/ifs/xmltext.md.html): 节点的内容
- [XmlCDATASection](/docs/manual/object/ifs/xmlcdatasection.md.html): 节点的内容
- [XmlProcessingInstruction](/docs/manual/object/ifs/xmlprocessinginstruction.md.html): 返回指定内容 data
- [XmlComment](/docs/manual/object/ifs/xmlcomment.md.html): 注释文本
- [XmlDocument](/docs/manual/object/ifs/xmldocument.md.html): null
- [XmlDocumentType](/docs/manual/object/ifs/xmldocumenttype.md.html): null

### ownerDocument
返回节点的根元素（[XmlDocument](/docs/manual/object/ifs/xmldocument.md.html) 对象）
```JavaScript
readonly XmlDocument XmlProcessingInstruction.ownerDocument;
```

### parentNode
可返回某节点的父节点
```JavaScript
readonly XmlNode XmlProcessingInstruction.parentNode;
```

### childNodes
返回指定节点的子节点的节点列表
```JavaScript
readonly XmlNodeList XmlProcessingInstruction.childNodes;
```

### firstChild
返回节点的首个子节点
```JavaScript
readonly XmlNode XmlProcessingInstruction.firstChild;
```

### lastChild
返回节点的最后一个子节点
```JavaScript
readonly XmlNode XmlProcessingInstruction.lastChild;
```

### previousSibling
返回某节点之前紧跟的节点（处于同一树层级），如果没有此节点，那么该属性返回 null
```JavaScript
readonly XmlNode XmlProcessingInstruction.previousSibling;
```

### nextSibling
返回某个元素之后紧跟的节点（处于同一树层级中），如果无此节点，则属性返回 null
```JavaScript
readonly XmlNode XmlProcessingInstruction.nextSibling;
```

