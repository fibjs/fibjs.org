# Module xml
The XML/HTML DOM toolkit of fibjs: it parses XML and HTML text into an

[XmlDocument](../../object/ifs/XmlDocument.md) tree, exposes the node classes of that tree and serializes nodes back to markup

The [module](module.md) is the entry point of the document model. Its members fall into these groups:

- parsing: `parse` builds a document from a string or [Buffer](../../object/ifs/Buffer.md) in XML or HTML mode; the
  `DOMParser` interface wraps the same machinery in the standard parseFromString form;
- serialization: `serialize` (and every node's own toString) produces markup; the
  `XMLSerializer` interface is the standard wrapper;
- type access: `Document` is the [XmlDocument](../../object/ifs/XmlDocument.md) class itself (also available as the [global](global.md)
  `XMLDocument`), so documents can be constructed and recognized with instanceof;
- node type [constants](constants.md): `ELEMENT_NODE`, `ATTRIBUTE_NODE`, `TEXT_NODE`,
  `CDATA_SECTION_NODE`, `ENTITY_REFERENCE_NODE`, `ENTITY_NODE`,
  `PROCESSING_INSTRUCTION_NODE`, `COMMENT_NODE`, `DOCUMENT_NODE`, `DOCUMENT_TYPE_NODE`,
  `DOCUMENT_FRAGMENT_NODE` and `NOTATION_NODE`, for use with [XmlNode.nodeType](../../object/ifs/XmlNode.md#nodeType).

Concepts:

- **The document model**: parsing produces an [XmlDocument](../../object/ifs/XmlDocument.md) whose children form a tree of
  nodes. Every node implements the [XmlNode](../../object/ifs/XmlNode.md) tree protocol (navigation, mutation, cloning,
  comparison); the concrete classes are [XmlElement](../../object/ifs/XmlElement.md) (elements and their attributes),
  [XmlText](../../object/ifs/XmlText.md), [XmlCDATASection](../../object/ifs/XmlCDATASection.md), [XmlComment](../../object/ifs/XmlComment.md), [XmlProcessingInstruction](../../object/ifs/XmlProcessingInstruction.md), [XmlDocumentType](../../object/ifs/XmlDocumentType.md) and
  [XmlDocumentFragment](../../object/ifs/XmlDocumentFragment.md). [XmlAttr](../../object/ifs/XmlAttr.md) (attribute nodes) is a separate interface: it has name and
  value but is not part of the tree. [XmlCharacterData](../../object/ifs/XmlCharacterData.md) groups the text-like nodes. See the
  [XmlNode](../../object/ifs/XmlNode.md) class comment for the node type table and the tree rules, and the [XmlElement](../../object/ifs/XmlElement.md) /
  [XmlDocument](../../object/ifs/XmlDocument.md) class comments for the element and document APIs.
- **Parsing modes**: `text/xml` (the default) is strict, case-sensitive and reports syntax
  errors as Error 20024 with the line and column; `text/html` uses a tolerant HTML tree
  builder with upper-cased parsed tag names, case-insensitive tag matching and automatic
  html/head/body wrapping of fragments. The mode is chosen per document and cannot be
  changed later. A string source is taken as utf8; a [Buffer](../../object/ifs/Buffer.md) keeps its bytes and (in HTML
  mode) has its charset detected from a meta tag, which is what [XmlDocument.inputEncoding](../../object/ifs/XmlDocument.md#inputEncoding)
  reports.
- **Parse limits**: parse and load accept `maxElementDepth` (default 1000) and
  `maxNodeCount` (default 1000000, counting elements, attributes, text, comments, CDATA,
  processing instructions and the doctype). A value of 0, a negative value or Infinity
  disables the limit; a non-number throws a TypeError (20004), and exceeding a limit throws
  an Error (20024).
- **Serialization**: `serialize(node)` is `node.toString()`; it works on any node - a
  document, an element, a text or comment node, a fragment - and returns the markup for
  that node, escaping text and attribute values. XML documents close empty elements as
  `<tag/>` and emit the declaration only when the document carries declaration metadata;
  HTML documents use HTML closing rules. See the [XmlElement](../../object/ifs/XmlElement.md) and [XmlDocument](../../object/ifs/XmlDocument.md) class comments.
- **Events**: DOM nodes are not EventTargets and the [module](module.md) dispatches no events; build
  event objects with the [DOMEvent](../../object/ifs/DOMEvent.md) interface (the [global](global.md) [Event](../../object/ifs/Event.md) class) and see [DOMEvent](../../object/ifs/DOMEvent.md) for
  the standalone event model.

Import:

```JavaScript
const xml = require('xml');
```

Example 1 - parse an XML string and walk the tree:

```JavaScript
const xml = require('xml');

const doc = xml.parse('<?xml version="1.0"?><library><book id="1">XML</book></library>');
const library = doc.documentElement;

console.log(library.nodeName); // library
console.log(doc.getElementsByTagName('book').length); // 1
console.log(doc.getElementById('1').textContent); // XML
console.log(xml.serialize(library)); // <library><book id="1">XML</book></library>
```

Example 2 - parse HTML and query it:

```JavaScript
const xml = require('xml');

const doc = xml.parse('<div class="m"><p>one</p><p>two</p></div>', 'text/html');
const ps = doc.querySelectorAll('p');

console.log(doc.documentElement.nodeName); // HTML
console.log(doc.body.firstChild.tagName); // DIV
console.log(ps.length); // 2
console.log(ps[1].textContent); // two
```

Example 3 - build a document from scratch and serialize it:

```JavaScript
const xml = require('xml');

const doc = new xml.Document();
const root = doc.createElement('config');
root.setAttribute('version', '1');
root.appendChild(doc.createElement('entry')).textContent = 'a';
doc.appendChild(root);

console.log(doc.toString()); // <config version="1"><entry>a</entry></config>
doc.xmlVersion = '1.0';
console.log(doc.toString()); // <?xml version="1.0"?><config version="1">...
```

Notes:

- fibjs does not export an [XmlNode](../../object/ifs/XmlNode.md) class or a [global](global.md) of that name; nodes are always
  obtained through a document (see [XmlNode](../../object/ifs/XmlNode.md) for the sources).
- Tolerant HTML parsing never throws on ordinary malformed markup, but it still enforces
  the parse limits and rejects input whose structure cannot be built within them.
- The serialization of a parsed HTML document reflects the parser's normalized tree
  (upper-cased tag names, no whitespace added), not the exact input text.

## Objects
        
### Document
**The [XmlDocument](../../object/ifs/XmlDocument.md) class itself, exposed as [xml.Document](xml.md#Document)**

```JavaScript
XmlDocument xml.Document;
```

It is the same constructor as the [global](global.md) XMLDocument, so `new [xml.Document](xml.md#Document)([type])` and
`new XMLDocument([type])` are equivalent; use it to construct an empty document or with
`instanceof` to recognize one. See the [XmlDocument](../../object/ifs/XmlDocument.md) interface for the members.

--------------------------
### DOMParser
**The [DOMParser](../../object/ifs/DOMParser.md) class [object](../../object/ifs/object.md), used to parse a string into a DOM document**

```JavaScript
DOMParser xml.DOMParser;
```

See the [DOMParser](../../object/ifs/DOMParser.md) interface for parseFromString and the supported MIME [types](types.md).

## Static Methods
        
### parse
**Parses XML/HTML data and returns a new [XmlDocument](../../object/ifs/XmlDocument.md)**

```JavaScript
static XmlDocument xml.parse(Buffer | String source,
    String type = "text/xml",
    Object options = {});
```

Parameters:
* source: [Buffer](../../object/ifs/Buffer.md) | String, the XML or HTML data to parse
* type: String, the MIME type selecting the mode, "text/xml" or "text/html"
* options: Object, the parse limits, default { maxElementDepth: 1000, maxNodeCount: 1000000 }

Returns:
* [XmlDocument](../../object/ifs/XmlDocument.md), returns the new [XmlDocument](../../object/ifs/XmlDocument.md)

source may be a string (encoded as utf8) or a [Buffer](../../object/ifs/Buffer.md). The type selects the parsing mode
and is case-sensitive: `text/xml` (the default) is strict and reports syntax errors as
an Error (20024) carrying the line and column; `text/html` uses the tolerant HTML tree
builder, wraps fragments in html/head/body and upper-cases the parsed tag names. Any
other MIME type throws an Error (20004). A [Buffer](../../object/ifs/Buffer.md) in HTML mode has its charset detected
from a meta tag before parsing (see [XmlDocument.inputEncoding](../../object/ifs/XmlDocument.md#inputEncoding)). Every call returns a
fresh document; nothing is cached.

options supports the following parse limits (0, a negative value or Infinity disables a
limit):

```JavaScript
// fragment: options
({
    "maxElementDepth": 1000, // maximum element nesting depth
    "maxNodeCount": 1000000 // maximum number of nodes and attributes
})
```

A non-number option throws a TypeError (20004); exceeding a limit throws an Error
(20024). A source that is neither a string nor a [Buffer](../../object/ifs/Buffer.md) throws a TypeError (20005).

```JavaScript
const xml = require('xml');

const doc = xml.parse('<a><b>1</b></a>');
console.log(doc.documentElement.firstChild.textContent); // 1

const html = xml.parse('<p>x', 'text/html');
console.log(html.body.textContent); // x
```

--------------------------
### serialize
**Serializes a node to markup**

```JavaScript
static String xml.serialize(XmlNode node);
```

Parameters:
* node: [XmlNode](../../object/ifs/XmlNode.md), the node to serialize

Returns:
* String, returns the serialized markup

Equivalent to the node's own toString(); it accepts any node - a document, an element,
a text, CDATA, comment or processing-instruction node, or a document fragment - and
returns its markup with text and attribute values escaped. An XML document emits its
declaration only when it carries declaration metadata, and closes empty elements as
`<tag/>`; an HTML document follows the HTML closing rules. See the [XmlElement](../../object/ifs/XmlElement.md) and
[XmlDocument](../../object/ifs/XmlDocument.md) class comments for the mode differences, and the [XMLSerializer](../../object/ifs/XMLSerializer.md) interface for
the standard wrapper.

```JavaScript
const xml = require('xml');

const doc = xml.parse('<r x="1"><t>text</t></r>');
console.log(xml.serialize(doc.documentElement)); // <r x="1"><t>text</t></r>
console.log(xml.serialize(doc.documentElement.firstChild)); // <t>text</t>
console.log(xml.serialize(doc)); // <r x="1"><t>text</t></r>
```

## Constants
        
### ELEMENT_NODE
**The nodeType property constant of [XmlNode](../../object/ifs/XmlNode.md), indicating that the node is an**

```JavaScript
const xml.ELEMENT_NODE = 1;
```

[XmlElement](../../object/ifs/XmlElement.md) [object](../../object/ifs/object.md)

Element nodes are the only type that can carry attributes and the main handle used to
navigate and query a document.

--------------------------
### ATTRIBUTE_NODE
**The nodeType property constant of [XmlNode](../../object/ifs/XmlNode.md), indicating that the node is an**

```JavaScript
const xml.ATTRIBUTE_NODE = 2;
```

[XmlAttr](../../object/ifs/XmlAttr.md) [object](../../object/ifs/object.md)

Attributes are not [XmlNode](../../object/ifs/XmlNode.md) members: [XmlAttr](../../object/ifs/XmlAttr.md) has name and value but no nodeType, and it
is never part of the child list. The constant is declared for completeness.

--------------------------
### TEXT_NODE
**The nodeType property constant of [XmlNode](../../object/ifs/XmlNode.md), indicating that the node is an**

```JavaScript
const xml.TEXT_NODE = 3;
```

[XmlText](../../object/ifs/XmlText.md) [object](../../object/ifs/object.md)

--------------------------
### CDATA_SECTION_NODE
**The nodeType property constant of [XmlNode](../../object/ifs/XmlNode.md), indicating that the node is an**

```JavaScript
const xml.CDATA_SECTION_NODE = 4;
```

[XmlCDATASection](../../object/ifs/XmlCDATASection.md) [object](../../object/ifs/object.md)

--------------------------
### ENTITY_REFERENCE_NODE
**The nodeType property constant of [XmlNode](../../object/ifs/XmlNode.md), indicating that the node is an**

```JavaScript
const xml.ENTITY_REFERENCE_NODE = 5;
```

EntityReference [object](../../object/ifs/object.md)

Entity references are not implemented in fibjs; the constant is declared for
completeness and no node reports it.

--------------------------
### ENTITY_NODE
**The nodeType property constant of [XmlNode](../../object/ifs/XmlNode.md), indicating that the node is an**

```JavaScript
const xml.ENTITY_NODE = 6;
```

Entity [object](../../object/ifs/object.md)

Entities are not implemented in fibjs; the constant is declared for completeness and no
node reports it.

--------------------------
### PROCESSING_INSTRUCTION_NODE
**The nodeType property constant of [XmlNode](../../object/ifs/XmlNode.md), indicating that the node is an**

```JavaScript
const xml.PROCESSING_INSTRUCTION_NODE = 7;
```

[XmlProcessingInstruction](../../object/ifs/XmlProcessingInstruction.md) [object](../../object/ifs/object.md)

--------------------------
### COMMENT_NODE
**The nodeType property constant of [XmlNode](../../object/ifs/XmlNode.md), indicating that the node is an**

```JavaScript
const xml.COMMENT_NODE = 8;
```

[XmlComment](../../object/ifs/XmlComment.md) [object](../../object/ifs/object.md)

--------------------------
### DOCUMENT_NODE
**The nodeType property constant of [XmlNode](../../object/ifs/XmlNode.md), indicating that the node is an**

```JavaScript
const xml.DOCUMENT_NODE = 9;
```

[XmlDocument](../../object/ifs/XmlDocument.md) [object](../../object/ifs/object.md)

--------------------------
### DOCUMENT_TYPE_NODE
**The nodeType property constant of [XmlNode](../../object/ifs/XmlNode.md), indicating that the node is an**

```JavaScript
const xml.DOCUMENT_TYPE_NODE = 10;
```

[XmlDocumentType](../../object/ifs/XmlDocumentType.md) [object](../../object/ifs/object.md)

A document holds at most one doctype.

--------------------------
### DOCUMENT_FRAGMENT_NODE
**The nodeType property constant of [XmlNode](../../object/ifs/XmlNode.md), indicating that the node is an**

```JavaScript
const xml.DOCUMENT_FRAGMENT_NODE = 11;
```

[XmlDocumentFragment](../../object/ifs/XmlDocumentFragment.md) [object](../../object/ifs/object.md)

--------------------------
### NOTATION_NODE
**The nodeType property constant of [XmlNode](../../object/ifs/XmlNode.md), indicating that the node is a**

```JavaScript
const xml.NOTATION_NODE = 12;
```

Notation [object](../../object/ifs/object.md)

Notations are not implemented in fibjs; the constant is declared for completeness and
no node reports it.

