# 对象 XmlCharacterData
XmlCharacterData 接口提供了 [XmlText](XmlText.md) 和 [XmlComment](XmlComment.md) 节点的常用功能

XmlCharacterData 是 [XmlText](XmlText.md) 和 [XmlComment](XmlComment.md) 节点的超接口。文档从不包含 XmlCharacterData 节点，它们只包含 [XmlText](XmlText.md) 节点和 [XmlComment](XmlComment.md) 节点。但由于这两种节点具有相似的功能，因此此处定义了这些函数，以便 [XmlText](XmlText.md) 和 [XmlComment](XmlComment.md) 可以继承它。

## 继承关系
<div class="inherits"><svg width="173pt" height="732pt" viewBox="0.00 0.00 173.00 732.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 728)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-728 169,-728 169,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="47.5,-632 47.5,-724 104.5,-724 104.5,-632 47.5,-632"/>
<polygon fill="none" stroke="#000000" points="48,-702 48,-724 105,-724 105,-702 48,-702"/>
<text text-anchor="start" x="63.1625" y="-710" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="48,-632 48,-702 105,-702 105,-632 48,-632"/>
<text text-anchor="start" x="53" y="-688" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="53" y="-676" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="53" y="-664" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="53" y="-652" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="53" y="-640" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- XmlNode -->
<g id="node2" class="node">
<title>XmlNode</title>
<g id="a_node2"><a xlink:href="XmlNode.md" xlink:title="XmlNode">
<polygon fill="#ffffff" stroke="transparent" points="15,-314 15,-596 137,-596 137,-314 15,-314"/>
<polygon fill="none" stroke="#000000" points="15,-574 15,-596 137,-596 137,-574 15,-574"/>
<text text-anchor="start" x="55.4435" y="-582" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlNode</text>
<polygon fill="none" stroke="#000000" points="15,-444 15,-574 137,-574 137,-444 15,-444"/>
<text text-anchor="start" x="20" y="-560" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> nodeType</text>
<text text-anchor="start" x="20" y="-548" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> nodeName</text>
<text text-anchor="start" x="20" y="-536" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> nodeValue</text>
<text text-anchor="start" x="20" y="-524" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> ownerDocument</text>
<text text-anchor="start" x="20" y="-512" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> parentNode</text>
<text text-anchor="start" x="20" y="-500" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> childNodes</text>
<text text-anchor="start" x="20" y="-488" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> firstChild</text>
<text text-anchor="start" x="20" y="-476" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> lastChild</text>
<text text-anchor="start" x="20" y="-464" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> previousSibling</text>
<text text-anchor="start" x="20" y="-452" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> nextSibling</text>
<polygon fill="none" stroke="#000000" points="15,-314 15,-444 137,-444 137,-314 15,-314"/>
<text text-anchor="start" x="20" y="-430" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> hasChildNodes()</text>
<text text-anchor="start" x="20" y="-418" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> normalize()</text>
<text text-anchor="start" x="20" y="-406" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> cloneNode()</text>
<text text-anchor="start" x="20" y="-394" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> lookupPrefix()</text>
<text text-anchor="start" x="20" y="-382" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> lookupNamespaceURI()</text>
<text text-anchor="start" x="20" y="-370" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> insertBefore()</text>
<text text-anchor="start" x="20" y="-358" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> insertAfter()</text>
<text text-anchor="start" x="20" y="-346" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> appendChild()</text>
<text text-anchor="start" x="20" y="-334" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> replaceChild()</text>
<text text-anchor="start" x="20" y="-322" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> removeChild()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;XmlNode -->
<g id="edge1" class="edge">
<title>object-&gt;XmlNode</title>
<path fill="none" stroke="#000000" d="M76,-621.5484C76,-613.5161 76,-604.975 76,-596.1675"/>
<polygon fill="#000000" stroke="#000000" points="72.5001,-621.7942 76,-631.7943 79.5001,-621.7943 72.5001,-621.7942"/>
</g>
<!-- XmlCharacterData -->
<g id="node3" class="node">
<title>XmlCharacterData</title>
<g id="a_node3"><a xlink:title="XmlCharacterData">
<polygon fill="#d3d3d3" stroke="transparent" points="30,-152 30,-278 122,-278 122,-152 30,-152"/>
<polygon fill="none" stroke="#000000" points="30,-256 30,-278 122,-278 122,-256 30,-256"/>
<text text-anchor="start" x="34.8875" y="-264" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlCharacterData</text>
<polygon fill="none" stroke="#000000" points="30,-222 30,-256 122,-256 122,-222 30,-222"/>
<text text-anchor="start" x="35" y="-242" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> data</text>
<text text-anchor="start" x="35" y="-230" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> length</text>
<polygon fill="none" stroke="#000000" points="30,-152 30,-222 122,-222 122,-152 30,-152"/>
<text text-anchor="start" x="35" y="-208" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> substringData()</text>
<text text-anchor="start" x="35" y="-196" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> appendData()</text>
<text text-anchor="start" x="35" y="-184" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> insertData()</text>
<text text-anchor="start" x="35" y="-172" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> deleteData()</text>
<text text-anchor="start" x="35" y="-160" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> replaceData()</text>
</a>
</g>
</g>
<!-- XmlNode&#45;&gt;XmlCharacterData -->
<g id="edge2" class="edge">
<title>XmlNode-&gt;XmlCharacterData</title>
<path fill="none" stroke="#000000" d="M76,-303.6362C76,-294.8425 76,-286.2905 76,-278.1877"/>
<polygon fill="#000000" stroke="#000000" points="72.5001,-303.6561 76,-313.6562 79.5001,-303.6562 72.5001,-303.6561"/>
</g>
<!-- XmlComment -->
<g id="node4" class="node">
<title>XmlComment</title>
<g id="a_node4"><a xlink:href="XmlComment.md" xlink:title="XmlComment">
<polygon fill="#ffffff" stroke="transparent" points="0,-83 0,-105 70,-105 70,-83 0,-83"/>
<polygon fill="none" stroke="#000000" points="0,-83 0,-105 70,-105 70,-83 0,-83"/>
<text text-anchor="start" x="4.725" y="-91" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlComment</text>
</a>
</g>
</g>
<!-- XmlCharacterData&#45;&gt;XmlComment -->
<g id="edge3" class="edge">
<title>XmlCharacterData-&gt;XmlComment</title>
<path fill="none" stroke="#000000" d="M51.2191,-141.8661C47.4839,-130.8428 43.9472,-120.4051 41.1353,-112.1067"/>
<polygon fill="#000000" stroke="#000000" points="48.0152,-143.3172 54.5394,-151.665 54.645,-141.0707 48.0152,-143.3172"/>
</g>
<!-- XmlText -->
<g id="node5" class="node">
<title>XmlText</title>
<g id="a_node5"><a xlink:href="XmlText.md" xlink:title="XmlText">
<polygon fill="#ffffff" stroke="transparent" points="88.5,-72 88.5,-116 147.5,-116 147.5,-72 88.5,-72"/>
<polygon fill="none" stroke="#000000" points="89,-94 89,-116 148,-116 148,-94 89,-94"/>
<text text-anchor="start" x="100.168" y="-102" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlText</text>
<polygon fill="none" stroke="#000000" points="89,-72 89,-94 148,-94 148,-72 89,-72"/>
<text text-anchor="start" x="94" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> splitText()</text>
</a>
</g>
</g>
<!-- XmlCharacterData&#45;&gt;XmlText -->
<g id="edge4" class="edge">
<title>XmlCharacterData-&gt;XmlText</title>
<path fill="none" stroke="#000000" d="M101.2949,-142.1266C104.5697,-132.692 107.699,-123.6768 110.3454,-116.0526"/>
<polygon fill="#000000" stroke="#000000" points="97.9568,-141.0702 97.9841,-151.665 104.5697,-143.3656 97.9568,-141.0702"/>
</g>
<!-- XmlCDATASection -->
<g id="node6" class="node">
<title>XmlCDATASection</title>
<g id="a_node6"><a xlink:href="XmlCDATASection.md" xlink:title="XmlCDATASection">
<polygon fill="#ffffff" stroke="transparent" points="71,-7 71,-29 165,-29 165,-7 71,-7"/>
<polygon fill="none" stroke="#000000" points="71,-7 71,-29 165,-29 165,-7 71,-7"/>
<text text-anchor="start" x="75.777" y="-15" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlCDATASection</text>
</a>
</g>
</g>
<!-- XmlText&#45;&gt;XmlCDATASection -->
<g id="edge5" class="edge">
<title>XmlText-&gt;XmlCDATASection</title>
<path fill="none" stroke="#000000" d="M118,-61.4591C118,-52.8855 118,-43.9333 118,-36.3975"/>
<polygon fill="#000000" stroke="#000000" points="114.5001,-61.6085 118,-71.6086 121.5001,-61.6086 114.5001,-61.6085"/>
</g>
</g>
</svg></div>

