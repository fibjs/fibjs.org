# 对象 XmlDocument
XmlDocument 对象代表整个 XML 文档

XmlDocument 对象是一棵文档树的根，可为我们提供对文档数据的最初（或最顶层）的访问入口。
用于元素节点、文本节点、注释、处理指令等均无法存在于 XmlDocument 之外， XmlDocument 对象同样提供了创建这些对象的方法。 [XmlNode](XmlNode.md) 对象提供了一个 ownerDocument 属性，此属性可把它们与在其中创建它们的 XmlDocument 关联起来。

## 继承关系
<div class="inherits"><svg width="156pt" height="707pt" viewBox="0.00 0.00 155.68 707.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 703)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-703 151.678,-703 151.678,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="45.0075,-610.5 45.0075,-698.5 102.6705,-698.5 102.6705,-610.5 45.0075,-610.5"/>
<text text-anchor="middle" x="73.839" y="-685.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="45.0075,-678.5 102.6705,-678.5 "/>
<text text-anchor="start" x="53.0075" y="-665.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="53.0075" y="-653.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="53.0075" y="-641.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="53.0075" y="-629.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="53.0075" y="-617.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- XmlNode -->
<g id="node2" class="node">
<title>XmlNode</title>
<g id="a_node2"><a xlink:href="XmlNode.md" xlink:title="XmlNode">
<polygon fill="#ffffff" stroke="#000000" points="12.5025,-297.5 12.5025,-573.5 135.1755,-573.5 135.1755,-297.5 12.5025,-297.5"/>
<text text-anchor="middle" x="73.839" y="-560.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlNode</text>
<polyline fill="none" stroke="#000000" points="12.5025,-553.5 135.1755,-553.5 "/>
<text text-anchor="start" x="20.5025" y="-540.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">nodeType</text>
<text text-anchor="start" x="20.5025" y="-528.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">nodeName</text>
<text text-anchor="start" x="20.5025" y="-516.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">nodeValue</text>
<text text-anchor="start" x="20.5025" y="-504.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">ownerDocument</text>
<text text-anchor="start" x="20.5025" y="-492.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">parentNode</text>
<text text-anchor="start" x="20.5025" y="-480.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">childNodes</text>
<text text-anchor="start" x="20.5025" y="-468.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">firstChild</text>
<text text-anchor="start" x="20.5025" y="-456.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">lastChild</text>
<text text-anchor="start" x="20.5025" y="-444.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">previousSibling</text>
<text text-anchor="start" x="20.5025" y="-432.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">nextSibling</text>
<polyline fill="none" stroke="#000000" points="12.5025,-425.5 135.1755,-425.5 "/>
<text text-anchor="start" x="20.5025" y="-412.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">hasChildNodes()</text>
<text text-anchor="start" x="20.5025" y="-400.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">normalize()</text>
<text text-anchor="start" x="20.5025" y="-388.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">cloneNode()</text>
<text text-anchor="start" x="20.5025" y="-376.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">lookupPrefix()</text>
<text text-anchor="start" x="20.5025" y="-364.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">lookupNamespaceURI()</text>
<text text-anchor="start" x="20.5025" y="-352.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">insertBefore()</text>
<text text-anchor="start" x="20.5025" y="-340.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">insertAfter()</text>
<text text-anchor="start" x="20.5025" y="-328.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">appendChild()</text>
<text text-anchor="start" x="20.5025" y="-316.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">replaceChild()</text>
<text text-anchor="start" x="20.5025" y="-304.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">removeChild()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;XmlNode -->
<g id="edge1" class="edge">
<title>object-&gt;XmlNode</title>
<path fill="none" stroke="#000000" d="M73.839,-600.1907C73.839,-591.8324 73.839,-582.8931 73.839,-573.6615"/>
<polygon fill="#000000" stroke="#000000" points="70.3391,-600.4455 73.839,-610.4455 77.3391,-600.4456 70.3391,-600.4455"/>
</g>
<!-- XmlDocument -->
<g id="node3" class="node">
<title>XmlDocument</title>
<g id="a_node3"><a xlink:title="XmlDocument">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-260.5 147.678,-260.5 147.678,-.5 0,-.5"/>
<text text-anchor="middle" x="73.839" y="-247.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlDocument</text>
<polyline fill="none" stroke="#000000" points="0,-240.5 147.678,-240.5 "/>
<text text-anchor="start" x="8" y="-227.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new XmlDocument()</text>
<polyline fill="none" stroke="#000000" points="0,-220.5 147.678,-220.5 "/>
<text text-anchor="start" x="8" y="-207.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">inputEncoding</text>
<text text-anchor="start" x="8" y="-195.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">xmlStandalone</text>
<text text-anchor="start" x="8" y="-183.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">xmlVersion</text>
<text text-anchor="start" x="8" y="-171.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">doctype</text>
<text text-anchor="start" x="8" y="-159.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">documentElement</text>
<text text-anchor="start" x="8" y="-147.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">head</text>
<text text-anchor="start" x="8" y="-135.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">title</text>
<text text-anchor="start" x="8" y="-123.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">body</text>
<polyline fill="none" stroke="#000000" points="0,-116.5 147.678,-116.5 "/>
<text text-anchor="start" x="8" y="-103.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">load()</text>
<text text-anchor="start" x="8" y="-91.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">getElementsByTagName()</text>
<text text-anchor="start" x="8" y="-79.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">getElementsByTagNameNS()</text>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">createElement()</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">createElementNS()</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">createTextNode()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">createComment()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">createCDATASection()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">createProcessingInstruction()</text>
</a>
</g>
</g>
<!-- XmlNode&#45;&gt;XmlDocument -->
<g id="edge2" class="edge">
<title>XmlNode-&gt;XmlDocument</title>
<path fill="none" stroke="#000000" d="M73.839,-287.0162C73.839,-278.2617 73.839,-269.4895 73.839,-260.8151"/>
<polygon fill="#000000" stroke="#000000" points="70.3391,-287.2782 73.839,-297.2783 77.3391,-287.2783 70.3391,-287.2782"/>
</g>
</g>
</svg></div>

