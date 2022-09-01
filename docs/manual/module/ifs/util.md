# 模块 util
常用工具模块

## 对象
        
### LruCache
**LRU(least recently used) 缓存对象，参见 [LruCache](../../object/ifs/LruCache.md) 对象。**

```JavaScript
LruCache util.LruCache;
```

--------------------------
### TextDecoder
**[TextDecoder](../../object/ifs/TextDecoder.md) 解码对象，参见 [TextDecoder](../../object/ifs/TextDecoder.md) 对象。**

```JavaScript
TextDecoder util.TextDecoder;
```

--------------------------
### TextEncoder
**[TextEncoder](../../object/ifs/TextEncoder.md) 编码对象，参见 [TextEncoder](../../object/ifs/TextEncoder.md) 对象。**

```JavaScript
TextEncoder util.TextEncoder;
```

## 静态函数
        
### format
**按照指定的格式格式化变量**

```JavaScript
static String util.format(String fmt,
    ...args);
```

调用参数:
* fmt: String, 格式化字符串
* args: ..., 可选参数列表

返回结果:
* String, 返回格式化后的字符串

--------------------------
**格式格式化变量**

```JavaScript
static String util.format(...args);
```

调用参数:
* args: ..., 可选参数列表

返回结果:
* String, 返回格式化后的字符串

--------------------------
### inherits
**从一个构造函数 constructor 继承原型函数到另一个。构造函数的原型将被设置为一个新的从超类（superConstructor）创建的对象。**

```JavaScript
static util.inherits(Value constructor,
    Value superConstructor);
```

调用参数:
* constructor: Value, 初始的构造函数
* superConstructor: Value, 被继承的超类

--------------------------
### inspect
**函数返回 obj 的字符串表示，主要用于调试。 附加的 options 可用于改变格式化字符串的某些方面。**

```JavaScript
static String util.inspect(Value obj,
    Object options = {});
```

调用参数:
* obj: Value, 指定需要处理的对象
* options: Object, 指定格式控制选项

返回结果:
* String, 返回格式化后的字符串

支持以下参数:

```JavaScript
{
    "colors": false, // 指定是否输出 ansi 作色字符串，缺省为 false
    "depth": 2, // 指定格式化 object 时递归的次数，缺省为 2
    "table": false, // 指定输出 table 格式，缺省为 false
    "encode_string": true, // 指定表格中的字符串是否编码，缺省为 true
    "fields": [], // 当 table 为 true 时指定显示字段
}
```

--------------------------
### deprecate
**封装给定的函数，本函数仅为兼容，并不输出警告**

```JavaScript
static Function util.deprecate(Function fn,
    String msg,
    String code = "");
```

调用参数:
* fn: Function, 给定需要封装的函数
* msg: String, 给定警告消息
* code: String, 给定警告编号

返回结果:
* Function, 如果封装结果

--------------------------
### isEmpty
**检测给定的变量是否不包含任何值(没有可枚举的属性)**

