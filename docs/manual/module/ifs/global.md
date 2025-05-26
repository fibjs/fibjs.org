# 模块 global
全局对象，所有脚本均可以访问的基础对象

## 对象
        
### Buffer
**二进制数据缓存对象，用于 [io](io.md) 读写的数据处理，参见 [Buffer](../../object/ifs/Buffer.md) 对象。**

```JavaScript
Buffer global.Buffer;
```

--------------------------
### URL
**创建一个 [UrlObject](../../object/ifs/UrlObject.md) 请求对象，参见 [UrlObject](../../object/ifs/UrlObject.md)**

```JavaScript
UrlObject global.URL;
```

--------------------------
### TextDecoder
**[TextDecoder](../../object/ifs/TextDecoder.md) 解码对象，参见 [TextDecoder](../../object/ifs/TextDecoder.md) 对象。**

```JavaScript
TextDecoder global.TextDecoder;
```

--------------------------
### TextEncoder
**[TextEncoder](../../object/ifs/TextEncoder.md) 编码对象，参见 [TextEncoder](../../object/ifs/TextEncoder.md) 对象。**

```JavaScript
TextEncoder global.TextEncoder;
```

--------------------------
### AbortController
**控制器对象，用于在需要时中止一个或多个 Web 请求，参见 [AbortController](../../object/ifs/AbortController.md) 对象。**

```JavaScript
AbortController global.AbortController;
```

--------------------------
### CryptoKey
**[CryptoKey](../../object/ifs/CryptoKey.md) 类来表示对称或非对称密钥，每种密钥公开不同的功能**

```JavaScript
CryptoKey global.CryptoKey;
```

--------------------------
### console
**控制台访问对象**

```JavaScript
console global.console;
```

--------------------------
### process
**进程对象**

```JavaScript
process global.process;
```

--------------------------
### performance
**基础性能监控模块**

```JavaScript
performance global.performance;
```

--------------------------
### PerformanceObserver
**[PerformanceObserver](../../object/ifs/PerformanceObserver.md) 接口用于观察性能记录的接口**

```JavaScript
PerformanceObserver global.PerformanceObserver;
```

--------------------------
### crypto
**w3c [webcrypto](webcrypto.md) 标准的加密模块**

```JavaScript
webcrypto global.crypto;
```

## 静态函数
        
### run
**运行一个脚本**

```JavaScript
static global.run(String fname);
```

调用参数:
* fname: String, 指定要运行的脚本路径

--------------------------
### require
**加载一个模块并返回模块对象，更多信息参阅 @ref [module](module.md)**

```JavaScript
static Value global.require(String id);
```

调用参数:
* id: String, 指定要加载的模块名称

返回结果:
* Value, 返回加载模块的引出对象

require 可用于加载基础模块，文件模块。

基础模块是沙箱创建时初始化的模块，引用时只需传递相应的 id，比如 require("[net](net.md)")。

文件模块是用户自定义模块，引用时需传递以 ./ 或 ../ 开头的相对路径。文件模块支持 .js, .jsc 和 .[json](json.md) 文件。

文件模块也支持 package.json 格式，当模块为目录结构时，require 会先查询 package.json 中的 main，未发现则尝试加载路径下的 index.js, index.jsc 或 index.json。

若引用路径不是 ./ 或 ../ 开头，并且非基础模块，require 从当前模块所在路径下的 node_modules 查找，并上级目录递归。

基础流程如下:
```dot
   digraph{
       node [fontname = "Helvetica,sans-Serif", fontsize = 10];
       edge [fontname = "Helvetica,sans-Serif", fontsize = 10];

       start [label="start"];
       resolve [label="path.resolve" shape="rect"];
       search [label="recursive lookup\nnode_modules\nfrom the current path" shape="rect"];
       load [label="load" shape="rect"];
       end [label="end" shape="doublecircle"];

       is_native [label="is internal module?" shape="diamond"];
       is_mod [label="is module?" shape="diamond"];
       is_abs [label="is absolute?" shape="diamond"];
       has_file [label="module exists?" shape="diamond"];
       has_ext [label="module.js exists?" shape="diamond"];
       has_package [label="/package.json\nexists?" shape="diamond"];
       has_main [label="main exists?" shape="diamond"];
       has_index [label="index.js exists?" shape="diamond"];

       start -> is_native;
       is_native -> end [label="Yes"];
       is_native -> is_mod [label="No"];
       is_mod -> search [label="Yes"];
       search -> has_file;
       is_mod -> is_abs [label="No"];
       is_abs -> has_file [label="Yes"];
       is_abs -> resolve [label="No"];
       resolve -> has_file;
       has_file -> load [label="Yes"];
       has_file -> has_ext [label="No"];
       has_ext -> load [label="Yes"];
       has_ext -> has_package [label="No"];
       has_package -> has_main [label="Yes"];
       has_package -> has_index [label="No"];
       has_main -> load [label="Yes"];
       has_main -> has_index [label="No"];
       has_index -> load [label="Yes"];
       has_index -> end [label="No"];
       load -> end;
   }
```