## 构造函数
        
### XmlDocument
** 构造一个 XmlDocument 对象 **

```JavaScript
new XmlDocument(String type = "text/xml");
```

调用参数:
* type: String, 指定文档对象的类型，缺省为 "text/[xml](../../module/ifs/xml.md)"，若需要处理 html 则需要指定 "text/html"

## 成员属性
        
### inputEncoding
** String, 返回用于文档的编码（在解析时） **

```JavaScript
readonly String XmlDocument.inputEncoding;
```

--------------------------
### xmlStandalone
** Boolean, 设置或返回文档是否为 standalone **

```JavaScript
Boolean XmlDocument.xmlStandalone;
```

--------------------------
### xmlVersion
** String, 设置或返回文档的 XML 版本 **

```JavaScript
String XmlDocument.xmlVersion;
```

--------------------------
### doctype
** [XmlDocumentType](XmlDocumentType.md), 返回与文档相关的文档类型声明（Document Type Declaration） **

```JavaScript
readonly XmlDocumentType XmlDocument.doctype;
```

对于没有 DTD 的 XML 文档，则返回 null。此属性可提供对 [XmlDocumentType](XmlDocumentType.md) 对象（ XmlDocument 的一个子节点）的直接访问。

--------------------------
### documentElement
** [XmlElement](XmlElement.md), 返回文档的根节点 **

```JavaScript
readonly XmlElement XmlDocument.documentElement;
```

--------------------------
### head
** [XmlElement](XmlElement.md), 返回 HTML 文档的 head 节点，仅在 html 模式有效 **

```JavaScript
readonly XmlElement XmlDocument.head;
```

--------------------------
### title
** String, 返回 HTML 文档的 title 节点的内容，仅在 html 模式有效 **

```JavaScript
readonly String XmlDocument.title;
```

--------------------------
### body
** [XmlElement](XmlElement.md), 返回 HTML 文档的 body 节点，仅在 html 模式有效 **

```JavaScript
readonly XmlElement XmlDocument.body;
```

--------------------------
### nodeType
** Integer, 返回节点的节点类型 **

