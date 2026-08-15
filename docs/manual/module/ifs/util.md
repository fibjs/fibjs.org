# 模块 util
util 模块提供了对数据类型的判断、对象属性的复制、模版字符串的解析、事件处理等实用的工具函数

下面是具体的介绍和示例：

1. 判断数据类型 - `util.is[type]`
该模块内提供了诸如 `isDate`、`isRegExp`、`isError` 等判断传入参数数据类型的方法，例如：

```JavaScript
var util = require('util');
console.log(util.isDate(new Date()));
console.log(util.isRegExp(/some regexp/));
```

2. 对象属性复制 - `util.inherits()`
该方法可以选择将一个构造函数继承自另一个，从而实现原型继承。

```JavaScript
var util = require('util');

function Animal() {
    this.name = 'Animal';
    this.sleep = function() {
        console.log(this.name + '正在睡觉！');
    }
}
Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃：' + food);
};

function Cat() {
    this.name = 'cat';
}
util.inherits(Cat, Animal);
```

使用 `Cat` 这个构造函数继承了 `Animal` 的实例属性和原型属性，打印 `Cat` 的实例的属性和方法

```JavaScript
var cat = new Cat();
console.log(cat.name);
console.log(cat.eat('fish'));
console.log(cat.sleep());
```

3. [util.format](util.md#format)() 格式化输出模版

```JavaScript
const util = require('util');
const str1 = util.format('%s:%s', 'foo');
const str2 = util.format('%s:%s', 'foo', 'bar', 'baz');
console.log(str1) // => 'foo:%s'
console.log(str2) // => 'foo:bar baz'
```

以上是 `util` 模块的一些常用方法，常常可以用于简化实际开发过程。

## 对象
        
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

--------------------------
### types
**[types](types.md) 模块提供了对数据类型判断的工具函数。**

```JavaScript
types util.types;
```

--------------------------
### colors
**[colors](colors.md) 模块提供了一组颜色常量，用于设置控制台输出颜色。**

```JavaScript
colors util.colors;
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
### formatWithOptions
**按照指定格式和 inspect 选项格式化变量**

```JavaScript
static String util.formatWithOptions(Object options,
    String fmt,
    ...args);
```

调用参数:
* options: Object, 非字符串值使用的 inspect 选项
* fmt: String, 格式化字符串
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
### parseEnv
**解析 dotenv 文件原始文本并返回键值对象**

```JavaScript
static Object util.parseEnv(String content);
```

调用参数:
* content: String, dotenv 文件的原始内容

返回结果:
* Object, 返回解析后的键值对象

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
    "colors": false, // specify if output should be colorized, defaults to false
    "depth": 2, // specify the max depth of the output, defaults to 2
    "table": false, // specify if output should be a table, defaults to false
    "encode_string": true, // specify if string should be encoded, defaults to true
    "maxArrayLength": 100, // specify max number of array elements to show, set to 0 or negative to show no elements, defaults to 100
    "maxStringLength": 10000, // specify max string length to output, set to 0 or negative to show no strings, defaults to 10000
    "fields": [], // specify the fields to be displayed, defaults to all
}
```

--------------------------
### styleText
**为文本应用 ANSI 颜色/样式格式化**

```JavaScript
static String util.styleText(String format[],
    String text);
```

调用参数:
* format[]: String, 格式名称数组
* text: String, 要格式化的文本

返回结果:
* String, 返回格式化后的字符串

当不支持颜色输出时（如非 TTY 环境、设置了 NO_COLOR），原样返回文本。

支持的格式：bold、italic、underline、strikethrough、hidden、
black、red、green、yellow、blue、magenta、cyan、white、
bgBlack、bgRed、bgGreen、bgYellow、bgBlue、bgMagenta、bgCyan、bgWhite、
gray/grey、blackBright、redBright、greenBright、yellowBright、blueBright、
magentaBright、cyanBright、whiteBright

--------------------------
**为文本应用 ANSI 颜色/样式格式化**

```JavaScript
static String util.styleText(String format,
    String text);
```

调用参数:
* format: String, 格式名称
* text: String, 要格式化的文本

返回结果:
* String, 返回格式化后的字符串

--------------------------
### debuglog
**创建一个 [ConsoleObject](../../object/ifs/ConsoleObject.md) 对象，根据环境变量 NODE_DEBUG 有条件地输出调试信息**

```JavaScript
static ConsoleObject util.debuglog(String section);
```

调用参数:
* section: String, 指定的调试区域

返回结果:
* [ConsoleObject](../../object/ifs/ConsoleObject.md), 返回一个 [ConsoleObject](../../object/ifs/ConsoleObject.md) 对象

--------------------------
**创建一个 [ConsoleObject](../../object/ifs/ConsoleObject.md) 对象，根据环境变量 NODE_DEBUG 有条件地输出调试信息**

```JavaScript
static ConsoleObject util.debuglog(String section,
    Function fn);
```

调用参数:
* section: String, 指定的调试区域
* fn: Function, 第一次调用日志函数时调用的回调，其函数参数是一个更优化的日志函数

返回结果:
* [ConsoleObject](../../object/ifs/ConsoleObject.md), 返回一个 [ConsoleObject](../../object/ifs/ConsoleObject.md) 对象

--------------------------
### debug
**创建一个 [ConsoleObject](../../object/ifs/ConsoleObject.md) 对象，根据环境变量 NODE_DEBUG 有条件地输出调试信息。是 debuglog 的别名**

```JavaScript
static ConsoleObject util.debug(String section);
```

调用参数:
* section: String, 指定的调试区域

返回结果:
* [ConsoleObject](../../object/ifs/ConsoleObject.md), 返回一个 [ConsoleObject](../../object/ifs/ConsoleObject.md) 对象

--------------------------
**创建一个 [ConsoleObject](../../object/ifs/ConsoleObject.md) 对象，根据环境变量 NODE_DEBUG 有条件地输出调试信息。是 debuglog 的别名**

```JavaScript
static ConsoleObject util.debug(String section,
    Function fn);
```

调用参数:
* section: String, 指定的调试区域
* fn: Function, 第一次调用日志函数时调用的回调，其函数参数是一个更优化的日志函数

返回结果:
* [ConsoleObject](../../object/ifs/ConsoleObject.md), 返回一个 [ConsoleObject](../../object/ifs/ConsoleObject.md) 对象

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
### isFloat16Array
**检测给定的变量是否是 Float16Array 类型**

```JavaScript
static Boolean util.isFloat16Array(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Float16Array 类型则返回 True

--------------------------
### isAnyArrayBuffer
**检测给定的变量是否是 ArrayBuffer 或 SharedArrayBuffer 类型**

```JavaScript
static Boolean util.isAnyArrayBuffer(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 ArrayBuffer 或 SharedArrayBuffer 类型则返回 True

--------------------------
### isSharedArrayBuffer
**检测给定的变量是否是 SharedArrayBuffer 类型**

```JavaScript
static Boolean util.isSharedArrayBuffer(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 SharedArrayBuffer 类型则返回 True

--------------------------
### isArgumentsObject
**检测给定的变量是否是 arguments 对象**

```JavaScript
static Boolean util.isArgumentsObject(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 arguments 对象则返回 True

--------------------------
### isBoxedPrimitive
**检测给定的变量是否是装箱的原始类型对象（如 new Boolean()、new String() 等）**

```JavaScript
static Boolean util.isBoxedPrimitive(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是装箱的原始类型对象则返回 True

--------------------------
### isGeneratorFunction
**检测给定的变量是否是 GeneratorFunction 类型**

```JavaScript
static Boolean util.isGeneratorFunction(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 GeneratorFunction 类型则返回 True

--------------------------
### isGeneratorObject
**检测给定的变量是否是 Generator 对象**

```JavaScript
static Boolean util.isGeneratorObject(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Generator 对象则返回 True

--------------------------
### isProxy
**检测给定的变量是否是 Proxy 实例**

```JavaScript
static Boolean util.isProxy(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Proxy 实例则返回 True

--------------------------
### isModuleNamespaceObject
**检测给定的变量是否是 Module Namespace 对象**

```JavaScript
static Boolean util.isModuleNamespaceObject(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Module Namespace 对象则返回 True

--------------------------
### isCryptoKey
**检测给定的变量是否是 [CryptoKey](../../object/ifs/CryptoKey.md) 类型**

```JavaScript
static Boolean util.isCryptoKey(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 [CryptoKey](../../object/ifs/CryptoKey.md) 类型则返回 True

--------------------------
### isKeyObject
**检测给定的变量是否是 [KeyObject](../../object/ifs/KeyObject.md) 类型**

```JavaScript
static Boolean util.isKeyObject(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 [KeyObject](../../object/ifs/KeyObject.md) 类型则返回 True

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
### isDeepStrictEqual
**测试数值严格深度等于预期值**

```JavaScript
static Boolean util.isDeepStrictEqual(Value actual,
    Value expected);
```

调用参数:
* actual: Value, 要测试的数值
* expected: Value, 预期的数值

返回结果:
* Boolean, 如果严格深度相等则返回 True

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
* mode: Integer, 编译模式，0: [module](module.md), 1: script, 2: worker，缺省为 0

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回编译出的二进制代码

[util.compile](util.md#compile) 可以将脚本编译为 [v8](v8.md) 内部运行数据块(非机器执行代码)。编译以后的代码，保存为 *.jsc 后，可以由 run 和 require 直接加载执行。

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

--------------------------
### stripTypeScript
**将 TypeScript 代码转换为 JavaScript，移除所有类型注解**

```JavaScript
static String util.stripTypeScript(String code);
```

调用参数:
* code: String, TypeScript 源代码

返回结果:
* String, 返回转换后的 JavaScript 代码

该方法使用 strip-only 模式，将 TypeScript 的类型语法替换为空格，保持源代码的行列位置不变。
这对于需要调试或生成 source map 的场景非常有用。

注意：strip-only 模式不支持以下语法：
- enum（需要转换为 IIFE）
- const enum（需要内联展开）
- namespace（需要转换为 IIFE）
- 构造函数参数属性（如 constructor(public x: string)）
- import = require() 语法
- export = 语法
- 尖括号类型断言（如 <T>expr，请使用 as 语法）

示例：

```JavaScript
var util = require('util');
var ts = 'const x: string = "hello";';
var js = util.stripTypeScript(ts);
console.log(js); // 'const x         = "hello";'
```

--------------------------
### getStringWidth
**获取字符串的可视宽度，考虑全角字符、emoji 和 ANSI 转义序列**

```JavaScript
static Integer util.getStringWidth(String str);
```

调用参数:
* str: String, 要计算宽度的字符串

返回结果:
* Integer, 返回字符串的可视宽度

东亚宽度属性为 Fullwidth (F) 或 Wide (W) 的字符计为 2，大多数其他字符计为 1。
控制字符和组合标记计为 0。ANSI 转义序列将被跳过。

--------------------------
### stripVTControlCharacters
**从字符串中移除 ANSI 转义序列（VT 控制字符）**

```JavaScript
static String util.stripVTControlCharacters(String str);
```

调用参数:
* str: String, 要处理的字符串

返回结果:
* String, 返回移除 ANSI 转义序列后的字符串