--------------------------
### setTimeout
**在指定的时间后调用函数**

```JavaScript
static Timer global.setTimeout(Function callback,
    Number timeout = 1,
    ...args);
```

调用参数:
* callback: Function, 指定回调函数
* timeout: Number, 指定延时的时间，以毫秒为单位。超过 2^31 的话,立即执行。
* args: ..., 额外的参数，传入到指定的 callback 内，可选。

返回结果:
* [Timer](../../object/ifs/Timer.md), 返回定时器对象

--------------------------
### clearTimeout
**清除指定的定时器**

```JavaScript
static global.clearTimeout(Value t);
```

调用参数:
* t: Value, 指定要清除的定时器

--------------------------
### setInterval
**每间隔指定的时间后调用函数**

```JavaScript
static Timer global.setInterval(Function callback,
    Number timeout,
    ...args);
```

调用参数:
* callback: Function, 指定回调函数
* timeout: Number, 指定间隔的时间，以毫秒为单位。超过 2^31 的话,立即执行。
* args: ..., 额外的参数，传入到指定的 callback 内，可选。

返回结果:
* [Timer](../../object/ifs/Timer.md), 返回定时器对象

--------------------------
### clearInterval
**清除指定的定时器**

```JavaScript
static global.clearInterval(Value t);
```

调用参数:
* t: Value, 指定要清除的定时器

--------------------------
### setHrInterval
**每间隔指定的时间后调用函数，这是个高精度定时器，会主动打断正在运行的 JavaScript 脚本执行定时器**

```JavaScript
static Timer global.setHrInterval(Function callback,
    Number timeout,
    ...args);
```

调用参数:
* callback: Function, 指定回调函数
* timeout: Number, 指定间隔的时间，以毫秒为单位。超过 2^31 的话,立即执行。
* args: ..., 额外的参数，传入到指定的 callback 内，可选。

返回结果:
* [Timer](../../object/ifs/Timer.md), 返回定时器对象

由于 setHrInterval 的定时器会中断正在运行的代码执行回调，因此不要在回调函数内修改可能影响其它模块的数据，或者在回调中调用任何标记为 async 的 api 函数，否则将会产生不可预知的结果。例如：

```JavaScript
var timers = require('timers');

var cnt = 0;
timers.setHrInterval(() => {
    cnt++;
}, 100);

while (cnt < 10);

console.error("===============================> done");
```

这段代码中，第 8 行的循环并不会因为 cnt 的改变而结束，因为 JavaScript 在优化代码时会认定在这个循环过程中 cnt 不会被改变。

--------------------------
### clearHrInterval
**清除指定的定时器**

```JavaScript
static global.clearHrInterval(Value t);
```

调用参数:
* t: Value, 指定要清除的定时器

--------------------------
### setImmediate
**下一个空闲时间立即执行回调函数**

```JavaScript
static Timer global.setImmediate(Function callback,
    ...args);
```

调用参数:
* callback: Function, 指定回调函数
* args: ..., 额外的参数，传入到指定的 callback 内，可选。

返回结果:
* [Timer](../../object/ifs/Timer.md), 返回定时器对象

--------------------------
### clearImmediate
**清除指定的定时器**

```JavaScript
static global.clearImmediate(Value t);
```

调用参数:
* t: Value, 指定要清除的定时器

--------------------------
### btoa
**以 [base64](base64.md) 方式编码数据**

```JavaScript
static String global.btoa(Buffer data,
    Boolean url = false);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 要编码的数据
* url: Boolean, 指定是否使用 [url](url.md) 安全字符编码

返回结果:
* String, 返回编码的字符串

--------------------------
### atob
**以 [base64](base64.md) 方式解码字符串为二进制数据**

```JavaScript
static Buffer global.atob(String data);
```

调用参数:
* data: String, 要解码的字符串

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解码的二进制数据

## 静态属性
        
### global
**Object, 全局对象**

```JavaScript
static readonly Object new global;
```

--------------------------
### globalThis
**Object, 全局对象**

```JavaScript
static readonly Object global.globalThis;
```

