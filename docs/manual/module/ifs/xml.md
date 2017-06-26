# 模块 xml
xml 处理模块

## 对象
        
### Document
**xml 文档对象，参见 [XmlDocument](../../object/ifs/XmlDocument.md) 对象**

```JavaScript
XmlDocument xml.Document;
```

## 静态函数
        
### parse
**解析 xml/html 文本，并创建 [XmlDocument](../../object/ifs/XmlDocument.md) 对象，不支持多语种**

```JavaScript
static XmlDocument xml.parse(String source,
    String type = "text/xml");
```

调用参数:
* source: String, 指定需要解析的 xml/html 文本
* type: String, 指定文本类型，缺省为 text/xml，也可指定为 text/html

返回结果:
* [XmlDocument](../../object/ifs/XmlDocument.md), 返回创建的 [XmlDocument](../../object/ifs/XmlDocument.md) 对象

--------------------------
**解析 xml/html，并创建 [XmlDocument](../../object/ifs/XmlDocument.md) 对象，解析时会根据指定的语种转换**

```JavaScript
static XmlDocument xml.parse(Buffer source,
    String type = "text/xml");
```

调用参数:
* source: [Buffer](../../object/ifs/Buffer.md), 指定需要解析的 xml/html 二进制数据
* type: String, 指定文本类型，缺省为 text/xml，也可指定为 text/html

返回结果:
* [XmlDocument](../../object/ifs/XmlDocument.md), 返回创建的 [XmlDocument](../../object/ifs/XmlDocument.md) 对象

--------------------------
### serialize
**序列化 [XmlNode](../../object/ifs/XmlNode.md) 为字符串**

```JavaScript
static String xml.serialize(XmlNode node);
```

调用参数:
* node: [XmlNode](../../object/ifs/XmlNode.md), 指定需要序列化的 [XmlNode](../../object/ifs/XmlNode.md)

返回结果:
* String, 返回序列化的字符串

## 常量
        
### ELEMENT_NODE
**[XmlNode](../../object/ifs/XmlNode.md) 的 nodeType 属性常量，表示节点为 [XmlElement](../../object/ifs/XmlElement.md) 对象**

```JavaScript
const xml.ELEMENT_NODE = 1;
```

--------------------------
### ATTRIBUTE_NODE
**[XmlNode](../../object/ifs/XmlNode.md) 的 nodeType 属性常量，表示节点为 [XmlAttr](../../object/ifs/XmlAttr.md) 对象**

```JavaScript
const xml.ATTRIBUTE_NODE = 2;
```

--------------------------
### TEXT_NODE
**[XmlNode](../../object/ifs/XmlNode.md) 的 nodeType 属性常量，表示节点为 [XmlText](../../object/ifs/XmlText.md) 对象**

```JavaScript
const xml.TEXT_NODE = 3;
```

--------------------------
### CDATA_SECTION_NODE
**[XmlNode](../../object/ifs/XmlNode.md) 的 nodeType 属性常量，表示节点为 [XmlCDATASection](../../object/ifs/XmlCDATASection.md) 对象**

```JavaScript
const xml.CDATA_SECTION_NODE = 4;
```

--------------------------
### PROCESSING_INSTRUCTION_NODE
**[XmlNode](../../object/ifs/XmlNode.md) 的 nodeType 属性常量，表示节点为 [XmlProcessingInstruction](../../object/ifs/XmlProcessingInstruction.md) 对象**

```JavaScript
const xml.PROCESSING_INSTRUCTION_NODE = 7;
```

--------------------------
### COMMENT_NODE
**[XmlNode](../../object/ifs/XmlNode.md) 的 nodeType 属性常量，表示节点为 [XmlComment](../../object/ifs/XmlComment.md) 对象**

```JavaScript
const xml.COMMENT_NODE = 8;
```

--------------------------
### DOCUMENT_NODE
**[XmlNode](../../object/ifs/XmlNode.md) 的 nodeType 属性常量，表示节点为 [XmlDocument](../../object/ifs/XmlDocument.md) 对象**

```JavaScript
const xml.DOCUMENT_NODE = 9;
```

--------------------------
### DOCUMENT_TYPE_NODE
**[XmlNode](../../object/ifs/XmlNode.md) 的 nodeType 属性常量，表示节点为 [XmlDocumentType](../../object/ifs/XmlDocumentType.md) 对象**

```JavaScript
const xml.DOCUMENT_TYPE_NODE = 10;
```