```JavaScript
readonly Integer XmlDocument.nodeType;
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
readonly String XmlDocument.nodeName;
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
String XmlDocument.nodeValue;
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
readonly XmlDocument XmlDocument.ownerDocument;
```

--------------------------
### parentNode
** XmlNode, 可返回某节点的父节点 **

```JavaScript
readonly XmlNode XmlDocument.parentNode;
```

--------------------------
### childNodes
** [XmlNodeList](XmlNodeList.md), 返回指定节点的子节点的节点列表 **

```JavaScript
readonly XmlNodeList XmlDocument.childNodes;
```

--------------------------
### firstChild
** XmlNode, 返回节点的首个子节点 **

```JavaScript
readonly XmlNode XmlDocument.firstChild;
```

--------------------------
### lastChild
** XmlNode, 返回节点的最后一个子节点 **

```JavaScript
readonly XmlNode XmlDocument.lastChild;
```

--------------------------
### previousSibling
** XmlNode, 返回某节点之前紧跟的节点（处于同一树层级），如果没有此节点，那么该属性返回 null **

```JavaScript
readonly XmlNode XmlDocument.previousSibling;
```

--------------------------
### nextSibling
** XmlNode, 返回某个元素之后紧跟的节点（处于同一树层级中），如果无此节点，则属性返回 null **

```JavaScript
readonly XmlNode XmlDocument.nextSibling;
```

## 成员函数
        
### load
** 通过解析一个 XML/HTML 字符串来组成该文档，不支持多语种 **

```JavaScript
XmlDocument.load(String source);
```

调用参数:
* source: String, 要解析的 XML/HTML 文本，取决于文档创建时的类型

--------------------------
** 通过解析一个二进制 XML/HTML 字符串来组成该文档，并根据语种自动转换 **

```JavaScript
XmlDocument.load(Buffer source);
```

调用参数:
* source: [Buffer](Buffer.md), 要解析的 XML/HTML 文本，取决于文档创建时的类型

--------------------------
### getElementsByTagName
** 返回带有指定名称的所有元素的一个节点列表 **

```JavaScript
XmlNodeList XmlDocument.getElementsByTagName(String tagName);
```

调用参数:
* tagName: String, 需检索的标签名。值 "*" 匹配所有的标签

返回结果:
* [XmlNodeList](XmlNodeList.md), 文档树中具有指定标记的 [XmlElement](XmlElement.md) 节点的 [XmlNodeList](XmlNodeList.md) 集合。返回的元素节点的顺序就是它们在源文档中出现的顺序。

该方法将返回一个 [XmlNodeList](XmlNodeList.md) 对象（可以作为只读数组处理），该对象存放文档中具有指定标签名的所有 [XmlElement](XmlElement.md) 节点，它们存放的顺序就是在源文档中出现的顺序。 [XmlNodeList](XmlNodeList.md) 对象是“活”的，即如果在文档中添加或删除了指定标签名的元素，它的内容会自动进行必要的更新。

--------------------------
### getElementsByTagNameNS
** 返回带有指定命名空间和名称的所有元素的一个节点列表 **

```JavaScript
XmlNodeList XmlDocument.getElementsByTagNameNS(String namespaceURI,
    String localName);
```

调用参数:
* namespaceURI: String, 指定检索的命名空间 URI。值 "*" 可匹配所有的标签
* localName: String, 需检索的标签名。值 "*" 匹配所有的标签

返回结果:
* [XmlNodeList](XmlNodeList.md), 文档树中具有指定标记的 [XmlElement](XmlElement.md) 节点的 [XmlNodeList](XmlNodeList.md) 集合。返回的元素节点的顺序就是它们在源文档中出现的顺序。

该方法与 getElementsByTagName() 方法相似，只是它根据命名空间和名称来检索元素。

--------------------------
### createElement
** 创建元素节点 **

```JavaScript
XmlElement XmlDocument.createElement(String tagName);
```

调用参数:
* tagName: String, 指定元素节点规定名称

返回结果:
* [XmlElement](XmlElement.md), 返回新创建的 [XmlElement](XmlElement.md) 节点，具有指定的标签名

--------------------------
### createElementNS
** 创建带有指定命名空间的元素节点 **

