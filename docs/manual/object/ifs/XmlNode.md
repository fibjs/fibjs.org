# 对象 XmlNode
XmlNode 对象是整个 DOM 的基础数据类型

## 函数
        
### hasChildNodes
查询是否存在子节点
```JavaScript
Boolean XmlNode.hasChildNodes();
```

** 返回结果:**
* 存在任何子节点时返回 true，否则返回 false

### normalize
合并相邻的 Text 节点并删除空的 Text 节点
```JavaScript
XmlNode.normalize();
```

这个方法将遍历当前节点的所有子孙节点，通过删除空的 Text 节点，已经合并所有相邻的 Text 节点来规范化文档。该方法在进行节点的插入或删除操作后，对于简化文档树的结构很有用。

### cloneNode
创建指定的节点的精确拷贝
```JavaScript
XmlNode XmlNode.cloneNode(Boolean deep = true);
```

** 调用参数: **
* deep - 是否深度拷贝，为 true 时，被克隆的节点会克隆原节点的所有子节点

** 返回结果:**
* 返回所复制的节点

该方法将复制并返回调用它的节点的副本。如果传递给它的参数是 true，它还将递归复制当前节点的所有子孙节点。 否则，它只复制当前节点。返回的节点不属于文档树，它的 parentNode 属性为 null。当复制的是 Element 节点时，它的所有属性都将被复制。

### lookupPrefix
返回在当前节点上匹配指定的命名空间 URI 的前缀
```JavaScript
String XmlNode.lookupPrefix(String namespaceURI);
```

** 调用参数: **
* namespaceURI - 指定匹配的命名空间 URI

** 返回结果:**
* 返回匹配的前缀，未匹配到返回 null

### lookupNamespaceURI
返回在当前节点上匹配指定的前缀的命名空间 URI
```JavaScript
String XmlNode.lookupNamespaceURI(String prefix);
```

** 调用参数: **
* prefix - 指定匹配的前缀

** 返回结果:**
* 返回匹配的命名空间 URI，未匹配到返回 null

### insertBefore
在已有的子节点前插入一个新的子节点
```JavaScript
XmlNode XmlNode.insertBefore(XmlNode newChild,
                XmlNode refChild);
```

** 调用参数: **
* newChild - 插入新的节点
* refChild - 在此节点前插入新节点

** 返回结果:**
* 返回新的子节点

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

### insertAfter
在已有的子节点后插入一个新的子节点
```JavaScript
XmlNode XmlNode.insertAfter(XmlNode newChild,
                XmlNode refChild);
```

** 调用参数: **
* newChild - 插入新的节点
* refChild - 在此节点后插入新节点

** 返回结果:**
* 返回新的子节点

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

### appendChild
向节点的子节点列表的末尾添加新的子节点
```JavaScript
XmlNode XmlNode.appendChild(XmlNode newChild);
```

** 调用参数: **
* newChild - 指定添加的节点

** 返回结果:**
* 返回这个新的子节点

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

### replaceChild
将某个子节点替换为另一个
```JavaScript
XmlNode XmlNode.replaceChild(XmlNode newChild,
                XmlNode oldChild);
```

** 调用参数: **
* newChild - 指定新的节点
* oldChild - 指定被替换的节点

** 返回结果:**
* 如替换成功，此方法可返回被替换的节点，如替换失败，则返回 null

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

### removeChild
从子节点列表中删除某个节点
```JavaScript
XmlNode XmlNode.removeChild(XmlNode oldChild);
```

** 调用参数: **
* oldChild - 指定被删除的节点

** 返回结果:**
* 如删除成功，此方法可返回被删除的节点，如失败，则返回 null

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
XmlNode.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean XmlNode.equals(object expected);
```

** 调用参数: **
* expected - 制定比较的目标对象

** 返回结果:**
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String XmlNode.toString();
```

** 返回结果:**
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value XmlNode.toJSON(String key = "");
```

** 调用参数: **
* key - 未使用

** 返回结果:**
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value XmlNode.valueOf();
```

** 返回结果:**
* 返回对象本身的数值

## 属性
        
### nodeType
返回节点的节点类型
```JavaScript
readonly Integer XmlNode.nodeType;
```

不同对象的 nodeType 会返回不同的值：
- XmlElement: ELEMENT_NODE(1)
- XmlAttr: ATTRIBUTE_NODE(2)
- XmlText: TEXT_NODE(3)
- XmlCDATASection: CDATA_SECTION_NODE(4)
- XmlProcessingInstruction: PROCESSING_INSTRUCTION_NODE(7)
- XmlComment: COMMENT_NODE(8)
- XmlDocument: DOCUMENT_NODE(9)
- XmlDocumentType: DOCUMENT_TYPE_NODE(10)

### nodeName
返回节点的名称，根据其类型
```JavaScript
readonly String XmlNode.nodeName;
```

不同对象的 nodeName 会返回不同的值：
- XmlElement: element name
- XmlAttr: 属性名称
- XmlText: \#text
- XmlCDATASection: \#cdata-section
- XmlProcessingInstruction: 返回指定目标 target
- XmlComment: \#comment
- XmlDocument: \#document
- XmlDocumentType: doctype 名称

### nodeValue
返回节点的名称，根据其类型
```JavaScript
String XmlNode.nodeValue;
```

不同对象的 nodeName 会返回不同的值：
- XmlElement: null
- XmlAttr: 属性的值
- XmlText: 节点的内容
- XmlCDATASection: 节点的内容
- XmlProcessingInstruction: 返回指定内容 data
- XmlComment: 注释文本
- XmlDocument: null
- XmlDocumentType: null

### ownerDocument
返回节点的根元素（XmlDocument 对象）
```JavaScript
readonly XmlDocument XmlNode.ownerDocument;
```

### parentNode
可返回某节点的父节点
```JavaScript
readonly XmlNode XmlNode.parentNode;
```

### childNodes
返回指定节点的子节点的节点列表
```JavaScript
readonly XmlNodeList XmlNode.childNodes;
```

### firstChild
返回节点的首个子节点
```JavaScript
readonly XmlNode XmlNode.firstChild;
```

### lastChild
返回节点的最后一个子节点
```JavaScript
readonly XmlNode XmlNode.lastChild;
```

### previousSibling
返回某节点之前紧跟的节点（处于同一树层级），如果没有此节点，那么该属性返回 null
```JavaScript
readonly XmlNode XmlNode.previousSibling;
```

### nextSibling
返回某个元素之后紧跟的节点（处于同一树层级中），如果无此节点，则属性返回 null
```JavaScript
readonly XmlNode XmlNode.nextSibling;
```