```JavaScript
static Boolean util.isEmpty(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果为空则返回 True

--------------------------
### isArray
**检测给定的变量是否是数组**

```JavaScript
static Boolean util.isArray(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是数组则返回 True

--------------------------
### isBoolean
**检测给定的变量是否是 Boolean**

```JavaScript
static Boolean util.isBoolean(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Boolean 则返回 True

--------------------------
### isNull
**检测给定的变量是否是 Null**

```JavaScript
static Boolean util.isNull(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Null 则返回 True

--------------------------
### isNullOrUndefined
**检测给定的变量是否是 Null 或者 Undefined**

```JavaScript
static Boolean util.isNullOrUndefined(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Null 或者 Undefined 则返回 True

--------------------------
### isNumber
**检测给定的变量是否是数字**

```JavaScript
static Boolean util.isNumber(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是数字则返回 True

--------------------------
### isBigInt
**检测给定的变量是否是 BigInt**

```JavaScript
static Boolean util.isBigInt(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是数字则返回 True

--------------------------
### isString
**检测给定的变量是否是字符串**

```JavaScript
static Boolean util.isString(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是字符串则返回 True

--------------------------
### isUndefined
**检测给定的变量是否是 Undefined**

```JavaScript
static Boolean util.isUndefined(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Undefined 则返回 True

--------------------------
### isRegExp
**检测给定的变量是否是正则对象**

```JavaScript
static Boolean util.isRegExp(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是正则对象则返回 True

--------------------------
### isObject
**检测给定的变量是否是对象**

```JavaScript
static Boolean util.isObject(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是对象则返回 True

--------------------------
### isDate
**检测给定的变量是否是日期对象**

```JavaScript
static Boolean util.isDate(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是日期对象则返回 True

--------------------------
### isNativeError
**检测给定的变量是否是错误对象**

```JavaScript
static Boolean util.isNativeError(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是错误对象则返回 True

--------------------------
### isPrimitive
**检测给定的变量是否是原始类型**

```JavaScript
static Boolean util.isPrimitive(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是原始类型则返回 True

--------------------------
### isSymbol
**检测给定的变量是否是Symbol类型**

```JavaScript
static Boolean util.isSymbol(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是Symbol类型则返回 True

--------------------------
### isDataView
**检测给定的变量是否是 DataView 类型**

```JavaScript
static Boolean util.isDataView(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 DataView 类型则返回 True

--------------------------
### isExternal
**检测给定的变量是否是 External 类型**

```JavaScript
static Boolean util.isExternal(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 External 类型则返回 True

--------------------------
### isMap
**检测给定的变量是否是 Map 类型**

```JavaScript
static Boolean util.isMap(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Map 类型则返回 True

--------------------------
### isMapIterator
**检测给定的变量是否是 MapIterator 类型**

```JavaScript
static Boolean util.isMapIterator(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 MapIterator 类型则返回 True

--------------------------
### isPromise
**检测给定的变量是否是 Promise 类型**

```JavaScript
static Boolean util.isPromise(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Promise 类型则返回 True

--------------------------
### isAsyncFunction
**检测给定的变量是否是 AsyncFunction 类型**

```JavaScript
static Boolean util.isAsyncFunction(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 AsyncFunction 类型则返回 True

--------------------------
### isSet
**检测给定的变量是否是 Set 类型**

```JavaScript
static Boolean util.isSet(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Set 类型则返回 True

--------------------------
### isSetIterator
**检测给定的变量是否是 SetIterator 类型**

```JavaScript
static Boolean util.isSetIterator(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 SetIterator 类型则返回 True

--------------------------
### isTypedArray
**检测给定的变量是否是 TypedArray 类型**

```JavaScript
static Boolean util.isTypedArray(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 TypedArray 类型则返回 True

--------------------------
### isUint8Array
**检测给定的变量是否是 Uint8Array 类型**

```JavaScript
static Boolean util.isUint8Array(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Uint8Array 类型则返回 True

--------------------------
### isFunction
**检测给定的变量是否是函数对象**

```JavaScript
static Boolean util.isFunction(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是函数对象则返回 True

--------------------------
### isBuffer
**检测给定的变量是否是函数 [Buffer](../../object/ifs/Buffer.md) 对象**

```JavaScript
static Boolean util.isBuffer(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是函数 [Buffer](../../object/ifs/Buffer.md) 对象则返回 True

--------------------------
### isDeepEqual
**测试数值深度等于预期值**

```JavaScript
static Boolean util.isDeepEqual(Value actual,
    Value expected);
```

调用参数:
* actual: Value, 要测试的数值
* expected: Value, 预期的数值

返回结果:
* Boolean, 如果深度相等则返回 True

--------------------------
### has
**查询指定对象是否包含给定的键**

```JavaScript
static Boolean util.has(Value v,
    String key);
```

调用参数:
* v: Value, 给定需要查询的对象
* key: String, 指定需要查询的键

返回结果:
* Boolean, 返回对象的全部键数组

--------------------------
### keys
**查询指定对象的全部键数组**

```JavaScript
static Array util.keys(Value v);
```

调用参数:
* v: Value, 给定需要查询的对象

返回结果:
* Array, 返回对象的全部键数组

--------------------------
### values
**查询指定对象的全部值数组**

```JavaScript
static Array util.values(Value v);
```

调用参数:
* v: Value, 给定需要查询的对象

返回结果:
* Array, 返回对象的全部值数组

--------------------------
### clone
**克隆给定变量，如果是对象或数组，则复制内容到新对象**

```JavaScript
static Value util.clone(Value v);
```

调用参数:
* v: Value, 给定要克隆的变量

返回结果:
* Value, 返回克隆结果

--------------------------
### deepFreeze
**深度冻结一个对象，被冻结后的对象及其包含的对象都将不允许修改**

```JavaScript
static util.deepFreeze(Value v);
```

调用参数:
* v: Value, 指定要冻结的对象

--------------------------
### extend
**将一个或者多个对象的键值扩展到指定对象**

```JavaScript
static Value util.extend(Value v,
    ...objs);
```

调用参数:
* v: Value, 指定要扩展的对象
* objs: ..., 指定一个或者多个用于扩展的对象

返回结果:
* Value, 返回扩展的结果

--------------------------
### _extend
**将一个或者多个对象的键值扩展到指定对象，是 extend 的别名**

```JavaScript
static Value util._extend(Value v,
    ...objs);
```

调用参数:
* v: Value, 指定要扩展的对象
* objs: ..., 指定一个或者多个用于扩展的对象

返回结果:
* Value, 返回扩展的结果

--------------------------
### pick
**返回一个[object](../../object/ifs/object.md)副本，只过滤出指定键的属性值**

```JavaScript
static Object util.pick(Value v,
    ...objs);
```

调用参数:
* v: Value, 指定要过滤的对象
* objs: ..., 指定一个或者多个用于选择的键

返回结果:
* Object, 返回过滤的结果

--------------------------
### omit
**返回一个[object](../../object/ifs/object.md)副本，只过排除指定键的属性值**

```JavaScript
static Object util.omit(Value v,
    ...keys);
```

调用参数:
* v: Value, 指定要过滤的对象
* keys: ..., 指定一个或者多个用于排除的键

返回结果:
* Object, 返回排除的结果

--------------------------
### first
**获取数组的第一个元素**

```JavaScript
static Value util.first(Value v);
```

调用参数:
* v: Value, 给定要获取的数组

返回结果:
* Value, 返回获取的元素

--------------------------
**获取数组的开始多个元素**

```JavaScript
static Value util.first(Value v,
    Integer n);
```

调用参数:
* v: Value, 给定要获取的数组
* n: Integer, 指定要获取的元素个数

返回结果:
* Value, 返回获取的元素数组

--------------------------
### last
**获取数组的第后一个元素**

```JavaScript
static Value util.last(Value v);
```

调用参数:
* v: Value, 给定要获取的数组

返回结果:
* Value, 返回获取的元素

--------------------------
**获取数组的结尾多个元素**

```JavaScript
static Value util.last(Value v,
    Integer n);
```

调用参数:
* v: Value, 给定要获取的数组
* n: Integer, 指定要获取的元素个数

返回结果:
* Value, 返回获取的元素数组

--------------------------
### unique
**获取数组的元素去重后的副本**

```JavaScript
static Array util.unique(Value v,
    Boolean sorted = false);
```

调用参数:
* v: Value, 给定要去重的数组
* sorted: Boolean, 指定数组是否排序，如果指定数组排序，将使用快速算法

返回结果:
* Array, 返回去重元素后的数组

--------------------------
### union
**将一个或者多个数组的值合并成一个值唯一的数组**

```JavaScript
static Array util.union(...arrs);
```

调用参数:
* arrs: ..., 指定一个或者多个用于合并的数组

返回结果:
* Array, 返回合并的结果

--------------------------
### intersection
**返回一个包含 arr 数组中排除一个或者多个数组元素的交集**

```JavaScript
static Array util.intersection(...arrs);
```

调用参数:
* arrs: ..., 指定一个或者多个用于计算交集的数组

返回结果:
* Array, 返回计算交集的结果

--------------------------
### flatten
**将一个嵌套多层的数组(嵌套可以是任何层数)转换为只有一层的数组。 如果你传递 shallow 参数，数组将只减少一维的嵌套。**

```JavaScript
static Array util.flatten(Value arr,
    Boolean shallow = false);
```

调用参数:
* arr: Value, 指定需要转换的数组
* shallow: Boolean, 指定是否只减少一维的嵌套，缺省为 false

返回结果:
* Array, 返回转换的结果

--------------------------
### without
**返回一个包含 arr 数组中排除一个或者多个元素后的数组**

```JavaScript
static Array util.without(Value arr,
    ...els);
```

调用参数:
* arr: Value, 指定需要排除的数组
* els: ..., 指定一个或者多个用于排除的元素

返回结果:
* Array, 返回排除的结果

--------------------------
### difference
**返回一个包含 arr 数组中排除 without 数组元素之后的数组**

```JavaScript
static Array util.difference(Array list,
    ...arrs);
```

调用参数:
* list: Array, 指定需要排除的数组
* arrs: ..., 指定用于排除的一个或者多个数组

返回结果:
* Array, 返回排除的结果

--------------------------
### each
**遍历 list 中的所有元素，按顺序用遍历输出每个元素。如果传递了 context 参数，则把 iterator 绑定到 context 对象上。每次调用 iterator 都会传递三个参数：(element, index, list)**

```JavaScript
static Value util.each(Value list,
    Function iterator,
    Value context = undefined);
```

调用参数:
* list: Value, 指定需要遍历的列表或对象
* iterator: Function, 指定用于遍历的回调函数
* context: Value, 指定调用 iterator 时绑定的 context 对象

返回结果:
* Value, 返回 list 本身

--------------------------
### map
**通过变换函数（iterator迭代器）把 list 中的每个值映射到一个新的数组中。如果传递了 context 参数，则把 iterator 绑定到 context 对象上。每次调用 iterator 都会传递三个参数：(element, index, list)**

```JavaScript
static Array util.map(Value list,
    Function iterator,
    Value context = undefined);
```

调用参数:
* list: Value, 指定需要变换的列表或对象
* iterator: Function, 指定用于变换的回调函数
* context: Value, 指定调用 iterator 时绑定的 context 对象

返回结果:
* Array, 返回变换的结果

--------------------------
### reduce
**把 list中 元素归结为一个单独的数值。如果传递了 context 参数，则把 iterator 绑定到 context 对象上。每次调用 iterator 都会传递三个参数：(memo, element, index, list)**

```JavaScript
static Value util.reduce(Value list,
    Function iterator,
    Value memo,
    Value context = undefined);
```

调用参数:
* list: Value, 指定需要归结的列表或对象
* iterator: Function, 指定用于归结的回调函数
* memo: Value, 指定归结的初始值
* context: Value, 指定调用 iterator 时绑定的 context 对象

返回结果:
* Value, 返回归结的结果

--------------------------
### parseArgs
**解析命令行字符串返回参数列表**

```JavaScript
static NArray util.parseArgs(String command);
```

调用参数:
* command: String, 指定要解析的命令行字符串

返回结果:
* NArray, 返回解析出的参数列表

--------------------------
### compile
**编译脚本为二进制代码**

```JavaScript
static Buffer util.compile(String srcname,
    String script,
    Integer mode = 0);
```

调用参数:
* srcname: String, 指定要添加的脚本名称
* script: String, 指定要编译的脚本代码
* mode: Integer, 编译模式，0: module, 1: script, 2: worker，缺省为 0

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回编译出的二进制代码

[util.compile](util.md#compile) 可以将脚本编译为 v8 内部运行数据块(非机器执行代码)。编译以后的代码，保存为 *.jsc 后，可以由 run 和 require 直接加载执行。

由于编译之后，目标代码将不能逆向获取源代码，依赖于 Function.toString 的程序将不能正常运行。

--------------------------
### sync
**包裹 callback 或 async 函数为同步调用**

```JavaScript
static Function util.sync(Function func,
    Boolean async_func = false);
```

调用参数:
* func: Function, 给定需要包裹的函数
* async_func: Boolean, 指定以 async 函数方式处理 func，为 false 则自动判断

返回结果:
* Function, 返回同步运行的函数

[util.sync](util.md#sync) 将 callback 函数或者 async 函数处理为 sync 函数，以方便调用。

callback 示例如下：

```JavaScript
// callback
var util = require('util');

function cb_test(a, b, cb) {
    setTimeout(() => {
        cb(null, a + b);
    }, 100);
}

var fn_sync = util.sync(cb_test);
console.log(fn_sync(100, 200));
```

async 示例如下：

```JavaScript
// async/await
var util = require('util');

async function async_test(a, b) {
    return a + b;
}

var fn_sync = util.sync(async_test);
console.log(fn_sync(100, 200));
```

对于未标记为 async 的返回 promise 的函数，可以手动指定 sync 模式：

```JavaScript
// async/await
var util = require('util');

function async_test(a, b) {
    return new Promise(function(resolve, reject) {
        resolve(a + b);
    });
}

var fn_sync = util.sync(async_test, true);
console.log(fn_sync(100, 200));
```

--------------------------
### promisify
**包裹 callback 函数为 async 调用**

```JavaScript
static Function util.promisify(Function func);
```

调用参数:
* func: Function, 给定需要包裹的函数

返回结果:
* Function, 返回 async 函数

[util.promisify](util.md#promisify) 将 callback 函数处理为 async 函数，以方便调用。

callback 示例如下：

```JavaScript
// callback
var util = require('util');

function cb_test(a, b, cb) {
    setTimeout(() => {
        cb(null, a + b);
    }, 100);
}

var fn_sync = util.promisify(cb_test);
console.log(async fn_sync(100, 200));
```

--------------------------
### callbackify
**包裹 async 函数为 callback 调用**

```JavaScript
static Function util.callbackify(Function func);
```

调用参数:
* func: Function, 给定需要包裹的函数

返回结果:
* Function, 返回 callback 函数

[util.callbackify](util.md#callbackify) 将 async 函数处理为 callback 函数，以方便调用。

async 示例如下：

```JavaScript
// async
var util = require('util');

async function async_test(a, b) {
    return a + b;
}

var fn_callback = util.callbackify(async_test);

fn_callback(100, 200, (err, result) => {
    console.log(result);
});
```

--------------------------
### buildInfo
**查询当前引擎及各组件版本信息**

```JavaScript
static Object util.buildInfo();
```

返回结果:
* Object, 返回组件版本对象

```JavaScript
{
    "fibjs": "0.25.0",
    "clang": "9.1",
    "date": "Jun 12 2018 07:22:40",
    "vender": {
        "ev": "4.24",
        "expat": "2.2.5",
        "gd": "2.2.4",
        "jpeg": "8.3",
        "leveldb": "1.17",
        "mongo": "0.7",
        "pcre": "8.21",
        "png": "1.5.4",
        "mbedtls": "2.6.1",
        "snappy": "1.1.2",
        "sqlite": "3.23.0",
        "tiff": "3.9.5",
        "uuid": "1.6.2",
        "v8": "6.7.288.20",
        "v8-snapshot": true,
        "zlib": "1.2.7",
        "zmq": "3.1"
    }
}
```

