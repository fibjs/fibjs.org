# 模块 assert_strict
严格断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出

引用方法：

```JavaScript
var assert = require('assert').strict;
```

或者通过 [test](test.md) 模块引用：

```JavaScript
var test = require('test');
var assert = test.assert.strict;
```

或者通过 [test.setup](test.md#setup) 配置：

```JavaScript
require("test").setup();
```

## 对象
        
### ok
**测试数值为真，为假则断言失败，是 [assert](assert.md) 模块的别名**

```JavaScript
assert assert_strict.ok;
```

## 静态函数
        
### Function
**测试数值为真，为假则断言失败**

```JavaScript
static assert_strict.Function(Value actual = undefined,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### notOk
**测试数值为假，为真则断言失败**

```JavaScript
static assert_strict.notOk(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### equal
**测试数值等于预期值，不相等则断言失败**

```JavaScript
static assert_strict.equal(Value actual,
    Value expected,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* expected: Value, 预期的数值
* msg: String, 断言失败时的提示信息

--------------------------
### notEqual
**测试数值不等于预期值，相等则断言失败**

```JavaScript
static assert_strict.notEqual(Value actual,
    Value expected,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* expected: Value, 预期的数值
* msg: String, 断言失败时的提示信息

--------------------------
### strictEqual
**测试数值严格等于预期值，不相等则断言失败**

```JavaScript
static assert_strict.strictEqual(Value actual,
    Value expected,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* expected: Value, 预期的数值
* msg: String, 断言失败时的提示信息

--------------------------
### notStrictEqual
**测试数值不严格等于预期值，相等则断言失败**

```JavaScript
static assert_strict.notStrictEqual(Value actual,
    Value expected,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* expected: Value, 预期的数值
* msg: String, 断言失败时的提示信息

--------------------------
### deepEqual
**测试数值深度等于预期值，不相等则断言失败**

```JavaScript
static assert_strict.deepEqual(Value actual,
    Value expected,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* expected: Value, 预期的数值
* msg: String, 断言失败时的提示信息

--------------------------
### notDeepEqual
**测试数值不深度等于预期值，相等则断言失败**

```JavaScript
static assert_strict.notDeepEqual(Value actual,
    Value expected,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* expected: Value, 预期的数值
* msg: String, 断言失败时的提示信息

--------------------------
### deepStrictEqual
**测试数值严格深度等于预期值，不相等则断言失败**

```JavaScript
static assert_strict.deepStrictEqual(Value actual,
    Value expected,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* expected: Value, 预期的数值
* msg: String, 断言失败时的提示信息

--------------------------
### notDeepStrictEqual
**测试数值不严格深度等于预期值，相等则断言失败**

```JavaScript
static assert_strict.notDeepStrictEqual(Value actual,
    Value expected,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* expected: Value, 预期的数值
* msg: String, 断言失败时的提示信息

--------------------------
### match
**测试字符串包含预期字符串，否则断言失败**

```JavaScript
static assert_strict.match(String actual,
    RegExp expected,
    String msg = "");
```

调用参数:
* actual: String, 要测试的字符串
* expected: RegExp, 预期的正则表达式
* msg: String, 断言失败时的提示信息

--------------------------
### doesNotMatch
**测试字符串不包含预期字符串，否则断言失败**

```JavaScript
static assert_strict.doesNotMatch(String actual,
    RegExp expected,
    String msg = "");
```

调用参数:
* actual: String, 要测试的字符串
* expected: RegExp, 预期的正则表达式
* msg: String, 断言失败时的提示信息

--------------------------
### closeTo
**测试数值近似等于预期值，否则断言失败**

```JavaScript
static assert_strict.closeTo(Value actual,
    Value expected,
    Value delta,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* expected: Value, 预期的数值
* delta: Value, 近似的小数精度
* msg: String, 断言失败时的提示信息

--------------------------
### notCloseTo
**测试数值不近似等于预期值，否则断言失败**

```JavaScript
static assert_strict.notCloseTo(Value actual,
    Value expected,
    Value delta,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* expected: Value, 预期的数值
* delta: Value, 近似的小数精度
* msg: String, 断言失败时的提示信息

--------------------------
### lessThan
**测试数值小于预期值，大于或等于则断言失败**

```JavaScript
static assert_strict.lessThan(Value actual,
    Value expected,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* expected: Value, 预期的数值
* msg: String, 断言失败时的提示信息

--------------------------
### notLessThan
**测试数值不小于预期值，小于则断言失败**

```JavaScript
static assert_strict.notLessThan(Value actual,
    Value expected,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* expected: Value, 预期的数值
* msg: String, 断言失败时的提示信息

--------------------------
### greaterThan
**测试数值大于预期值，小于或等于则断言失败**

```JavaScript
static assert_strict.greaterThan(Value actual,
    Value expected,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* expected: Value, 预期的数值
* msg: String, 断言失败时的提示信息

--------------------------
### notGreaterThan
**测试数值不大于预期值，大于则断言失败**

```JavaScript
static assert_strict.notGreaterThan(Value actual,
    Value expected,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* expected: Value, 预期的数值
* msg: String, 断言失败时的提示信息

--------------------------
### exist
**测试变量存在，为假则断言失败**

```JavaScript
static assert_strict.exist(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### notExist
**测试变量不存在，为真则断言失败**

```JavaScript
static assert_strict.notExist(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isTrue
**测试数值为布尔值真，否则断言失败**

```JavaScript
static assert_strict.isTrue(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotTrue
**测试数值不为布尔值真，否则断言失败**

```JavaScript
static assert_strict.isNotTrue(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isFalse
**测试数值为布尔值假，否则断言失败**

```JavaScript
static assert_strict.isFalse(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotFalse
**测试数值不为布尔值假，否则断言失败**

```JavaScript
static assert_strict.isNotFalse(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNull
**测试数值为 Null，否则断言失败**

```JavaScript
static assert_strict.isNull(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotNull
**测试数值不为 Null，否则断言失败**

```JavaScript
static assert_strict.isNotNull(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isUndefined
**测试数值为 undefined，否则断言失败**

```JavaScript
static assert_strict.isUndefined(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isDefined
**测试数值不为 undefined，否则断言失败**

```JavaScript
static assert_strict.isDefined(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isFunction
**测试数值为函数，否则断言失败**

```JavaScript
static assert_strict.isFunction(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotFunction
**测试数值不为函数，否则断言失败**

```JavaScript
static assert_strict.isNotFunction(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isObject
**测试数值为对象，否则断言失败**

```JavaScript
static assert_strict.isObject(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotObject
**测试数值不为对象，否则断言失败**

```JavaScript
static assert_strict.isNotObject(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isArray
**测试数值为数组，否则断言失败**

```JavaScript
static assert_strict.isArray(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotArray
**测试数值不为数组，否则断言失败**

```JavaScript
static assert_strict.isNotArray(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isString
**测试数值为字符串，否则断言失败**

```JavaScript
static assert_strict.isString(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotString
**测试数值不为字符串，否则断言失败**

```JavaScript
static assert_strict.isNotString(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNumber
**测试数值为数字，否则断言失败**

```JavaScript
static assert_strict.isNumber(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotNumber
**测试数值不为数字，否则断言失败**

```JavaScript
static assert_strict.isNotNumber(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isBoolean
**测试数值为布尔，否则断言失败**

```JavaScript
static assert_strict.isBoolean(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotBoolean
**测试数值不为布尔，否则断言失败**

```JavaScript
static assert_strict.isNotBoolean(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### typeOf
**测试数值为给定类型，否则断言失败**

```JavaScript
static assert_strict.typeOf(Value actual,
    String type,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* type: String, 指定的类型
* msg: String, 断言失败时的提示信息

--------------------------
### notTypeOf
**测试数值不为给定类型，否则断言失败**

```JavaScript
static assert_strict.notTypeOf(Value actual,
    String type,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* type: String, 指定的类型
* msg: String, 断言失败时的提示信息

--------------------------
### property
**测试对象中包含指定属性，否则断言失败**

```JavaScript
static assert_strict.property(Value object,
    Value prop,
    String msg = "");
```

调用参数:
* object: Value, 要测试的对象
* prop: Value, 要测试的属性
* msg: String, 断言失败时的提示信息

--------------------------
### notProperty
**测试对象中不包含指定属性，否则断言失败**

```JavaScript
static assert_strict.notProperty(Value object,
    Value prop,
    String msg = "");
```

调用参数:
* object: Value, 要测试的对象
* prop: Value, 要测试的属性
* msg: String, 断言失败时的提示信息

--------------------------
### deepProperty
**深度测试对象中包含指定属性，否则断言失败**

```JavaScript
static assert_strict.deepProperty(Value object,
    Value prop,
    String msg = "");
```

调用参数:
* object: Value, 要测试的对象
* prop: Value, 要测试的属性，以“.”分割
* msg: String, 断言失败时的提示信息

--------------------------
### notDeepProperty
**深度测试对象中不包含指定属性，否则断言失败**

```JavaScript
static assert_strict.notDeepProperty(Value object,
    Value prop,
    String msg = "");
```

调用参数:
* object: Value, 要测试的对象
* prop: Value, 要测试的属性，以“.”分割
* msg: String, 断言失败时的提示信息

--------------------------
### propertyVal
**测试对象中指定属性的值为给定值，否则断言失败**

```JavaScript
static assert_strict.propertyVal(Value object,
    Value prop,
    Value value,
    String msg = "");
```

调用参数:
* object: Value, 要测试的对象
* prop: Value, 要测试的属性
* value: Value, 给定的值
* msg: String, 断言失败时的提示信息

--------------------------
### propertyNotVal
**测试对象中指定属性的值不为给定值，否则断言失败**

```JavaScript
static assert_strict.propertyNotVal(Value object,
    Value prop,
    Value value,
    String msg = "");
```

调用参数:
* object: Value, 要测试的对象
* prop: Value, 要测试的属性
* value: Value, 给定的值
* msg: String, 断言失败时的提示信息

--------------------------
### deepPropertyVal
**深度测试对象中指定属性的值为给定值，否则断言失败**

```JavaScript
static assert_strict.deepPropertyVal(Value object,
    Value prop,
    Value value,
    String msg = "");
```

调用参数:
* object: Value, 要测试的对象
* prop: Value, 要测试的属性，以“.”分割
* value: Value, 给定的值
* msg: String, 断言失败时的提示信息

--------------------------
### deepPropertyNotVal
**深度测试对象中指定属性的值不为给定值，否则断言失败**

```JavaScript
static assert_strict.deepPropertyNotVal(Value object,
    Value prop,
    Value value,
    String msg = "");
```

调用参数:
* object: Value, 要测试的对象
* prop: Value, 要测试的属性，以“.”分割
* value: Value, 给定的值
* msg: String, 断言失败时的提示信息

--------------------------
### throws
**测试给定的代码会抛出错误，未抛出则断言失败**

```JavaScript
static assert_strict.throws(Function block,
    String msg = "");
```

调用参数:
* block: Function, 指定测试的代码，以函数形式给出
* msg: String, 断言失败时的提示信息

--------------------------
**测试给定的代码会抛出错误，未抛出则断言失败**

```JavaScript
static assert_strict.throws(Function block,
    Value error,
    String msg = "");
```

调用参数:
* block: Function, 指定测试的代码，以函数形式给出
* error: Value, 指定的错误，可以是 RegExp/Function/Object/Error
* msg: String, 断言失败时的提示信息

--------------------------
### doesNotThrow
**测试给定的代码不会抛出错误，抛出则断言失败**

```JavaScript
static assert_strict.doesNotThrow(Function block,
    String msg = "");
```

调用参数:
* block: Function, 指定测试的代码，以函数形式给出
* msg: String, 断言失败时的提示信息

--------------------------
### rejects
**测试给定的代码会抛出错误，未抛出则断言失败**

```JavaScript
static Promise assert_strict.rejects(Function block,
    String msg = "");
```

调用参数:
* block: Function, 指定测试的代码，以函数形式给出
* msg: String, 断言失败时的提示信息

返回结果:
* Promise, 返回一个 Promise

--------------------------
**测试给定的代码会抛出错误，未抛出则断言失败**

```JavaScript
static Promise assert_strict.rejects(Function block,
    Value error,
    String msg = "");
```

调用参数:
* block: Function, 指定测试的代码，以函数形式给出
* error: Value, 指定的错误，可以是 RegExp/Function/Object/Error
* msg: String, 断言失败时的提示信息

返回结果:
* Promise, 返回一个 Promise

--------------------------
**测试给定的代码会抛出错误，未抛出则断言失败**

```JavaScript
static Promise assert_strict.rejects(Promise result,
    String msg = "");
```

调用参数:
* result: Promise, 指定测试的代码，以Promise形式给出
* msg: String, 断言失败时的提示信息

返回结果:
* Promise, 返回一个 Promise

--------------------------
**测试给定的代码会抛出错误，未抛出则断言失败**

```JavaScript
static Promise assert_strict.rejects(Promise result,
    Value error,
    String msg = "");
```

调用参数:
* result: Promise, 指定测试的代码，以Promise形式给出
* error: Value, 指定的错误，可以是 RegExp/Function/Object/Error
* msg: String, 断言失败时的提示信息

返回结果:
* Promise, 返回一个 Promise

--------------------------
### ifError
**如果参数为真，则抛出**

```JavaScript
static assert_strict.ifError(Value object = undefined);
```

调用参数:
* object: Value, 参数

## 静态属性
        
### AssertionError
**Function, 断言错误对象**

```JavaScript
static readonly Function assert_strict.AssertionError;
```