## 成员属性
        
### data
** String, 该节点包含的文本 **

```JavaScript
String XmlCharacterData.data;
```

--------------------------
### length
** Integer, 该节点包含的字符数 **

```JavaScript
readonly Integer XmlCharacterData.length;
```

--------------------------
### nodeType
** Integer, 返回节点的节点类型 **

```JavaScript
readonly Integer XmlCharacterData.nodeType;
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
readonly String XmlCharacterData.nodeName;
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
String XmlCharacterData.nodeValue;
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
readonly XmlDocument XmlCharacterData.ownerDocument;
```

--------------------------
### parentNode
** XmlNode, 可返回某节点的父节点 **

```JavaScript
readonly XmlNode XmlCharacterData.parentNode;
```

--------------------------
### childNodes
** [XmlNodeList](XmlNodeList.md), 返回指定节点的子节点的节点列表 **

```JavaScript
readonly XmlNodeList XmlCharacterData.childNodes;
```

--------------------------
### firstChild
** XmlNode, 返回节点的首个子节点 **

```JavaScript
readonly XmlNode XmlCharacterData.firstChild;
```

--------------------------
### lastChild
** XmlNode, 返回节点的最后一个子节点 **

```JavaScript
readonly XmlNode XmlCharacterData.lastChild;
```

