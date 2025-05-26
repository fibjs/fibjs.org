# 模块 types
types 模块提供了对数据类型判断的工具函数

下面是具体的介绍和示例：

```JavaScript
var util = require('util');
console.log(util.types.isDate(new Date()));
console.log(util.types.isRegExp(/some regexp/));
```

## 静态函数
        
### isEmpty
**检测给定的变量是否不包含任何值(没有可枚举的属性)**

```JavaScript
static Boolean types.isEmpty(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果为空则返回 True

--------------------------
### isArray
**检测给定的变量是否是数组**

```JavaScript
static Boolean types.isArray(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是数组则返回 True

--------------------------
### isBoolean
**检测给定的变量是否是 Boolean**

```JavaScript
static Boolean types.isBoolean(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Boolean 则返回 True

--------------------------
### isNull
**检测给定的变量是否是 Null**

```JavaScript
static Boolean types.isNull(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Null 则返回 True

--------------------------
### isNullOrUndefined
**检测给定的变量是否是 Null 或者 Undefined**

```JavaScript
static Boolean types.isNullOrUndefined(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Null 或者 Undefined 则返回 True

--------------------------
### isNumber
**检测给定的变量是否是数字**

```JavaScript
static Boolean types.isNumber(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是数字则返回 True

--------------------------
### isBigInt
**检测给定的变量是否是 BigInt**

```JavaScript
static Boolean types.isBigInt(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是数字则返回 True

--------------------------
### isString
**检测给定的变量是否是字符串**

```JavaScript
static Boolean types.isString(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是字符串则返回 True

--------------------------
### isUndefined
**检测给定的变量是否是 Undefined**

```JavaScript
static Boolean types.isUndefined(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Undefined 则返回 True

--------------------------
### isRegExp
**检测给定的变量是否是正则对象**

```JavaScript
static Boolean types.isRegExp(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是正则对象则返回 True

--------------------------
### isObject
**检测给定的变量是否是对象**

```JavaScript
static Boolean types.isObject(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是对象则返回 True

--------------------------
### isDate
**检测给定的变量是否是日期对象**

```JavaScript
static Boolean types.isDate(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是日期对象则返回 True

--------------------------
### isNativeError
**检测给定的变量是否是错误对象**

```JavaScript
static Boolean types.isNativeError(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是错误对象则返回 True

--------------------------
### isPrimitive
**检测给定的变量是否是原始类型**

```JavaScript
static Boolean types.isPrimitive(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是原始类型则返回 True

--------------------------
### isSymbol
**检测给定的变量是否是Symbol类型**

```JavaScript
static Boolean types.isSymbol(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是Symbol类型则返回 True

--------------------------
### isDataView
**检测给定的变量是否是 DataView 类型**

```JavaScript
static Boolean types.isDataView(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 DataView 类型则返回 True

--------------------------
### isExternal
**检测给定的变量是否是 External 类型**

```JavaScript
static Boolean types.isExternal(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 External 类型则返回 True

--------------------------
### isMap
**检测给定的变量是否是 Map 类型**

```JavaScript
static Boolean types.isMap(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Map 类型则返回 True

--------------------------
### isMapIterator
**检测给定的变量是否是 MapIterator 类型**

```JavaScript
static Boolean types.isMapIterator(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 MapIterator 类型则返回 True

--------------------------
### isPromise
**检测给定的变量是否是 Promise 类型**

```JavaScript
static Boolean types.isPromise(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Promise 类型则返回 True

--------------------------
### isAsyncFunction
**检测给定的变量是否是 AsyncFunction 类型**

```JavaScript
static Boolean types.isAsyncFunction(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 AsyncFunction 类型则返回 True

--------------------------
### isSet
**检测给定的变量是否是 Set 类型**

```JavaScript
static Boolean types.isSet(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Set 类型则返回 True

--------------------------
### isSetIterator
**检测给定的变量是否是 SetIterator 类型**

```JavaScript
static Boolean types.isSetIterator(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 SetIterator 类型则返回 True

--------------------------
### isTypedArray
**检测给定的变量是否是 TypedArray 类型**

```JavaScript
static Boolean types.isTypedArray(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 TypedArray 类型则返回 True

--------------------------
### isFloat32Array
**检测给定的变量是否是 Float32Array 类型**

```JavaScript
static Boolean types.isFloat32Array(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Float32Array 类型则返回 True

--------------------------
### isFloat64Array
**检测给定的变量是否是 Float64Array 类型**

```JavaScript
static Boolean types.isFloat64Array(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Float64Array 类型则返回 True

--------------------------
### isInt8Array
**检测给定的变量是否是 Int8Array 类型**

```JavaScript
static Boolean types.isInt8Array(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Int8Array 类型则返回 True

--------------------------
### isInt16Array
**检测给定的变量是否是 Int16Array 类型**

```JavaScript
static Boolean types.isInt16Array(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Int16Array 类型则返回 True

--------------------------
### isInt32Array
**检测给定的变量是否是 Int32Array 类型**

```JavaScript
static Boolean types.isInt32Array(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Int32Array 类型则返回 True

--------------------------
### isUint8Array
**检测给定的变量是否是 Uint8Array 类型**

```JavaScript
static Boolean types.isUint8Array(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Uint8Array 类型则返回 True

--------------------------
### isUint8ClampedArray
**检测给定的变量是否是 Uint8ClampedArray 类型**

```JavaScript
static Boolean types.isUint8ClampedArray(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Uint8ClampedArray 类型则返回 True

--------------------------
### isUint16Array
**检测给定的变量是否是 Uint16Array 类型**

```JavaScript
static Boolean types.isUint16Array(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Uint16Array 类型则返回 True

--------------------------
### isUint32Array
**检测给定的变量是否是 Uint32Array 类型**

```JavaScript
static Boolean types.isUint32Array(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Uint32Array 类型则返回 True

--------------------------
### isFunction
**检测给定的变量是否是函数对象**

```JavaScript
static Boolean types.isFunction(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是函数对象则返回 True

--------------------------
### isBuffer
**检测给定的变量是否是函数 [Buffer](../../object/ifs/Buffer.md) 对象**

```JavaScript
static Boolean types.isBuffer(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是函数 [Buffer](../../object/ifs/Buffer.md) 对象则返回 True

--------------------------
### isBigIntObject
**检测给定的变量是否是 BigInt 对象，而不是原始类型**

```JavaScript
static Boolean types.isBigIntObject(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 BigInt 对象则返回 True

--------------------------
### isBooleanObject
**检测给定的变量是否是 Boolean 对象，而不是原始类型**

```JavaScript
static Boolean types.isBooleanObject(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Boolean 对象则返回 True

--------------------------
### isNumberObject
**检测给定的变量是否是 Number 对象，而不是原始类型**

```JavaScript
static Boolean types.isNumberObject(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Number 对象则返回 True

--------------------------
### isStringObject
**检测给定的变量是否是 String 对象，而不是原始类型**

```JavaScript
static Boolean types.isStringObject(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 String 对象则返回 True

--------------------------
### isSymbolObject
**检测给定的变量是否是 Symbol 对象，而不是原始类型**

```JavaScript
static Boolean types.isSymbolObject(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 Symbol 对象则返回 True

--------------------------
### isWeakMap
**检测给定的变量是否是 WeakMap 类型**

```JavaScript
static Boolean types.isWeakMap(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 WeakMap 类型则返回 True

--------------------------
### isWeakSet
**检测给定的变量是否是 WeakSet 类型**

```JavaScript
static Boolean types.isWeakSet(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 WeakSet 类型则返回 True

--------------------------
### isArrayBuffer
**检测给定的变量是否是 ArrayBuffer 类型**

```JavaScript
static Boolean types.isArrayBuffer(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 ArrayBuffer 类型则返回 True

--------------------------
### isArrayBufferView
**检测给定的变量是否是 ArrayBufferView 类型**

```JavaScript
static Boolean types.isArrayBufferView(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 ArrayBufferView 类型则返回 True

--------------------------
### isBigInt64Array
**检测给定的变量是否是 BigInt64Array 类型**

```JavaScript
static Boolean types.isBigInt64Array(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 BigInt64Array 类型则返回 True

--------------------------
### isBigUint64Array
**检测给定的变量是否是 BigUint64Array 类型**

```JavaScript
static Boolean types.isBigUint64Array(Value v);
```

调用参数:
* v: Value, 给定需要检测的变量

返回结果:
* Boolean, 如果是 BigUint64Array 类型则返回 True

