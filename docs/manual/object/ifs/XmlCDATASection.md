# 对象 XmlCDATASection
XmlCDATASection 对象表示文档中的 CDATA 区段

XmlCDATASection 接口是 XmlText 接口的子接口，没有定义任何自己的属性和方法。通过从 XmlNode 接口继承 nodeValue 属性，或通过从 XmlCharacterData 接口继承 data 属性，可以访问 CDATA Section 的文本内容。

虽然通常可以把 XmlCDATASection 节点作为 XmlText 节点处理，但要注意 XmlNode 的 normalize 方法不并入相邻的 CDATA 部分。

使用 XmlDocument 的 createXmlCDATASection 方法来创建一个 XmlCDATASection 。

CDATA 区段包含了不会被解析器解析的文本。CDATA 区段中的标签不会被视为标记，同时实体也不会被展开。主要的目的是为了包含诸如 XML 片段之类的材料，而无需转义所有的分隔符。

在一个 CDATA 中唯一被识别的分隔符是 &#34;]]&gt;&#34;，它可标示 CDATA 区段的结束。CDATA 区段不能进行嵌套。
## 函数
        
### splitText
按照指定的 offset 把文本节点分割为两个节点
```JavaScript
XmlText XmlCDATASection.splitText(Integer offset);
```

**调用参数:**

**返回结果:**
* 从当前节点分割出的 Text 节点

该方法将在指定的 offset 处把 XmlText 节点分割成两个节点。原始的 XmlText 节点将被修改，使它包含 offset 指定的位置之前的文本内容（但不包括文本内容）。新的 XmlText 节点将被创建，用于存放从 offset 位置（包括该位置上的字符）到原字符结尾的所有字符。新的 XmlText 节点是该方法的返回值。此外，如果原始的 XmlText 节点具有 parentNode，新的 XmlText 节点将插入这个父节点，紧邻在原始节点之后。

XmlCDATASection 接口继承了 XmlText 接口， XmlCDATASection 节点也可以使用该方法 ，只是新创建的节点是 XmlCDATASection 节点，而不是 XmlText 节点。    @param offset 规定在何处分割文本节点。开始值以 0 开始

### substringData
从节点中提取子串
```JavaScript
String XmlCDATASection.substringData(Integer offset,
                Integer count);
```

**调用参数:**
* offset - 要返回的第一个字符的位置
* count - 要返回的子串中的字符数

### appendData
把字符串附加到节点上
```JavaScript
XmlCDATASection.appendData(String arg);
```

**调用参数:**
* arg - 要附加到节点的字符串

### insertData
把字符串插入节点
```JavaScript
XmlCDATASection.insertData(Integer offset,
                String arg);
```

**调用参数:**
* offset - 要把字符串插入节点的字符位置
* arg - 要插入的字符串

### deleteData
从节点删除文本
```JavaScript
XmlCDATASection.deleteData(Integer offset,
                Integer count);
```

**调用参数:**
* offset - 要删除的第一个字符的位置
* count - 要删除的字符的数量

### replaceData
用指定的字符串替换节点的字符
```JavaScript
XmlCDATASection.replaceData(Integer offset,
                Integer count,
                String arg);
```

**调用参数:**
* offset - 节点要替换的字符位置
* count - 要替换的字符的数量
* arg - 要插入的字符串

### hasChildNodes
查询是否存在子节点
```JavaScript
Boolean XmlCDATASection.hasChildNodes();
```

**返回结果:**
* 存在任何子节点时返回 true，否则返回 false

### normalize
合并相邻的 Text 节点并删除空的 Text 节点
```JavaScript
XmlCDATASection.normalize();
```

这个方法将遍历当前节点的所有子孙节点，通过删除空的 Text 节点，已经合并所有相邻的 Text 节点来规范化文档。该方法在进行节点的插入或删除操作后，对于简化文档树的结构很有用。

### cloneNode
创建指定的节点的精确拷贝
```JavaScript
XmlNode XmlCDATASection.cloneNode(Boolean deep = true);
```

**调用参数:**
* deep - 是否深度拷贝，为 true 时，被克隆的节点会克隆原节点的所有子节点

**返回结果:**
* 返回所复制的节点

