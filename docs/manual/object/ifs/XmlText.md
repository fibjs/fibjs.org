# 对象 XmlText
XmlText 对象表示元素或属性的文本内容

XmlText 节点表示 XML 文档中的一系列纯文本。因为纯文本出现在 XML 的元素和属性中，所以 XmlText 节点通常作为 [XmlElement](XmlElement.md) 节点和 [XmlAttr](XmlAttr.md) 节点的子节点出现。

XmlText 节点继承了 [XmlCharacterData](XmlCharacterData.md) 接口，通过从 [XmlCharacterData](XmlCharacterData.md) 接口继承的 data 属性或从 [XmlNode](XmlNode.md) 接口继承的 nadevalue 属性，可以访问 XmlText 节点的文本内容。

用从 [XmlCharacterData](XmlCharacterData.md) 继承的方法或 XmlText 接口自身定义的 splitText() 方法可以操作 XmlText 节点。使用 [XmlDocument](XmlDocument.md) 的 createTextNode 来创建一个新的 XmlText 节点。

XmlText 节点没有子节点。

关于从文档的子树中删除空 XmlText 节点与合并相邻的 XmlText 节点的方法，请参阅 [XmlNode](XmlNode.md).normalize 方法。

## 继承关系
<div class="inherits"><svg width="131pt" height="717pt" viewBox="0.00 0.00 130.67 717.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 713)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-713 126.673,-713 126.673,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="32.505,-620.5 32.505,-708.5 90.168,-708.5 90.168,-620.5 32.505,-620.5"/>
<text text-anchor="middle" x="61.3365" y="-695.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="32.505,-688.5 90.168,-688.5 "/>
<text text-anchor="start" x="40.505" y="-675.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="40.505" y="-663.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="40.505" y="-651.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="40.505" y="-639.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="40.505" y="-627.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- XmlNode -->
<g id="node2" class="node">
<title>XmlNode</title>
<g id="a_node2"><a xlink:href="XmlNode.md" xlink:title="XmlNode">
<polygon fill="#ffffff" stroke="#000000" points="0,-307.5 0,-583.5 122.673,-583.5 122.673,-307.5 0,-307.5"/>
<text text-anchor="middle" x="61.3365" y="-570.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlNode</text>
<polyline fill="none" stroke="#000000" points="0,-563.5 122.673,-563.5 "/>
<text text-anchor="start" x="8" y="-550.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">nodeType</text>
<text text-anchor="start" x="8" y="-538.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">nodeName</text>
<text text-anchor="start" x="8" y="-526.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">nodeValue</text>
<text text-anchor="start" x="8" y="-514.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">ownerDocument</text>
<text text-anchor="start" x="8" y="-502.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">parentNode</text>
<text text-anchor="start" x="8" y="-490.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">childNodes</text>
<text text-anchor="start" x="8" y="-478.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">firstChild</text>
<text text-anchor="start" x="8" y="-466.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">lastChild</text>
<text text-anchor="start" x="8" y="-454.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">previousSibling</text>
<text text-anchor="start" x="8" y="-442.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">nextSibling</text>
<polyline fill="none" stroke="#000000" points="0,-435.5 122.673,-435.5 "/>
<text text-anchor="start" x="8" y="-422.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">hasChildNodes()</text>
<text text-anchor="start" x="8" y="-410.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">normalize()</text>
<text text-anchor="start" x="8" y="-398.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">cloneNode()</text>
<text text-anchor="start" x="8" y="-386.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">lookupPrefix()</text>
<text text-anchor="start" x="8" y="-374.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">lookupNamespaceURI()</text>
<text text-anchor="start" x="8" y="-362.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">insertBefore()</text>
<text text-anchor="start" x="8" y="-350.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">insertAfter()</text>
<text text-anchor="start" x="8" y="-338.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">appendChild()</text>
<text text-anchor="start" x="8" y="-326.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">replaceChild()</text>
<text text-anchor="start" x="8" y="-314.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">removeChild()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;XmlNode -->
<g id="edge1" class="edge">
<title>object-&gt;XmlNode</title>
<path fill="none" stroke="#000000" d="M61.3365,-610.1907C61.3365,-601.8324 61.3365,-592.8931 61.3365,-583.6615"/>
<polygon fill="#000000" stroke="#000000" points="57.8366,-610.4455 61.3365,-620.4455 64.8366,-610.4456 57.8366,-610.4455"/>
</g>
<!-- XmlCharacterData -->
<g id="node3" class="node">
<title>XmlCharacterData</title>
<g id="a_node3"><a xlink:href="XmlCharacterData.md" xlink:title="XmlCharacterData">
<polygon fill="#ffffff" stroke="#000000" points="12.224,-150.5 12.224,-270.5 110.449,-270.5 110.449,-150.5 12.224,-150.5"/>
<text text-anchor="middle" x="61.3365" y="-257.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlCharacterData</text>
<polyline fill="none" stroke="#000000" points="12.224,-250.5 110.449,-250.5 "/>
<text text-anchor="start" x="20.224" y="-237.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">data</text>
<text text-anchor="start" x="20.224" y="-225.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">length</text>
<polyline fill="none" stroke="#000000" points="12.224,-218.5 110.449,-218.5 "/>
<text text-anchor="start" x="20.224" y="-205.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">substringData()</text>
<text text-anchor="start" x="20.224" y="-193.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">appendData()</text>
<text text-anchor="start" x="20.224" y="-181.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">insertData()</text>
<text text-anchor="start" x="20.224" y="-169.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">deleteData()</text>
<text text-anchor="start" x="20.224" y="-157.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">replaceData()</text>
</a>
</g>
</g>
<!-- XmlNode&#45;&gt;XmlCharacterData -->
<g id="edge2" class="edge">
<title>XmlNode-&gt;XmlCharacterData</title>
<path fill="none" stroke="#000000" d="M61.3365,-297.3324C61.3365,-288.1046 61.3365,-279.1482 61.3365,-270.7132"/>
<polygon fill="#000000" stroke="#000000" points="57.8366,-297.4402 61.3365,-307.4403 64.8366,-297.4403 57.8366,-297.4402"/>
</g>
<!-- XmlText -->
<g id="node4" class="node">
<title>XmlText</title>
<g id="a_node4"><a xlink:title="XmlText">
<polygon fill="#d3d3d3" stroke="#000000" points="31.396,-73.5 31.396,-113.5 91.277,-113.5 91.277,-73.5 31.396,-73.5"/>
<text text-anchor="middle" x="61.3365" y="-100.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlText</text>
<polyline fill="none" stroke="#000000" points="31.396,-93.5 91.277,-93.5 "/>
<text text-anchor="start" x="39.396" y="-80.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">splitText()</text>
</a>
</g>
</g>
<!-- XmlCharacterData&#45;&gt;XmlText -->
<g id="edge3" class="edge">
<title>XmlCharacterData-&gt;XmlText</title>
<path fill="none" stroke="#000000" d="M61.3365,-140.1356C61.3365,-130.5062 61.3365,-121.3244 61.3365,-113.6942"/>
<polygon fill="#000000" stroke="#000000" points="57.8366,-140.2863 61.3365,-150.2864 64.8366,-140.2864 57.8366,-140.2863"/>
</g>
<!-- XmlCDATASection -->
<g id="node5" class="node">
<title>XmlCDATASection</title>
<g id="a_node5"><a xlink:href="XmlCDATASection.md" xlink:title="XmlCDATASection">
<polygon fill="#ffffff" stroke="#000000" points="11.1135,-.5 11.1135,-36.5 111.5595,-36.5 111.5595,-.5 11.1135,-.5"/>
<text text-anchor="middle" x="61.3365" y="-15.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlCDATASection</text>
</a>
</g>
</g>
<!-- XmlText&#45;&gt;XmlCDATASection -->
<g id="edge4" class="edge">
<title>XmlText-&gt;XmlCDATASection</title>
<path fill="none" stroke="#000000" d="M61.3365,-63.2072C61.3365,-54.1849 61.3365,-44.5841 61.3365,-36.6016"/>
<polygon fill="#000000" stroke="#000000" points="57.8366,-63.4013 61.3365,-73.4014 64.8366,-63.4014 57.8366,-63.4013"/>
</g>
</g>
</svg></div>

