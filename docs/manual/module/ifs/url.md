# 模块 url
URL 处理模块，提供 URL 解析、格式化、文件路径转换和国际化域名处理等功能

url 模块实现了完整的 URL 处理功能，兼容 WHATWG URL 标准与传统 URL API。
它提供了 URL 对象、[URLSearchParams](../../object/ifs/URLSearchParams.md) 对象以及各种实用的 URL 操作函数。

## 主要功能

- **URL 解析和格式化**: 支持解析和格式化各种 URL 格式
- **文件 URL 处理**: 提供文件路径与 file:// URL 之间的转换
- **国际化域名**: 支持 ASCII 和 Unicode 域名之间的转换
- **查询参数处理**: 集成 [URLSearchParams](../../object/ifs/URLSearchParams.md) 提供强大的查询参数操作
- **相对路径解析**: 支持相对 URL 的解析和合并

## 基本用法

### 1. 创建和操作 URL 对象

```JavaScript
const {
    URL,
    URLSearchParams
} = require('url');

// Create URL object
const myURL = new URL('https://example.com:8080/path?key=value#hash');

// Access URL parts
console.log(myURL.protocol); // 'https:'
console.log(myURL.hostname); // 'example.com'
console.log(myURL.port); // '8080'
console.log(myURL.pathname); // '/path'
console.log(myURL.search); // '?key=value'
console.log(myURL.hash); // '#hash'

// Modify URL
myURL.pathname = '/new-path';
myURL.searchParams.set('new-key', 'new-value');
console.log(myURL.href); // 'https://example.com:8080/new-path?key=value&new-key=new-value#hash'
```

### 2. 传统 API 兼容

```JavaScript
const url = require('url');

// Parse URL string
const parsed = url.parse('https://example.com/path?key=value#hash');
console.log(parsed.hostname); // 'example.com'

// Format URL object
const formatted = url.format({
    protocol: 'https:',
    hostname: 'example.com',
    pathname: '/path'
});
console.log(formatted); // 'https://example.com/path'

// Resolve relative URL
const resolved = url.resolve('https://example.com/foo/', '../bar');
console.log(resolved); // 'https://example.com/bar'
```

### 3. 文件 URL 处理

```JavaScript
const url = require('url');

// Convert path to file URL
const fileURL = url.pathToFileURL('/path/to/file.txt');
console.log(fileURL.href); // 'file:///path/to/file.txt'

// Convert file URL to path
const filePath = url.fileURLToPath('file:///path/to/file.txt');
console.log(filePath); // '/path/to/file.txt'
```

### 4. 国际化域名处理

```JavaScript
const url = require('url');

// Convert Unicode domain to ASCII
const ascii = url.domainToASCII('测试.com');
console.log(ascii); // 'xn--0zwm56d.com'

// Convert ASCII domain to Unicode
const unicode = url.domainToUnicode('xn--0zwm56d.com');
console.log(unicode); // '测试.com'
```

## 对象
        
### URL
**创建 URL 对象，参见 [UrlObject](../../object/ifs/UrlObject.md)**

```JavaScript
UrlObject url.URL;
```

返回结果:
* 新的 [UrlObject](../../object/ifs/UrlObject.md) 实例

--------------------------
### URLSearchParams
**创建 [URLSearchParams](../../object/ifs/URLSearchParams.md) 对象，参见 [URLSearchParams](../../object/ifs/URLSearchParams.md)**

```JavaScript
URLSearchParams url.URLSearchParams;
```

返回结果:
* 新的 [URLSearchParams](../../object/ifs/URLSearchParams.md) 实例

## 静态函数
        
### format
**将 URL 字符串格式化为标准的 URL 字符串**

```JavaScript
static String url.format(String href);
```

调用参数:
* href: String, URL 字符串

返回结果:
* String, 格式化后的 URL 字符串

--------------------------
**使用 URL 组件对象构造 URL 字符串**

```JavaScript
static String url.format(Object args);
```

调用参数:
* args: Object, URL 组件对象，支持的字段有：protocol, slashes, username, password, hostname, port, pathname, query, hash

返回结果:
* String, 构造的 URL 字符串

--------------------------
**格式化 URL 对象为字符串，支持格式化选项**

```JavaScript
static String url.format(UrlObject urlObject,
    Object options = {});
```

调用参数:
* urlObject: [UrlObject](../../object/ifs/UrlObject.md), 要格式化的 URL 对象
* options: Object, 格式化选项，支持的字段有：fragment（是否包含片段）, unicode（是否使用 Unicode 显示域名）, auth（是否包含认证信息）

返回结果:
* String, 格式化后的 URL 字符串

--------------------------
### parse
**解析 URL 字符串为 URL 对象（传统 API）**

```JavaScript
static UrlObject url.parse(String url,
    Boolean parseQueryString = false,
    Boolean slashesDenoteHost = false);
```

调用参数:
* url: String, 要解析的 URL 字符串
* parseQueryString: Boolean, 是否将查询字符串解析为对象，默认为 false
* slashesDenoteHost: Boolean, 是否将 '//' 后到下一个 '/' 前的字符串解析为主机，默认为 false

返回结果:
* [UrlObject](../../object/ifs/UrlObject.md), 解析后的 [UrlObject](../../object/ifs/UrlObject.md) 对象

--------------------------
### resolve
**解析相对 URL 并合并为绝对 URL**

```JavaScript
static String url.resolve(String _from,
    String to);
```

调用参数:
* _from: String, 基础 URL 字符串
* to: String, 要解析的相对 URL 字符串

返回结果:
* String, 合并后的绝对 URL 字符串

--------------------------
### fileURLToPath
**将文件 URL 对象转换为平台相关的文件路径**

```JavaScript
static String url.fileURLToPath(UrlObject url,
    Object options = {});
```

调用参数:
* url: [UrlObject](../../object/ifs/UrlObject.md), 文件 URL 对象（必须是 file: 协议）
* options: Object, 转换选项，支持 windows 字段指定是否强制使用 Windows 路径格式

返回结果:
* String, 转换后的文件路径字符串

--------------------------
**将文件 URL 字符串转换为平台相关的文件路径**

```JavaScript
static String url.fileURLToPath(String url,
    Object options = {});
```

调用参数:
* url: String, 文件 URL 字符串（必须是 file: 协议）
* options: Object, 转换选项，支持 windows 字段指定是否强制使用 Windows 路径格式

返回结果:
* String, 转换后的文件路径字符串

--------------------------
### pathToFileURL
**将文件路径转换为文件 URL 对象**

```JavaScript
static UrlObject url.pathToFileURL(String path,
    Object options = {});
```

调用参数:
* path: String, 要转换的文件路径
* options: Object, 转换选项，支持 windows 字段指定路径是否为 Windows 格式

返回结果:
* [UrlObject](../../object/ifs/UrlObject.md), 转换后的文件 URL 对象

--------------------------
### domainToASCII
**将国际化域名转换为 ASCII 编码（Punycode）**

```JavaScript
static String url.domainToASCII(String domain);
```

调用参数:
* domain: String, 要转换的域名（可包含 Unicode 字符）

返回结果:
* String, ASCII 编码的域名

--------------------------
### domainToUnicode
**将 ASCII 编码的域名转换为 Unicode 显示格式**

```JavaScript
static String url.domainToUnicode(String domain);
```

调用参数:
* domain: String, 要转换的 ASCII 域名

返回结果:
* String, Unicode 格式的域名

