# 对象 UrlObject
URL 对象，实现 WHATWG URL 标准，用于解析、构造和操作 URL

UrlObject 提供了完整的 URL 处理功能，兼容现代 Web 标准 URL API。它支持 URL 的解析、构造、修改和格式化，并提供了丰富的属性和方法来操作 URL 的各个组成部分。

## 主要特性

- **标准兼容**: 实现 WHATWG URL 标准
- **Unicode 支持**: 完整支持国际化域名 (IDN) 和 Unicode 字符
- **查询参数**: 集成 [URLSearchParams](URLSearchParams.md) 提供强大的查询参数操作
- **路径处理**: 自动处理路径规范化和相对路径解析

## 创建 URL 对象

### 1. 使用字符串创建

```JavaScript
const url = require('url');

// Use full URL string
const myURL = new URL('https://user:pass@example.com:8080/path?query=value#hash');

// Use relative URL and base URL
const relativeURL = new URL('/api/users', 'https://example.com');
console.log(relativeURL.href); // 'https://example.com/api/users'
```

### 2. 使用对象构造

```JavaScript
const myURL = new URL({
    protocol: 'https:',
    hostname: 'example.com',
    port: '8080',
    pathname: '/api/data',
    search: '?format=json'
});
```

## URL 组成部分

一个完整的 URL 包含以下部分：
```
https://user:pass@example.com:8080/path/to/resource?query=value#fragment
\___/   \______/ \_________/ \__/\________________/\___________/ \______/
  |        |         |        |          |             |          |
protocol   auth      host     port     pathname        search      hash
         \___________________/
                  origin
```

## 常用方法

```JavaScript
const myURL = new URL('https://example.com/old-path');

// Parse URL string
const parsed = URL.parse('https://example.com/path');

// Check if URL is valid
const isValid = URL.canParse('https://example.com');

// Redirect to new path
const newURL = myURL.resolve('../new-path');
```

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    UrlObject [tooltip="UrlObject", fillcolor="lightgray", id="me", label="{UrlObject|new UrlObject()\l|parse()\lcanParse()\l|href\lprotocol\lslashes\lorigin\lauth\lusername\lpassword\lhost\lhostname\lport\lpath\lpathname\lsearch\lquery\lhash\lsearchParams\l|resolve()\l}"];

    object -> UrlObject [dir=back];
}
```

## 构造函数
        
### UrlObject
**使用参数对象构造 URL 对象**

```JavaScript
new UrlObject(Object args = {});
```

调用参数:
* args: Object, 构造参数对象，支持的字段有：protocol, slashes, username, password, hostname, port, pathname, query, hash

--------------------------
**使用 URL 字符串构造 URL 对象**

```JavaScript
new UrlObject(String url,
    String base = "");
```

调用参数:
* url: String, 要解析的 URL 字符串，可以是绝对 URL 或相对 URL
* base: String, 基础 URL 字符串，当 [url](../../module/ifs/url.md) 参数是相对 URL 时使用

## 静态函数
        
### parse
**解析 URL 字符串并返回 URL 对象，解析失败时返回 null**

```JavaScript
static UrlObject UrlObject.parse(String url,
    String base = "");
```

调用参数:
* url: String, 要解析的 URL 字符串
* base: String, 基础 URL 字符串，当 [url](../../module/ifs/url.md) 是相对 URL 时使用

返回结果:
* UrlObject, 成功时返回 UrlObject 对象，解析失败时返回 null

--------------------------
### canParse
**检查 URL 字符串是否可以成功解析**

```JavaScript
static Boolean UrlObject.canParse(String url,
    String base = "");
```

调用参数:
* url: String, 要检查的 URL 字符串
* base: String, 基础 URL 字符串，当 [url](../../module/ifs/url.md) 是相对 URL 时使用

返回结果:
* Boolean, 可以解析返回 true，否则返回 false

## 成员属性
        
### href
**String, 完整的 URL 字符串**

```JavaScript
String UrlObject.href;
```

获取或设置完整的 URL 字符串。设置此属性时会自动解析并更新其他属性。

--------------------------
### protocol
**String, URL 协议部分（包含冒号）**

```JavaScript
String UrlObject.protocol;
```

例如：'[http](../../module/ifs/http.md):', 'https:', 'ftp:', 'file:' 等

--------------------------
### slashes
**Boolean, 是否包含双斜杠**

```JavaScript
Boolean UrlObject.slashes;
```

指示 URL 是否使用双斜杠格式（如 [http](../../module/ifs/http.md)://）

--------------------------
### origin
**String, URL 的来源（协议 + 主机 + 端口）**

```JavaScript
readonly String UrlObject.origin;
```

只读属性，返回格式如：'https://example.com:8080'
对于非网络协议（如 file:）返回 'null'

--------------------------
### auth
**String, 认证信息（用户名:密码）**

```JavaScript
readonly String UrlObject.auth;
```

只读属性，返回格式如：'username:password'

--------------------------
### username
**String, 用户名部分**

```JavaScript
String UrlObject.username;
```

URL 中的用户名，用于 HTTP 基础认证

--------------------------
### password
**String, 密码部分**

```JavaScript
String UrlObject.password;
```

URL 中的密码，用于 HTTP 基础认证

--------------------------
### host
**String, 主机部分（主机名 + 端口）**

```JavaScript
String UrlObject.host;
```

包含主机名和端口号，格式如：'example.com:8080'

--------------------------
### hostname
**String, 主机名部分**

```JavaScript
String UrlObject.hostname;
```

不包含端口号的主机名，支持 IPv4、IPv6 和域名

--------------------------
### port
**String, 端口号**

```JavaScript
String UrlObject.port;
```

字符串形式的端口号，空字符串表示使用默认端口

--------------------------
### path
**String, 完整路径（路径 + 查询字符串）**

```JavaScript
readonly String UrlObject.path;
```

只读属性，包含 pathname 和 search，格式如：'/[path](../../module/ifs/path.md)?query=value'

--------------------------
### pathname
**String, URL 路径部分**

```JavaScript
String UrlObject.pathname;
```

URL 中的路径部分，总是以 '/' 开头

--------------------------
### search
**String, 查询字符串（包含问号）**

```JavaScript
String UrlObject.search;
```

格式如：'?key1=value1&key2=value2'，空查询时为空字符串

--------------------------
### query
**Value, 查询参数值**

```JavaScript
Value UrlObject.query;
```

可以是字符串或对象，设置对象时会自动序列化为查询字符串

--------------------------
### hash
**String, URL 片段标识符（包含井号）**

```JavaScript
String UrlObject.hash;
```

格式如：'#section'，没有片段时为空字符串

--------------------------
### searchParams
**[URLSearchParams](URLSearchParams.md), URL 查询参数对象**

```JavaScript
readonly URLSearchParams UrlObject.searchParams;
```

只读属性，返回 [URLSearchParams](URLSearchParams.md) 对象用于操作查询参数
与 URL 对象双向绑定，修改会自动更新 search 和 query 属性

## 成员函数
        
### resolve
**解析相对 URL 并返回新的绝对 URL 对象**

```JavaScript
UrlObject UrlObject.resolve(String url);
```

调用参数:
* url: String, 要解析的相对或绝对 URL 字符串

返回结果:
* UrlObject, 返回解析后的新 UrlObject 对象

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String UrlObject.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value UrlObject.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

