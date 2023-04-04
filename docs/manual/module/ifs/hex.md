# 模块 hex
hex 模块是内置模块，在编码和解码二进制数据和 ASCII 字符之间提供了十六进制的实现方式。`hex` 模块提供了编码和解码两种功能

使用编码方法，可以将任意二进制数据编码为十六进制的字符串。例如：

```JavaScript
const hex = require('hex')

const data = new Buffer([0x4e, 0x4f, 0x44, 0x45]) // [0x4e, 0x4f, 0x44, 0x45] => 'NODE'
const encodedData = hex.encode(data)
console.log(encodedData) // "4e4f4445"
```

使用解码方法，可以将十六进制的字符串解码为原来的二进制数据。例如：

```JavaScript
const hex = require('hex')

const encodedData = '4e4f4445' // 'NODE'
const decodedData = hex.decode(encodedData)
console.log(decodedData) // [0x4e, 0x4f, 0x44, 0x45]
```

可以看到，`hex` 是非常简单的编码和解码模块，它适用于一些简单的二进制数据和字符串之间的转换需求。

## 静态函数
        
### encode
**以 hex 方式编码数据**

```JavaScript
static String hex.encode(Buffer data);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 要编码的数据

返回结果:
* String, 返回编码的字符串

--------------------------
### decode
**以 hex 方式解码字符串为二进制数据**

```JavaScript
static Buffer hex.decode(String data);
```

调用参数:
* data: String, 要解码的字符串

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解码的二进制数据

