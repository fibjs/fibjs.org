# 对象 XmlComment
XmlComment 对象表示文档中注释节点的内容

XmlComment 节点表示 XML 文档中的注释。
使用由 [XmlCharacterData](XmlCharacterData.md) 接口继承的 data 属性，或使用由 [XmlNode](XmlNode.md) 接口继承的 nodeValue 属性，可以访问注释的内容。（即 <!-- 和 --> 之间的文本）。使用由 [XmlCharacterData](XmlCharacterData.md) 接口继承的各种方法可以操作注释的内容。

使用 [XmlDocument](XmlDocument.md).createComment() 来创建一个注释对象。

## 继承关系
<div class="inherits"><svg width="130pt" height="652pt" viewBox="0.00 0.00 130.00 652.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 648)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-648 126,-648 126,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="32.5,-552 32.5,-644 89.5,-644 89.5,-552 32.5,-552"/>
<polygon fill="none" stroke="#000000" points="33,-622 33,-644 90,-644 90,-622 33,-622"/>
<text text-anchor="start" x="48.1625" y="-630" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="33,-552 33,-622 90,-622 90,-552 33,-552"/>
<text text-anchor="start" x="38" y="-608" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="38" y="-596" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="38" y="-584" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="38" y="-572" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="38" y="-560" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- XmlNode -->
<g id="node2" class="node">
<title>XmlNode</title>
<g id="a_node2"><a xlink:href="XmlNode.md" xlink:title="XmlNode">
<polygon fill="#ffffff" stroke="transparent" points="0,-234 0,-516 122,-516 122,-234 0,-234"/>
<polygon fill="none" stroke="#000000" points="0,-494 0,-516 122,-516 122,-494 0,-494"/>
<text text-anchor="start" x="40.4435" y="-502" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlNode</text>
<polygon fill="none" stroke="#000000" points="0,-364 0,-494 122,-494 122,-364 0,-364"/>
<text text-anchor="start" x="5" y="-480" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> nodeType</text>
<text text-anchor="start" x="5" y="-468" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> nodeName</text>
<text text-anchor="start" x="5" y="-456" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> nodeValue</text>
<text text-anchor="start" x="5" y="-444" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> ownerDocument</text>
<text text-anchor="start" x="5" y="-432" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> parentNode</text>
<text text-anchor="start" x="5" y="-420" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> childNodes</text>
<text text-anchor="start" x="5" y="-408" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> firstChild</text>
<text text-anchor="start" x="5" y="-396" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> lastChild</text>
<text text-anchor="start" x="5" y="-384" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> previousSibling</text>
<text text-anchor="start" x="5" y="-372" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> nextSibling</text>
<polygon fill="none" stroke="#000000" points="0,-234 0,-364 122,-364 122,-234 0,-234"/>
<text text-anchor="start" x="5" y="-350" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> hasChildNodes()</text>
<text text-anchor="start" x="5" y="-338" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> normalize()</text>
<text text-anchor="start" x="5" y="-326" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> cloneNode()</text>
<text text-anchor="start" x="5" y="-314" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> lookupPrefix()</text>
<text text-anchor="start" x="5" y="-302" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> lookupNamespaceURI()</text>
<text text-anchor="start" x="5" y="-290" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> insertBefore()</text>
<text text-anchor="start" x="5" y="-278" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> insertAfter()</text>
<text text-anchor="start" x="5" y="-266" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> appendChild()</text>
<text text-anchor="start" x="5" y="-254" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> replaceChild()</text>
<text text-anchor="start" x="5" y="-242" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> removeChild()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;XmlNode -->
<g id="edge1" class="edge">
<title>object-&gt;XmlNode</title>
<path fill="none" stroke="#000000" d="M61,-541.5484C61,-533.5161 61,-524.975 61,-516.1675"/>
<polygon fill="#000000" stroke="#000000" points="57.5001,-541.7942 61,-551.7943 64.5001,-541.7943 57.5001,-541.7942"/>
</g>
<!-- XmlCharacterData -->
<g id="node3" class="node">
<title>XmlCharacterData</title>
<g id="a_node3"><a xlink:href="XmlCharacterData.md" xlink:title="XmlCharacterData">
<polygon fill="#ffffff" stroke="transparent" points="15,-72 15,-198 107,-198 107,-72 15,-72"/>
<polygon fill="none" stroke="#000000" points="15,-176 15,-198 107,-198 107,-176 15,-176"/>
<text text-anchor="start" x="19.8875" y="-184" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlCharacterData</text>
<polygon fill="none" stroke="#000000" points="15,-142 15,-176 107,-176 107,-142 15,-142"/>
<text text-anchor="start" x="20" y="-162" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> data</text>
<text text-anchor="start" x="20" y="-150" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> length</text>
<polygon fill="none" stroke="#000000" points="15,-72 15,-142 107,-142 107,-72 15,-72"/>
<text text-anchor="start" x="20" y="-128" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> substringData()</text>
<text text-anchor="start" x="20" y="-116" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> appendData()</text>
<text text-anchor="start" x="20" y="-104" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> insertData()</text>
<text text-anchor="start" x="20" y="-92" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> deleteData()</text>
<text text-anchor="start" x="20" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> replaceData()</text>
</a>
</g>
</g>
<!-- XmlNode&#45;&gt;XmlCharacterData -->
<g id="edge2" class="edge">
<title>XmlNode-&gt;XmlCharacterData</title>
<path fill="none" stroke="#000000" d="M61,-223.6362C61,-214.8425 61,-206.2905 61,-198.1877"/>
<polygon fill="#000000" stroke="#000000" points="57.5001,-223.6561 61,-233.6562 64.5001,-223.6562 57.5001,-223.6561"/>
</g>
<!-- XmlComment -->
<g id="node4" class="node">
<title>XmlComment</title>
<g id="a_node4"><a xlink:title="XmlComment">
<polygon fill="#d3d3d3" stroke="transparent" points="26,-7 26,-29 96,-29 96,-7 26,-7"/>
<polygon fill="none" stroke="#000000" points="26,-7 26,-29 96,-29 96,-7 26,-7"/>
<text text-anchor="start" x="30.725" y="-15" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlComment</text>
</a>
</g>
</g>
<!-- XmlCharacterData&#45;&gt;XmlComment -->
<g id="edge3" class="edge">
<title>XmlCharacterData-&gt;XmlComment</title>
<path fill="none" stroke="#000000" d="M61,-61.5226C61,-52.2872 61,-43.5857 61,-36.4261"/>
<polygon fill="#000000" stroke="#000000" points="57.5001,-61.7059 61,-71.706 64.5001,-61.706 57.5001,-61.7059"/>
</g>
</g>
</svg></div>