--------------------------
### previousSibling
** XmlNode, 返回某节点之前紧跟的节点（处于同一树层级），如果没有此节点，那么该属性返回 null **

```JavaScript
readonly XmlNode XmlCharacterData.previousSibling;
```

--------------------------
### nextSibling
** XmlNode, 返回某个元素之后紧跟的节点（处于同一树层级中），如果无此节点，则属性返回 null **

```JavaScript
readonly XmlNode XmlCharacterData.nextSibling;
```

## 成员函数
        
### substringData
** 从节点中提取子串 **

```JavaScript
String XmlCharacterData.substringData(Integer offset,
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
XmlCharacterData.appendData(String arg);
```

调用参数:
* arg: String, 要附加到节点的字符串

--------------------------
### insertData
** 把字符串插入节点 **

```JavaScript
XmlCharacterData.insertData(Integer offset,
    String arg);
```

调用参数:
* offset: Integer, 要把字符串插入节点的字符位置
* arg: String, 要插入的字符串

--------------------------
### deleteData
** 从节点删除文本 **

```JavaScript
XmlCharacterData.deleteData(Integer offset,
    Integer count);
```

调用参数:
* offset: Integer, 要删除的第一个字符的位置
* count: Integer, 要删除的字符的数量

--------------------------
### replaceData
** 用指定的字符串替换节点的字符 **

```JavaScript
XmlCharacterData.replaceData(Integer offset,
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
Boolean XmlCharacterData.hasChildNodes();
```

返回结果:
* Boolean, 存在任何子节点时返回 true，否则返回 false

--------------------------
### normalize
** 合并相邻的 Text 节点并删除空的 Text 节点 **

```JavaScript
XmlCharacterData.normalize();
```

这个方法将遍历当前节点的所有子孙节点，通过删除空的 Text 节点，已经合并所有相邻的 Text 节点来规范化文档。该方法在进行节点的插入或删除操作后，对于简化文档树的结构很有用。

--------------------------
### cloneNode
** 创建指定的节点的精确拷贝 **

```JavaScript
XmlNode XmlCharacterData.cloneNode(Boolean deep = true);
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
String XmlCharacterData.lookupPrefix(String namespaceURI);
```

调用参数:
* namespaceURI: String, 指定匹配的命名空间 URI

返回结果:
* String, 返回匹配的前缀，未匹配到返回 null

--------------------------
### lookupNamespaceURI
** 返回在当前节点上匹配指定的前缀的命名空间 URI **

```JavaScript
String XmlCharacterData.lookupNamespaceURI(String prefix);
```

调用参数:
* prefix: String, 指定匹配的前缀

返回结果:
* String, 返回匹配的命名空间 URI，未匹配到返回 null

--------------------------
### insertBefore
** 在已有的子节点前插入一个新的子节点 **

```JavaScript
XmlNode XmlCharacterData.insertBefore(XmlNode newChild,
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
XmlNode XmlCharacterData.insertAfter(XmlNode newChild,
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
XmlNode XmlCharacterData.appendChild(XmlNode newChild);
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
XmlNode XmlCharacterData.replaceChild(XmlNode newChild,
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
XmlNode XmlCharacterData.removeChild(XmlNode oldChild);
```

调用参数:
* oldChild: XmlNode, 指定被删除的节点

返回结果:
* XmlNode, 如删除成功，此方法可返回被删除的节点，如失败，则返回 null

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
XmlCharacterData.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean XmlCharacterData.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String XmlCharacterData.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value XmlCharacterData.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value XmlCharacterData.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

