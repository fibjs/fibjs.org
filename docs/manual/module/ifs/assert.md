# 模块 assert
断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出

引用方法：

```JavaScript
var assert = require('assert');
```

或者通过 [test](test.md) 模块引用：

```JavaScript
var test = require('test');
var assert = test.assert;
```

或者通过 test.setup 配置：

```JavaScript
require("test").setup();
```

## 对象
        
### ok
**测试数值为真，为假则断言失败，是 assert 模块的别名**

```JavaScript
assert assert.ok;
```

--------------------------
### strict
**严格测试模块，参见 [assert_strict](assert_strict.md) 模块**

```JavaScript
assert_strict assert.strict;
```

## 静态函数
        
### Function
**测试数值为真，为假则断言失败**

```JavaScript
static assert.Function(Value actual = undefined,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### fail
**断言失败，直接抛出错误**

```JavaScript
static assert.fail(String msg = "");
```

调用参数:
* msg: String, 断言失败时的提示信息

--------------------------
### notOk
**测试数值为假，为真则断言失败**

```JavaScript
static assert.notOk(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### equal
**测试数值等于预期值，不相等则断言失败**

```JavaScript
static assert.equal(Value actual,
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
static assert.notEqual(Value actual,
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
static assert.strictEqual(Value actual,
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
static assert.notStrictEqual(Value actual,
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
static assert.deepEqual(Value actual,
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
static assert.notDeepEqual(Value actual,
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
static assert.deepStrictEqual(Value actual,
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
static assert.notDeepStrictEqual(Value actual,
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
static assert.match(String actual,
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
static assert.doesNotMatch(String actual,
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
static assert.closeTo(Value actual,
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
static assert.notCloseTo(Value actual,
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
static assert.lessThan(Value actual,
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
static assert.notLessThan(Value actual,
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
static assert.greaterThan(Value actual,
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
static assert.notGreaterThan(Value actual,
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
static assert.exist(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### notExist
**测试变量不存在，为真则断言失败**

```JavaScript
static assert.notExist(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isTrue
**测试数值为布尔值真，否则断言失败**

```JavaScript
static assert.isTrue(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotTrue
**测试数值不为布尔值真，否则断言失败**

```JavaScript
static assert.isNotTrue(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isFalse
**测试数值为布尔值假，否则断言失败**

```JavaScript
static assert.isFalse(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotFalse
**测试数值不为布尔值假，否则断言失败**

```JavaScript
static assert.isNotFalse(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNull
**测试数值为 Null，否则断言失败**

```JavaScript
static assert.isNull(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotNull
**测试数值不为 Null，否则断言失败**

```JavaScript
static assert.isNotNull(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isUndefined
**测试数值为 undefined，否则断言失败**

```JavaScript
static assert.isUndefined(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isDefined
**测试数值不为 undefined，否则断言失败**

```JavaScript
static assert.isDefined(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isFunction
**测试数值为函数，否则断言失败**

```JavaScript
static assert.isFunction(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotFunction
**测试数值不为函数，否则断言失败**

```JavaScript
static assert.isNotFunction(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isObject
**测试数值为对象，否则断言失败**

```JavaScript
static assert.isObject(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotObject
**测试数值不为对象，否则断言失败**

```JavaScript
static assert.isNotObject(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isArray
**测试数值为数组，否则断言失败**

```JavaScript
static assert.isArray(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotArray
**测试数值不为数组，否则断言失败**

```JavaScript
static assert.isNotArray(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isString
**测试数值为字符串，否则断言失败**

```JavaScript
static assert.isString(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotString
**测试数值不为字符串，否则断言失败**

```JavaScript
static assert.isNotString(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNumber
**测试数值为数字，否则断言失败**

```JavaScript
static assert.isNumber(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotNumber
**测试数值不为数字，否则断言失败**

```JavaScript
static assert.isNotNumber(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isBoolean
**测试数值为布尔，否则断言失败**

```JavaScript
static assert.isBoolean(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### isNotBoolean
**测试数值不为布尔，否则断言失败**

```JavaScript
static assert.isNotBoolean(Value actual,
    String msg = "");
```

调用参数:
* actual: Value, 要测试的数值
* msg: String, 断言失败时的提示信息

--------------------------
### typeOf
**测试数值为给定类型，否则断言失败**

```JavaScript
static assert.typeOf(Value actual,
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
static assert.notTypeOf(Value actual,
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
static assert.property(Value object,
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
static assert.notProperty(Value object,
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
static assert.deepProperty(Value object,
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
static assert.notDeepProperty(Value object,
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
static assert.propertyVal(Value object,
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
static assert.propertyNotVal(Value object,
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
static assert.deepPropertyVal(Value object,
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
static assert.deepPropertyNotVal(Value object,
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
static assert.throws(Function block,
    String msg = "");
```

调用参数:
* block: Function, 指定测试的代码，以函数形式给出
* msg: String, 断言失败时的提示信息

--------------------------
**测试给定的代码会抛出错误，未抛出则断言失败**

```JavaScript
static assert.throws(Function block,
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
static assert.doesNotThrow(Function block,
    String msg = "");
```

调用参数:
* block: Function, 指定测试的代码，以函数形式给出
* msg: String, 断言失败时的提示信息

--------------------------
### rejects
**测试给定的代码会抛出错误，未抛出则断言失败**

```JavaScript
static Promise assert.rejects(Function block,
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
static Promise assert.rejects(Function block,
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
static Promise assert.rejects(Promise result,
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
static Promise assert.rejects(Promise result,
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
static assert.ifError(Value object = undefined);
```

调用参数:
* object: Value, 参数

## 静态属性
        
### AssertionError
**Function, 断言错误对象**

```JavaScript
static readonly Function assert.AssertionError;
```

