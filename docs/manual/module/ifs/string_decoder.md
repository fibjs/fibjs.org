# 模块 string_decoder
解码 [Buffer](../../object/ifs/Buffer.md) 到字符串

使用方法：

```JavaScript
const {
    StringDecoder
} = require('string_decoder');
const decoder = new StringDecoder('utf8');

const cent = Buffer.from([0xC2, 0xA2]);
console.log(decoder.write(cent));

const euro = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro));
```

## 对象
        
### StringDecoder
**创建一个解码对象，参见 [StringDecoder](../../object/ifs/StringDecoder.md)**

```JavaScript
StringDecoder string_decoder.StringDecoder;
```