该方法将复制并返回调用它的节点的副本。如果传递给它的参数是 true，它还将递归复制当前节点的所有子孙节点。 否则，它只复制当前节点。返回的节点不属于文档树，它的 parentNode 属性为 null。当复制的是 Element 节点时，它的所有属性都将被复制。

### lookupPrefix
返回在当前节点上匹配指定的命名空间 URI 的前缀
```JavaScript
String XmlCDATASection.lookupPrefix(String namespaceURI);
```

**调用参数:**
* namespaceURI - 指定匹配的命名空间 URI

**返回结果:**
* 返回匹配的前缀，未匹配到返回 null

### lookupNamespaceURI
返回在当前节点上匹配指定的前缀的命名空间 URI
```JavaScript
String XmlCDATASection.lookupNamespaceURI(String prefix);
```

**调用参数:**
* prefix - 指定匹配的前缀

**返回结果:**
* 返回匹配的命名空间 URI，未匹配到返回 null

### insertBefore
在已有的子节点前插入一个新的子节点
```JavaScript
XmlNode XmlCDATASection.insertBefore(XmlNode newChild,
                XmlNode refChild);
```

**调用参数:**
* newChild - 插入新的节点
* refChild - 在此节点前插入新节点

**返回结果:**
* 返回新的子节点

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

### insertAfter
在已有的子节点后插入一个新的子节点
```JavaScript
XmlNode XmlCDATASection.insertAfter(XmlNode newChild,
                XmlNode refChild);
```

**调用参数:**
* newChild - 插入新的节点
* refChild - 在此节点后插入新节点

**返回结果:**
* 返回新的子节点

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

### appendChild
向节点的子节点列表的末尾添加新的子节点
```JavaScript
XmlNode XmlCDATASection.appendChild(XmlNode newChild);
```

**调用参数:**
* newChild - 指定添加的节点

**返回结果:**
* 返回这个新的子节点

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

### replaceChild
将某个子节点替换为另一个
```JavaScript
XmlNode XmlCDATASection.replaceChild(XmlNode newChild,
                XmlNode oldChild);
```

**调用参数:**
* newChild - 指定新的节点
* oldChild - 指定被替换的节点

**返回结果:**
* 如替换成功，此方法可返回被替换的节点，如替换失败，则返回 null

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

### removeChild
从子节点列表中删除某个节点
```JavaScript
XmlNode XmlCDATASection.removeChild(XmlNode oldChild);
```

**调用参数:**
* oldChild - 指定被删除的节点

**返回结果:**
* 如删除成功，此方法可返回被删除的节点，如失败，则返回 null

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
XmlCDATASection.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean XmlCDATASection.equals(object expected);
```

**调用参数:**
* expected - 制定比较的目标对象

**返回结果:**
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String XmlCDATASection.toString();
```

**返回结果:**
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value XmlCDATASection.toJSON(String key = "");
```

**调用参数:**
* key - 未使用

**返回结果:**
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value XmlCDATASection.valueOf();
```

**返回结果:**
* 返回对象本身的数值

## 属性
        
### data
该节点包含的文本
```JavaScript
String XmlCDATASection.data;
```

### length
该节点包含的字符数
```JavaScript
readonly Integer XmlCDATASection.length;
```

### nodeType
返回节点的节点类型
```JavaScript
readonly Integer XmlCDATASection.nodeType;
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
readonly String XmlCDATASection.nodeName;
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
String XmlCDATASection.nodeValue;
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
readonly XmlDocument XmlCDATASection.ownerDocument;
```

### parentNode
可返回某节点的父节点
```JavaScript
readonly XmlNode XmlCDATASection.parentNode;
```

### childNodes
返回指定节点的子节点的节点列表
```JavaScript
readonly XmlNodeList XmlCDATASection.childNodes;
```

### firstChild
返回节点的首个子节点
```JavaScript
readonly XmlNode XmlCDATASection.firstChild;
```

### lastChild
返回节点的最后一个子节点
```JavaScript
readonly XmlNode XmlCDATASection.lastChild;
```

### previousSibling
返回某节点之前紧跟的节点（处于同一树层级），如果没有此节点，那么该属性返回 null
```JavaScript
readonly XmlNode XmlCDATASection.previousSibling;
```

### nextSibling
返回某个元素之后紧跟的节点（处于同一树层级中），如果无此节点，则属性返回 null
```JavaScript
readonly XmlNode XmlCDATASection.nextSibling;
```