## 成员属性
        
### data
** String, 该节点包含的文本 **

```JavaScript
String XmlText.data;
```

--------------------------
### length
** Integer, 该节点包含的字符数 **

```JavaScript
readonly Integer XmlText.length;
```

--------------------------
### nodeType
** Integer, 返回节点的节点类型 **

```JavaScript
readonly Integer XmlText.nodeType;
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
readonly String XmlText.nodeName;
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
String XmlText.nodeValue;
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
readonly XmlDocument XmlText.ownerDocument;
```

--------------------------
### parentNode
** XmlNode, 可返回某节点的父节点 **

```JavaScript
readonly XmlNode XmlText.parentNode;
```

--------------------------
### childNodes
** [XmlNodeList](XmlNodeList.md), 返回指定节点的子节点的节点列表 **

```JavaScript
readonly XmlNodeList XmlText.childNodes;
```

--------------------------
### firstChild
** XmlNode, 返回节点的首个子节点 **

```JavaScript
readonly XmlNode XmlText.firstChild;
```

--------------------------
### lastChild
** XmlNode, 返回节点的最后一个子节点 **

```JavaScript
readonly XmlNode XmlText.lastChild;
```

--------------------------
### previousSibling
** XmlNode, 返回某节点之前紧跟的节点（处于同一树层级），如果没有此节点，那么该属性返回 null **