## 成员属性
        
### data
** String, 该节点包含的文本 **

```JavaScript
String XmlComment.data;
```

--------------------------
### length
** Integer, 该节点包含的字符数 **

```JavaScript
readonly Integer XmlComment.length;
```

--------------------------
### nodeType
** Integer, 返回节点的节点类型 **

```JavaScript
readonly Integer XmlComment.nodeType;
```

不同对象的 nodeType 会返回不同的值：
- [XmlElement](XmlElement.md): ELEMENT_NODE(1)
- [XmlAttr](XmlAttr.md): ATTRIBUTE_NODE(2)
- [XmlText](XmlText.md): TEXT_NODE(3)
- [XmlCDATASection](XmlCDATASection.md): CDATA_SECTION_NODE(4)
- [XmlProcessingInstruction](XmlProcessingInstruction.md): PROCESSING_INSTRUCTION_NODE(7)
- [XmlComment](XmlComment.md): COMMENT_NODE(8)
- [XmlDocument](XmlDocument.md): DOCUMENT_NODE(9)
- [XmlDocumentType](XmlDocumentType.md): DOCUMENT_TYPE_NODE(10)

--------------------------
### nodeName
** String, 返回节点的名称，根据其类型 **

```JavaScript
readonly String XmlComment.nodeName;
```

不同对象的 nodeName 会返回不同的值：
- [XmlElement](XmlElement.md): element name
- [XmlAttr](XmlAttr.md): 属性名称
- [XmlText](XmlText.md): \#text
- [XmlCDATASection](XmlCDATASection.md): \#cdata-section
- [XmlProcessingInstruction](XmlProcessingInstruction.md): 返回指定目标 target
- [XmlComment](XmlComment.md): \#comment
- [XmlDocument](XmlDocument.md): \#document
- [XmlDocumentType](XmlDocumentType.md): doctype 名称

--------------------------
### nodeValue
** String, 返回节点的名称，根据其类型 **

```JavaScript
String XmlComment.nodeValue;
```

不同对象的 nodeName 会返回不同的值：
- [XmlElement](XmlElement.md): null
- [XmlAttr](XmlAttr.md): 属性的值
- [XmlText](XmlText.md): 节点的内容
- [XmlCDATASection](XmlCDATASection.md): 节点的内容
- [XmlProcessingInstruction](XmlProcessingInstruction.md): 返回指定内容 data
- [XmlComment](XmlComment.md): 注释文本
- [XmlDocument](XmlDocument.md): null
- [XmlDocumentType](XmlDocumentType.md): null

--------------------------
### ownerDocument
** [XmlDocument](XmlDocument.md), 返回节点的根元素（[XmlDocument](XmlDocument.md) 对象） **

```JavaScript
readonly XmlDocument XmlComment.ownerDocument;
```

--------------------------
### parentNode
** XmlNode, 可返回某节点的父节点 **

```JavaScript
readonly XmlNode XmlComment.parentNode;
```

--------------------------
### childNodes
** [XmlNodeList](XmlNodeList.md), 返回指定节点的子节点的节点列表 **

```JavaScript
readonly XmlNodeList XmlComment.childNodes;
```

--------------------------
### firstChild
** XmlNode, 返回节点的首个子节点 **

```JavaScript
readonly XmlNode XmlComment.firstChild;
```

--------------------------
### lastChild
** XmlNode, 返回节点的最后一个子节点 **

```JavaScript
readonly XmlNode XmlComment.lastChild;
```

