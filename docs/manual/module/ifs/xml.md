# 模块 xml
xml 处理模块

## 函数
        
### parse
解析 xml/html 文本，并创建 XmlDocument 对象，不支持多语种
```JavaScript
XmlDocument xml.parse(String source,
                String type = "text/xml");
```

调用参数:
* source - 指定需要解析的 xml/html 文本
* type - 指定文本类型，缺省为 text/xml，也可指定为 text/html

返回结果:
* 返回创建的 XmlDocument 对象

--------------------------
解析 xml/html，并创建 XmlDocument 对象，解析时会根据指定的语种转换
```JavaScript
XmlDocument xml.parse(Buffer source,
                String type = "text/xml");
```

调用参数:
* source - 指定需要解析的 xml/html 二进制数据
* type - 指定文本类型，缺省为 text/xml，也可指定为 text/html

返回结果:
* 返回创建的 XmlDocument 对象

### serialize
序列化 XmlNode 为字符串
```JavaScript
String xml.serialize(XmlNode node);
```

调用参数:
* node - 指定需要序列化的 XmlNode

返回结果:
* 返回序列化的字符串

## 常量
        
### ELEMENT_NODE
XmlNode 的 nodeType 属性常量，表示节点为 XmlElement 对象
```JavaScript
xml.ELEMENT_NODE;
```

### ATTRIBUTE_NODE
XmlNode 的 nodeType 属性常量，表示节点为 XmlAttr 对象
```JavaScript
xml.ATTRIBUTE_NODE;
```

### TEXT_NODE
XmlNode 的 nodeType 属性常量，表示节点为 XmlText 对象
```JavaScript
xml.TEXT_NODE;
```

### CDATA_SECTION_NODE
XmlNode 的 nodeType 属性常量，表示节点为 XmlCDATASection 对象
```JavaScript
xml.CDATA_SECTION_NODE;
```

### PROCESSING_INSTRUCTION_NODE
XmlNode 的 nodeType 属性常量，表示节点为 XmlProcessingInstruction 对象
```JavaScript
xml.PROCESSING_INSTRUCTION_NODE;
```

### COMMENT_NODE
XmlNode 的 nodeType 属性常量，表示节点为 XmlComment 对象
```JavaScript
xml.COMMENT_NODE;
```

### DOCUMENT_NODE
XmlNode 的 nodeType 属性常量，表示节点为 XmlDocument 对象
```JavaScript
xml.DOCUMENT_NODE;
```

### DOCUMENT_TYPE_NODE
XmlNode 的 nodeType 属性常量，表示节点为 XmlDocumentType 对象
```JavaScript
xml.DOCUMENT_TYPE_NODE;
```