```JavaScript
XmlElement XmlDocument.createElementNS(String namespaceURI,
    String qualifiedName);
```

调用参数:
* namespaceURI: String, 指定元素节点命名空间 URI
* qualifiedName: String, 指定元素节点规定名称

返回结果:
* [XmlElement](XmlElement.md), 返回新创建的 [XmlElement](XmlElement.md) 节点，具有指定的标签名

--------------------------
### createTextNode
** 创建文本节点 **

```JavaScript
XmlText XmlDocument.createTextNode(String data);
```

调用参数:
* data: String, 指定此节点的文本

返回结果:
* [XmlText](XmlText.md), 返回新创建的 [XmlText](XmlText.md) 节点，表示指定的 data 字符串

--------------------------
### createComment
** 创建注释节点 **

```JavaScript
XmlComment XmlDocument.createComment(String data);
```

调用参数:
* data: String, 指定此节点的注释文本

返回结果:
* [XmlComment](XmlComment.md), 返回新创建的 [XmlComment](XmlComment.md) 节点，注释文本为指定的 data

--------------------------
### createCDATASection
** 创建 [XmlCDATASection](XmlCDATASection.md) 节点 **

```JavaScript
XmlCDATASection XmlDocument.createCDATASection(String data);
```

调用参数:
* data: String, 指定此节点规定 CDATA 数据

返回结果:
* [XmlCDATASection](XmlCDATASection.md), 返回新创建的 [XmlCDATASection](XmlCDATASection.md) 节点，内容为指定的 data

--------------------------
### createProcessingInstruction
** 创建 [XmlProcessingInstruction](XmlProcessingInstruction.md) 节点 **

```JavaScript
XmlProcessingInstruction XmlDocument.createProcessingInstruction(String target,
    String data);
```

调用参数:
* target: String, 指定处理指令的目标
* data: String, 指定处理指令的内容文本

返回结果:
* [XmlProcessingInstruction](XmlProcessingInstruction.md), 新创建的 ProcessingInstruction 节点

--------------------------
### hasChildNodes
** 查询是否存在子节点 **

```JavaScript
Boolean XmlDocument.hasChildNodes();
```

返回结果:
* Boolean, 存在任何子节点时返回 true，否则返回 false

--------------------------
### normalize
** 合并相邻的 Text 节点并删除空的 Text 节点 **

```JavaScript
XmlDocument.normalize();
```

这个方法将遍历当前节点的所有子孙节点，通过删除空的 Text 节点，已经合并所有相邻的 Text 节点来规范化文档。该方法在进行节点的插入或删除操作后，对于简化文档树的结构很有用。

--------------------------
### cloneNode
** 创建指定的节点的精确拷贝 **

```JavaScript
XmlNode XmlDocument.cloneNode(Boolean deep = true);
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
String XmlDocument.lookupPrefix(String namespaceURI);
```

调用参数:
* namespaceURI: String, 指定匹配的命名空间 URI

返回结果:
* String, 返回匹配的前缀，未匹配到返回 null

--------------------------
### lookupNamespaceURI
** 返回在当前节点上匹配指定的前缀的命名空间 URI **

```JavaScript
String XmlDocument.lookupNamespaceURI(String prefix);
```

调用参数:
* prefix: String, 指定匹配的前缀

返回结果:
* String, 返回匹配的命名空间 URI，未匹配到返回 null

--------------------------
### insertBefore
** 在已有的子节点前插入一个新的子节点 **

```JavaScript
XmlNode XmlDocument.insertBefore(XmlNode newChild,
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
XmlNode XmlDocument.insertAfter(XmlNode newChild,
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
XmlNode XmlDocument.appendChild(XmlNode newChild);
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
XmlNode XmlDocument.replaceChild(XmlNode newChild,
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
XmlNode XmlDocument.removeChild(XmlNode oldChild);
```

调用参数:
* oldChild: XmlNode, 指定被删除的节点

返回结果:
* XmlNode, 如删除成功，此方法可返回被删除的节点，如失败，则返回 null

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
XmlDocument.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean XmlDocument.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String XmlDocument.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value XmlDocument.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value XmlDocument.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