--------------------------
### previousSibling
** XmlNode, 返回某节点之前紧跟的节点（处于同一树层级），如果没有此节点，那么该属性返回 null **

```JavaScript
readonly XmlNode XmlComment.previousSibling;
```

--------------------------
### nextSibling
** XmlNode, 返回某个元素之后紧跟的节点（处于同一树层级中），如果无此节点，则属性返回 null **

```JavaScript
readonly XmlNode XmlComment.nextSibling;
```

## 成员函数
        
### substringData
** 从节点中提取子串 **

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
** 把字符串附加到节点上 **

```JavaScript
XmlComment.appendData(String arg);
```

调用参数:
* arg: String, 要附加到节点的字符串

--------------------------
### insertData
** 把字符串插入节点 **

```JavaScript
XmlComment.insertData(Integer offset,
    String arg);
```

调用参数:
* offset: Integer, 要把字符串插入节点的字符位置
* arg: String, 要插入的字符串

--------------------------
### deleteData
** 从节点删除文本 **

```JavaScript
XmlComment.deleteData(Integer offset,
    Integer count);
```

调用参数:
* offset: Integer, 要删除的第一个字符的位置
* count: Integer, 要删除的字符的数量

--------------------------
### replaceData
** 用指定的字符串替换节点的字符 **

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
** 查询是否存在子节点 **

```JavaScript
Boolean XmlComment.hasChildNodes();
```

返回结果:
* Boolean, 存在任何子节点时返回 true，否则返回 false

--------------------------
### normalize
** 合并相邻的 Text 节点并删除空的 Text 节点 **

```JavaScript
XmlComment.normalize();
```

这个方法将遍历当前节点的所有子孙节点，通过删除空的 Text 节点，已经合并所有相邻的 Text 节点来规范化文档。该方法在进行节点的插入或删除操作后，对于简化文档树的结构很有用。

--------------------------
### cloneNode
** 创建指定的节点的精确拷贝 **

```JavaScript
XmlNode XmlComment.cloneNode(Boolean deep = true);
```

调用参数:
* deep: Boolean, 是否深度拷贝，为 true 时，被克隆的节点会克隆原节点的所有子节点

返回结果:
* XmlNode, 返回所复制的节点

该方法将复制并返回调用它的节点的副本。如果传递给它的参数是 true，它还将递归复制当前节点的所有子孙节点。 否则，它只复制当前节点。返回的节点不属于文档树，它的 parentNode 属性为 null。当复制的是 Element 节点时，它的所有属性都将被复制。

--------------------------
### lookupPrefix
** 返回在当前节点上匹配指定的命名空间 URI 的前缀 **

```JavaScript
String XmlComment.lookupPrefix(String namespaceURI);
```

调用参数:
* namespaceURI: String, 指定匹配的命名空间 URI

返回结果:
* String, 返回匹配的前缀，未匹配到返回 null

--------------------------
### lookupNamespaceURI
** 返回在当前节点上匹配指定的前缀的命名空间 URI **

```JavaScript
String XmlComment.lookupNamespaceURI(String prefix);
```

调用参数:
* prefix: String, 指定匹配的前缀

返回结果:
* String, 返回匹配的命名空间 URI，未匹配到返回 null

--------------------------
### insertBefore
** 在已有的子节点前插入一个新的子节点 **

```JavaScript
XmlNode XmlComment.insertBefore(XmlNode newChild,
    XmlNode refChild);
```

调用参数:
* newChild: XmlNode, 插入新的节点
* refChild: XmlNode, 在此节点前插入新节点

返回结果:
* XmlNode, 返回新的子节点

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

--------------------------
### insertAfter
** 在已有的子节点后插入一个新的子节点 **

```JavaScript
XmlNode XmlComment.insertAfter(XmlNode newChild,
    XmlNode refChild);
```

调用参数:
* newChild: XmlNode, 插入新的节点
* refChild: XmlNode, 在此节点后插入新节点

返回结果:
* XmlNode, 返回新的子节点

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

--------------------------
### appendChild
** 向节点的子节点列表的末尾添加新的子节点 **

```JavaScript
XmlNode XmlComment.appendChild(XmlNode newChild);
```

调用参数:
* newChild: XmlNode, 指定添加的节点

返回结果:
* XmlNode, 返回这个新的子节点

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

--------------------------
### replaceChild
** 将某个子节点替换为另一个 **

```JavaScript
XmlNode XmlComment.replaceChild(XmlNode newChild,
    XmlNode oldChild);
```

调用参数:
* newChild: XmlNode, 指定新的节点
* oldChild: XmlNode, 指定被替换的节点

返回结果:
* XmlNode, 如替换成功，此方法可返回被替换的节点，如替换失败，则返回 null

如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。

--------------------------
### removeChild
** 从子节点列表中删除某个节点 **

```JavaScript
XmlNode XmlComment.removeChild(XmlNode oldChild);
```

调用参数:
* oldChild: XmlNode, 指定被删除的节点

返回结果:
* XmlNode, 如删除成功，此方法可返回被删除的节点，如失败，则返回 null

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
XmlComment.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean XmlComment.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String XmlComment.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value XmlComment.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value XmlComment.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

