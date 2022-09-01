# 模块 encoding
编码与解码模块，用于处理不同的数据编码格式与二进制之间的转换

引用方式：

```JavaScript
var encoding = require('encoding');
```

## 对象
        
### base32
**[base32](base32.md) 编码与解码模块**

```JavaScript
base32 encoding.base32;
```

--------------------------
### base64
**[base64](base64.md) 编码与解码模块**

```JavaScript
base64 encoding.base64;
```

--------------------------
### base58
**[base58](base58.md) 编码与解码模块**

```JavaScript
base58 encoding.base58;
```

--------------------------
### hex
**[hex](hex.md) 编码与解码模块**

```JavaScript
hex encoding.hex;
```

--------------------------
### multibase
**[multibase](multibase.md) 编码与解码模块**

```JavaScript
multibase encoding.multibase;
```

--------------------------
### iconv
**[iconv](iconv.md) 编码与解码模块**

```JavaScript
iconv encoding.iconv;
```

--------------------------
### json
**[json](json.md) 编码与解码模块**

```JavaScript
json encoding.json;
```

--------------------------
### msgpack
**[msgpack](msgpack.md) 编码与解码模块**

```JavaScript
msgpack encoding.msgpack;
```

## 静态函数
        
### jsstr
**将字符串编码为 javascript 转义字符串，用以在 javascript 代码中包含文本**

```JavaScript
static String encoding.jsstr(String str,
    Boolean json = false);
```

调用参数:
* str: String, 要编码的字符串
* json: Boolean, 是否生成[json](json.md)兼容字符串

返回结果:
* String, 返回编码的字符串

--------------------------
### encodeURI
**[url](url.md) 字符串安全编码**

```JavaScript
static String encoding.encodeURI(String url);
```

调用参数:
* url: String, 要编码的 [url](url.md)

返回结果:
* String, 返回编码的字符串

--------------------------
### encodeURIComponent
**[url](url.md) 部件字符串安全编码**

```JavaScript
static String encoding.encodeURIComponent(String url);
```

调用参数:
* url: String, 要编码的 [url](url.md)

返回结果:
* String, 返回编码的字符串

--------------------------
### decodeURI
**[url](url.md) 安全字符串解码**

```JavaScript
static String encoding.decodeURI(String url);
```

调用参数:
* url: String, 要解码的 [url](url.md)

返回结果:
* String, 返回解码的字符串