```JavaScript
readonly XmlNode XmlText.previousSibling;
```

--------------------------
### nextSibling
** XmlNode, 返回某个元素之后紧跟的节点（处于同一树层级中），如果无此节点，则属性返回 null **

```JavaScript
readonly XmlNode XmlText.nextSibling;
```

## 成员函数
        
### splitText
** 按照指定的 offset 把文本节点分割为两个节点 **

```JavaScript
XmlText XmlText.splitText(Integer offset);
```

调用参数:
* offset: Integer, 规定在何处分割文本节点。开始值以 0 开始

返回结果:
* XmlText, 从当前节点分割出的 Text 节点

该方法将在指定的 offset 处把 XmlText 节点分割成两个节点。原始的 XmlText 节点将被修改，使它包含 offset 指定的位置之前的文本内容（但不包括文本内容）。新的 XmlText 节点将被创建，用于存放从 offset 位置（包括该位置上的字符）到原字符结尾的所有字符。新的 XmlText 节点是该方法的返回值。此外，如果原始的 XmlText 节点具有 parentNode，新的 XmlText 节点将插入这个父节点，紧邻在原始节点之后。

[XmlCDATASection](XmlCDATASection.md) 接口继承了 XmlText 接口， [XmlCDATASection](XmlCDATASection.md) 节点也可以使用该方法 ，只是新创建的节点是 [XmlCDATASection](XmlCDATASection.md) 节点，而不是 XmlText 节点。

--------------------------
### substringData
** 从节点中提取子串 **

```JavaScript
String XmlText.substringData(Integer offset,
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
XmlText.appendData(String arg);
```

调用参数:
* arg: String, 要附加到节点的字符串

--------------------------
### insertData
** 把字符串插入节点 **

```JavaScript
XmlText.insertData(Integer offset,
    String arg);
```

调用参数:
* offset: Integer, 要把字符串插入节点的字符位置
* arg: String, 要插入的字符串

--------------------------
### deleteData
** 从节点删除文本 **

```JavaScript
XmlText.deleteData(Integer offset,
    Integer count);
```

调用参数:
* offset: Integer, 要删除的第一个字符的位置
* count: Integer, 要删除的字符的数量

--------------------------
### replaceData
** 用指定的字符串替换节点的字符 **

```JavaScript
XmlText.replaceData(Integer offset,
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
Boolean XmlText.hasChildNodes();
```

返回结果:
* Boolean, 存在任何子节点时返回 true，否则返回 false

--------------------------
### normalize
** 合并相邻的 Text 节点并删除空的 Text 节点 **

```JavaScript
XmlText.normalize();
```

这个方法将遍历当前节点的所有子孙节点，通过删除空的 Text 节点，已经合并所有相邻的 Text 节点来规范化文档。该方法在进行节点的插入或删除操作后，对于简化文档树的结构很有用。

--------------------------
### cloneNode
** 创建指定的节点的精确拷贝 **

```JavaScript
XmlNode XmlText.cloneNode(Boolean deep = true);
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
String XmlText.lookupPrefix(String namespaceURI);
```

调用参数:
* namespaceURI: String, 指定匹配的命名空间 URI

返回结果:
* String, 返回匹配的前缀，未匹配到返回 null

--------------------------
### lookupNamespaceURI
** 返回在当前节点上匹配指定的前缀的命名空间 URI **

```JavaScript
String XmlText.lookupNamespaceURI(String prefix);
```

调用参数:
* prefix: String, 指定匹配的前缀

返回结果:
* String, 返回匹配的命名空间 URI，未匹配到返回 null

--------------------------
### insertBefore
** 在已有的子节点前插入一个新的子节点 **

```JavaScript
XmlNode XmlText.insertBefore(XmlNode newChild,
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
XmlNode XmlText.insertAfter(XmlNode newChild,
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
XmlNode XmlText.appendChild(XmlNode newChild);
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
XmlNode XmlText.replaceChild(XmlNode newChild,
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
XmlNode XmlText.removeChild(XmlNode oldChild);
```

调用参数:
* oldChild: XmlNode, 指定被删除的节点

返回结果:
* XmlNode, 如删除成功，此方法可返回被删除的节点，如失败，则返回 null

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
XmlText.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean XmlText.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String XmlText.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value XmlText.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value XmlText.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

