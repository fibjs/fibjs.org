# 模块 util
常用工具模块

## 函数
        
### format
按照指定的格式格式化变量
```JavaScript
String util.format(String fmt,
                ...);
```

**调用参数:**
* fmt - 格式化字符串
* ... - 可选参数列表

**返回结果:**
* 返回格式化后的字符串

### format
格式格式化变量
```JavaScript
String util.format(...);
```

**调用参数:**
* ... - 可选参数列表

**返回结果:**
* 返回格式化后的字符串

### inherits
从一个构造函数 constructor 继承原型方法到另一个。构造函数的原型将被设置为一个新的从超类（superConstructor）创建的对象。
```JavaScript
util.inherits(Value constructor,
                Value superConstructor);
```

**调用参数:**
* constructor - 初始的构造函数
* superConstructor - 被继承的超类

### isEmpty
检测给定的变量是否不包含任何值(没有可枚举的属性)
```JavaScript
Boolean util.isEmpty(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果为空则返回 True

### isArray
检测给定的变量是否是数组
```JavaScript
Boolean util.isArray(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是数组则返回 True

### isBoolean
检测给定的变量是否是 Boolean
```JavaScript
Boolean util.isBoolean(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是 Boolean 则返回 True

### isNull
检测给定的变量是否是 Null
```JavaScript
Boolean util.isNull(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是 Null 则返回 True

### isNullOrUndefined
检测给定的变量是否是 Null 或者 Undefined
```JavaScript
Boolean util.isNullOrUndefined(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是 Null 或者 Undefined 则返回 True

### isNumber
检测给定的变量是否是数字
```JavaScript
Boolean util.isNumber(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是数字则返回 True

### isString
检测给定的变量是否是字符串
```JavaScript
Boolean util.isString(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是字符串则返回 True

### isUndefined
检测给定的变量是否是 Undefined
```JavaScript
Boolean util.isUndefined(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是 Undefined 则返回 True

### isRegExp
检测给定的变量是否是正则对象
```JavaScript
Boolean util.isRegExp(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是正则对象则返回 True

### isObject
检测给定的变量是否是对象
```JavaScript
Boolean util.isObject(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是对象则返回 True

### isDate
检测给定的变量是否是日期对象
```JavaScript
Boolean util.isDate(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是日期对象则返回 True

### isNativeError
检测给定的变量是否是错误对象
```JavaScript
Boolean util.isNativeError(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是错误对象则返回 True

### isPrimitive
检测给定的变量是否是原始类型
```JavaScript
Boolean util.isPrimitive(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是原始类型则返回 True

### isSymbol
检测给定的变量是否是Symbol类型
```JavaScript
Boolean util.isSymbol(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是Symbol类型则返回 True

### isDataView
检测给定的变量是否是 DataView 类型
```JavaScript
Boolean util.isDataView(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是 DataView 类型则返回 True

### isExternal
检测给定的变量是否是 External 类型
```JavaScript
Boolean util.isExternal(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是 External 类型则返回 True

### isMap
检测给定的变量是否是 Map 类型
```JavaScript
Boolean util.isMap(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是 Map 类型则返回 True

### isMapIterator
检测给定的变量是否是 MapIterator 类型
```JavaScript
Boolean util.isMapIterator(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是 MapIterator 类型则返回 True

### isPromise
检测给定的变量是否是 Promise 类型
```JavaScript
Boolean util.isPromise(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是 Promise 类型则返回 True

### isSet
检测给定的变量是否是 Set 类型
```JavaScript
Boolean util.isSet(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是 Set 类型则返回 True

### isSetIterator
检测给定的变量是否是 SetIterator 类型
```JavaScript
Boolean util.isSetIterator(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是 SetIterator 类型则返回 True

### isTypedArray
检测给定的变量是否是 TypedArray 类型
```JavaScript
Boolean util.isTypedArray(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是 TypedArray 类型则返回 True

### isUint8Array
检测给定的变量是否是 Uint8Array 类型
```JavaScript
Boolean util.isUint8Array(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是 Uint8Array 类型则返回 True

### isFunction
检测给定的变量是否是函数对象
```JavaScript
Boolean util.isFunction(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是函数对象则返回 True

### isBuffer
检测给定的变量是否是函数 Buffer 对象
```JavaScript
Boolean util.isBuffer(Value v);
```

**调用参数:**
* v - 给定需要检测的变量

**返回结果:**
* 如果是函数 Buffer 对象则返回 True

### has
查询指定对象是否包含给定的键
```JavaScript
Boolean util.has(Value v,
                String key);
```

**调用参数:**
* v - 给定需要查询的对象
* key - 指定需要查询的键

**返回结果:**
* 返回对象的全部键数组

### keys
查询指定对象的全部键数组
```JavaScript
Array util.keys(Value v);
```

**调用参数:**
* v - 给定需要查询的对象

**返回结果:**
* 返回对象的全部键数组

### values
查询指定对象的全部值数组
```JavaScript
Array util.values(Value v);
```

**调用参数:**
* v - 给定需要查询的对象

**返回结果:**
* 返回对象的全部值数组

### clone
克隆给定变量，如果是对象或数组，则复制内容到新对象
```JavaScript
Value util.clone(Value v);
```

**调用参数:**
* v - 给定要克隆的变量

**返回结果:**
* 返回克隆结果

### extend
将一个或者多个对象的键值扩展到指定对象
```JavaScript
Value util.extend(Value v,
                ...);
```

**调用参数:**
* v - 指定要扩展的对象
* ... - 指定一个或者多个用于扩展的对象

**返回结果:**
* 返回扩展的结果

### pick
返回一个object副本，只过滤出指定键的属性值
```JavaScript
Object util.pick(Value v,
                ...);
```

**调用参数:**
* v - 指定要过滤的对象
* ... - 指定一个或者多个用于选择的键

**返回结果:**
* 返回过滤的结果

### omit
返回一个object副本，只过排除指定键的属性值
```JavaScript
Object util.omit(Value v,
                ...);
```

**调用参数:**
* v - 指定要过滤的对象
* ... - 指定一个或者多个用于排除的键

**返回结果:**
* 返回排除的结果

### first
获取数组的第一个元素
```JavaScript
Value util.first(Value v);
```

**调用参数:**
* v - 给定要获取的数组

**返回结果:**
* 返回获取的元素

### first
获取数组的开始多个元素
```JavaScript
Value util.first(Value v,
                Integer n);
```

**调用参数:**
* v - 给定要获取的数组
* n - 指定要获取的元素个数

**返回结果:**
* 返回获取的元素数组

### last
获取数组的第后一个元素
```JavaScript
Value util.last(Value v);
```

**调用参数:**
* v - 给定要获取的数组

**返回结果:**
* 返回获取的元素

### last
获取数组的结尾多个元素
```JavaScript
Value util.last(Value v,
                Integer n);
```

**调用参数:**
* v - 给定要获取的数组
* n - 指定要获取的元素个数

**返回结果:**
* 返回获取的元素数组

### unique
获取数组的元素去重后的副本
```JavaScript
Array util.unique(Value v,
                Boolean sorted = false);
```

**调用参数:**
* v - 给定要去重的数组
* sorted - 指定数组是否排序，如果指定数组排序，将使用快速算法

**返回结果:**
* 返回去重元素后的数组

### union
将一个或者多个数组的值合并成一个值唯一的数组
```JavaScript
Array util.union(...);
```

**调用参数:**
* ... - 指定一个或者多个用于合并的数组

**返回结果:**
* 返回合并的结果

### intersection
返回一个包含 arr 数组中排除一个或者多个数组元素的交集
```JavaScript
Array util.intersection(...);
```

**调用参数:**
* ... - 指定一个或者多个用于计算交集的数组

**返回结果:**
* 返回计算交集的结果

### flatten
将一个嵌套多层的数组(嵌套可以是任何层数)转换为只有一层的数组。 如果你传递 shallow 参数，数组将只减少一维的嵌套。
```JavaScript
Array util.flatten(Value arr,
                Boolean shallow = false);
```

**调用参数:**
* arr - 指定需要转换的数组
* shallow - 指定是否只减少一维的嵌套，缺省为 false

**返回结果:**
* 返回转换的结果

### without
返回一个包含 arr 数组中排除一个或者多个元素后的数组
```JavaScript
Array util.without(Value arr,
                ...);
```

**调用参数:**
* arr - 指定需要排除的数组
* ... - 指定一个或者多个用于排除的元素

**返回结果:**
* 返回排除的结果

### difference
返回一个包含 arr 数组中排除 without 数组元素之后的数组
```JavaScript
Array util.difference(Array list,
                ...);
```

**调用参数:**
* list - 指定需要排除的数组
* ... - 指定用于排除的一个或者多个数组

**返回结果:**
* 返回排除的结果

### each
遍历 list 中的所有元素，按顺序用遍历输出每个元素。如果传递了 context 参数，则把 iterator 绑定到 context 对象上。每次调用 iterator 都会传递三个参数：(element, index, list)
```JavaScript
Value util.each(Value list,
                Function iterator,
                Value context = undefined);
```

**调用参数:**
* list - 指定需要遍历的列表或对象
* iterator - 指定用于遍历的回调函数
* context - 指定调用 iterator 时绑定的 context 对象

**返回结果:**
* 返回 list 本身

### map
通过变换函数（iterator迭代器）把 list 中的每个值映射到一个新的数组中。如果传递了 context 参数，则把 iterator 绑定到 context 对象上。每次调用 iterator 都会传递三个参数：(element, index, list)
```JavaScript
Array util.map(Value list,
                Function iterator,
                Value context = undefined);
```

**调用参数:**
* list - 指定需要变换的列表或对象
* iterator - 指定用于变换的回调函数
* context - 指定调用 iterator 时绑定的 context 对象

**返回结果:**
* 返回变换的结果

### reduce
把 list中 元素归结为一个单独的数值。如果传递了 context 参数，则把 iterator 绑定到 context 对象上。每次调用 iterator 都会传递三个参数：(memo, element, index, list)
```JavaScript
Value util.reduce(Value list,
                Function iterator,
                Value memo,
                Value context = undefined);
```

**调用参数:**
* list - 指定需要归结的列表或对象
* iterator - 指定用于归结的回调函数
* memo - 指定归结的初始值
* context - 指定调用 iterator 时绑定的 context 对象

**返回结果:**
* 返回归结的结果

### compile
编译脚本为二进制代码
```JavaScript
Buffer util.compile(String srcname,
                String script,
                Integer mode = 0);
```

**调用参数:**
* srcname - 指定要添加的脚本名称
* script - 指定要编译的脚本代码
* mode - 编译模式，0: module, 1: main, 2: script, 3: worker，缺省为 0

**返回结果:**
* 返回编译出的二进制代码

### compile
编译脚本为二进制代码
```JavaScript
Buffer util.compile(String script,
                Integer mode = 0);
```

**调用参数:**
* script - 指定要编译的脚本代码
* mode - 编译模式，0: module, 1: main, 2: script, 3: worker，缺省为 0

**返回结果:**
* 返回编译出的二进制代码

### sync
包裹 callback 方法为同步调用
```JavaScript
Function util.sync(Function func);
```

**调用参数:**
* func - 给定需要包裹的方法

**返回结果:**
* 返回同步运行的方法

### buildInfo
查询当前引擎及各组件版本信息
```JavaScript
Object util.buildInfo();
```

**返回结果:**
* 返回结构如下：

