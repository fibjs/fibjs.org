# Module assert
The assert [module](module.md) provides the legacy comparison-mode assertion functions used to

[test](test.md) invariants in unit tests and in application code

A failing assertion throws an AssertionError; a passing assertion returns undefined, so
assertions are statements rather than conditions. Every check has a negated counterpart
(`equal`/`notEqual`, `property`/`notProperty`, `throws`/`doesNotThrow`), and the strict
comparison variants live in the [assert_strict](assert_strict.md) [module](module.md), available as `assert.strict`.

Main capabilities:

- **Truthiness and failure**: `ok` (the callable [module](module.md) itself), `notOk`, `exist`, `notExist`,
  `fail`;
- **Loose comparison**: `equal`, `notEqual`, `closeTo`, `notCloseTo`, `lessThan`,
  `notLessThan`, `greaterThan`, `notGreaterThan`;
- **Strict comparison**: `strictEqual`, `notStrictEqual`;
- **Deep comparison**: `deepEqual`, `notDeepEqual`, `deepStrictEqual`, `notDeepStrictEqual`;
- **Regular expression matching**: `match`, `doesNotMatch`;
- **Type and shape checks**: `isTrue` through `isNotBoolean`, `typeOf`, `notTypeOf`,
  `property`, `deepProperty`, `propertyVal`, `deepPropertyVal` and their negations;
- **Exception checks**: `throws`, `doesNotThrow`, `rejects`;
- **Error helpers**: `AssertionError`, `ifError`, and `strict`, the strict [module](module.md).

Concepts:

- **Loose comparison mode**: `equal`/`notEqual` use the JavaScript `==`/`!=` operators, so
  `1` equals `'1'` and `null` equals `undefined`; `deepEqual`/`notDeepEqual` apply the same
  loose comparison to nested values. `strictEqual`/`notStrictEqual` and
  `deepStrictEqual`/`notDeepStrictEqual` use `===`, and the strict [module](module.md) maps the loose
  names onto them (see [assert_strict](assert_strict.md)).
- **AssertionError**: every failure throws an AssertionError whose fields are `name`
  ('AssertionError'), `code` ('ERR_ASSERTION'), `message`, `generatedMessage` and the
  comparison data `actual`, `expected` and `operator`. `assert.AssertionError` is the
  constructor, so `err instanceof [assert.AssertionError](assert.md#AssertionError)` identifies a failure.
- **[Message](../../object/ifs/Message.md) argument**: the optional last argument is the failure message; a string (or
  String [object](../../object/ifs/object.md)) is used as-is, a value with its own string form (a Date, a [Buffer](../../object/ifs/Buffer.md), an
  [object](../../object/ifs/object.md) with its own toString) is rendered, and other values are ignored. When a message
  was supplied `generatedMessage` is false, except for a `throws`/`rejects` failure where
  nothing was thrown or rejected - that always reports the generated message.
- **Deep comparison**: `deepEqual` and `deepStrictEqual` compare Dates by time value,
  RegExps by source and flags, arrays element by element, Buffers through their equals
  method, and other objects by their enumerable property names - including inherited ones -
  where both objects must have the same names; cyclic structures are supported,
  prototypes are not compared and symbol-keyed properties are ignored.
- **Exception checks**: `throws`/`doesNotThrow` call the block synchronously and require a
  function; `throws` accepts an optional expected error - a RegExp, an error class, an
  arrow validation function or a property filter [object](../../object/ifs/object.md). `rejects` accepts a promise or a
  function returning a promise and returns a promise, so it must be awaited.

Import:

```JavaScript
const assert = require('assert');
// the strict variant: require('assert/strict'), or assert.strict below
```

Example 1 — truthiness checks and loose comparison:

```JavaScript
const assert = require('assert');

assert.ok(1);
assert.notOk('');
assert.equal(1, '1'); // loose equality: passes
assert.notEqual({}, {}); // distinct references: passes
console.log('checks passed');
```

Example 2 — catch a failure and inspect its AssertionError fields:

```JavaScript
const assert = require('assert');

try {
    assert.strictEqual(1, '1');
} catch (err) {
    console.log(err.name); // AssertionError
    console.log(err.code); // ERR_ASSERTION
    console.log(err.operator); // strictEqual
    console.log(JSON.stringify([err.actual, err.expected])); // [1,"1"]
    console.log(err instanceof assert.AssertionError); // true
}
```

Example 3 — exception and rejection checks:

```JavaScript
const assert = require('assert');

assert.throws(() => JSON.parse('{'), SyntaxError);
assert.throws(() => {
    throw new Error('boom');
}, /boom/);
assert.doesNotThrow(() => JSON.parse('{}'));

(async () => {
    await assert.rejects(Promise.reject(new TypeError('bad')), TypeError);
    await assert.rejects(async () => {
        throw new Error('later');
    }, /later/);
    console.log('all exceptions matched');
})();
```

Notes:

- `assert` and `assert.ok` are the same callable [object](../../object/ifs/object.md); both are aliases of the `operator`
  member, so `assert(value, message)` is the truthiness check.
- A comparison whose internal conversion throws (for example an [object](../../object/ifs/object.md) with a throwing
  valueOf) is reported as a failed AssertionError, while Node.js propagates the conversion
  error.
- `throws` treats a function whose `prototype.constructor` is itself as an error class,
  not as a validation function; pass an arrow function to validate an error.
- Node.js `doesNotReject` and `partialDeepStrictEqual` are not provided; `fail` takes
  only a message in both implementations.
- See the [assert_strict](assert_strict.md) [module](module.md) for the strict comparison mode and the differences it maps.

## Objects
        
### ok
**Tests that the value is truthy; the assertion fails if it is false; an alias of the [module](module.md)**

```JavaScript
assert assert.ok;
```

Falsy values are false, 0, '', null, undefined and NaN. `assert.ok` is the assert
[module](module.md) [object](../../object/ifs/object.md) itself (`[assert.ok](assert.md#ok) === assert`), so `[assert.ok](assert.md#ok)(value, message)` is the
same call as `assert(value, message)`; the failure carries the operator 'ok'.

Example — pass a truthy value and catch a falsy one:

```JavaScript
const assert = require('assert');

assert.ok(1);
assert.ok('text', 'a non-empty string is truthy');
try {
    assert.ok(0);
} catch (err) {
    console.log(err.message); // Expected the expression to be truthy
}
```

--------------------------
### strict
**Strict testing [module](module.md), see the [assert_strict](assert_strict.md) [module](module.md)**

```JavaScript
assert_strict assert.strict;
```

The same [object](../../object/ifs/object.md) as `require('assert/strict')`, also reachable as
`require('fibjs:assert/strict')` and `require('node:assert/strict')`; its `equal` and
`deepEqual` use strict comparison.

## Static Methods
        
### operator
**The callable [module](module.md) [object](../../object/ifs/object.md) itself; tests that the value is truthy**

```JavaScript
static assert.operator(Value actual = undefined,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

`assert(value, message)` is the same check as `ok` and the failure carries the
operator 'ok'. The parameter defaults to undefined, so `assert()` fails.

--------------------------
### fail
**Fails unconditionally and throws a generated AssertionError**

```JavaScript
static assert.fail(Value msg = undefined);
```

Parameters:
* msg: Value, the message when the assertion fails

The error carries the operator 'fail' and no actual/expected values; without a
message the generated message is 'Failed'. The signature matches the current
Node.js `assert.fail(message)`; the legacy four-argument form of older releases is
not supported.

--------------------------
### notOk
**Tests that the value is falsy; the assertion fails if it is true**

```JavaScript
static assert.notOk(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Falsy values are false, 0, '', null, undefined and NaN; the check is the exact
negation of `ok` and the failure carries the operator 'notOk'. Node.js has no notOk,
the equivalent is `assert.ok(!value)`.

--------------------------
### equal
**Tests that the value loosely equals the expected value**

```JavaScript
static assert.equal(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

Uses the JavaScript `==` operator: `1`, `'1'` and `new Number(1)` are equal, null
equals undefined, and objects are equal only when they are the same reference. NaN
is never equal to anything, including itself. For type-safe comparison use
`strictEqual`, and see `deepEqual` for nested values. Node.js marks [assert.equal](assert.md#equal) as
legacy; the failure carries the operator '=='.

--------------------------
### notEqual
**Tests that the value does not loosely equal the expected value**

```JavaScript
static assert.notEqual(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

The exact negation of `equal`: two references to the same [object](../../object/ifs/object.md) are equal, so
`notEqual(obj, obj)` fails. The failure carries the operator '!=' and, like Node.js,
the default message renders as `Expected X != Y`.

--------------------------
### strictEqual
**Tests that the value strictly equals the expected value**

```JavaScript
static assert.strictEqual(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

Uses the JavaScript `===` operator: `1` and `'1'` are not equal, NaN is not equal to
NaN, +0 and -0 are equal, and objects must be the same reference. On failure a diff
between actual and expected is generated and a custom message is prepended to it,
matching Node.js. The failure carries the operator 'strictEqual'.

--------------------------
### notStrictEqual
**Tests that the value does not strictly equal the expected value**

```JavaScript
static assert.notStrictEqual(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

The exact negation of `strictEqual`: `notStrictEqual(1, '1')` passes while
`notStrictEqual(obj, obj)` fails. The failure carries the operator 'notStrictEqual'
and a custom message replaces the generated one.

--------------------------
### deepEqual
**Tests that the value loosely deeply equals the expected value**

```JavaScript
static assert.deepEqual(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

A structural comparison extending the loose `==` rule: Dates are compared by time
value, RegExps by source and flags, arrays by length and elements, Buffers through
their equals method, and other objects by their enumerable property names - including
inherited ones - where both objects must have the same names and loosely equal
values. Prototypes are not compared, symbol-keyed properties are ignored, cyclic
structures are supported and functions are compared by reference. So
`deepEqual({ a: 1 }, { a: '1' })` passes while `deepStrictEqual` fails. Node.js marks
deepEqual as legacy. The failure carries the operator 'deepEqual' and a custom
message replaces the generated diff.

Example — loose deep comparison of nested values, Dates and Buffers:

```JavaScript
const assert = require('assert');

assert.deepEqual({
    a: 1,
    b: [2, '3']
}, {
    a: '1',
    b: ['2', 3]
});
assert.deepEqual(new Date(1000), new Date(1000));
assert.deepEqual(Buffer.from('abc'), Buffer.from('abc'));
assert.notDeepEqual({
    a: 1
}, {
    a: 2
});
console.log('loose deep comparison passed');
```

--------------------------
### notDeepEqual
**Tests that the value does not loosely deeply equal the expected value**

```JavaScript
static assert.notDeepEqual(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

The exact negation of `deepEqual`; structurally different values pass and
structurally identical values fail. The failure carries the operator 'notDeepEqual'
and a custom message replaces the generated one.

--------------------------
### deepStrictEqual
**Tests that the value strictly deeply equals the expected value**

```JavaScript
static assert.deepStrictEqual(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

Like `deepEqual`, but leaf values are compared with `===`, so
`deepStrictEqual({ a: 1 }, { a: '1' })` fails. Prototypes are still not compared and
symbol-keyed properties are still ignored, which differs from Node.js where
deepStrictEqual also compares prototypes and symbols. A custom message is prepended
to the generated diff; the failure carries the operator 'deepStrictEqual'.

--------------------------
### notDeepStrictEqual
**Tests that the value does not strictly deeply equal the expected value**

```JavaScript
static assert.notDeepStrictEqual(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

The exact negation of `deepStrictEqual`: values that differ in type at the leaves
pass and structurally, strictly identical values fail. The failure carries the
operator 'notDeepStrictEqual' and a custom message replaces the generated one.

--------------------------
### match
**Tests that the string matches the expected regular expression**

```JavaScript
static assert.match(String actual,
    RegExp expected,
    Value msg = undefined);
```

Parameters:
* actual: String, the string to [test](test.md)
* expected: RegExp, the expected regular expression
* msg: Value, the message when the assertion fails

The actual value is declared String, so a String [object](../../object/ifs/object.md), a Date (its ISO form), a
[Buffer](../../object/ifs/Buffer.md) (its utf8 bytes) and an [object](../../object/ifs/object.md) with its own toString are converted; values
without a string form (numbers, arrays, plain objects, null, undefined) fail with a
TypeError [20005]. Node.js requires a real string and throws ERR_INVALID_ARG_TYPE.
The failure carries the operator 'match', with the actual string and the RegExp in the
respective fields.

Example — matching and the negated form:

```JavaScript
const assert = require('assert');

assert.match('fibjs 2026', /\d{4}/);
assert.doesNotMatch('fibjs', /^node/);
try {
    assert.match('abc', /^\d+$/);
} catch (err) {
    console.log(err.message); // Expected "abc" to match /^\d+$/
}
```

--------------------------
### doesNotMatch
**Tests that the string does not match the expected regular expression**

```JavaScript
static assert.doesNotMatch(String actual,
    RegExp expected,
    Value msg = undefined);
```

Parameters:
* actual: String, the string to [test](test.md)
* expected: RegExp, the expected regular expression
* msg: Value, the message when the assertion fails

The exact negation of `match`, with the same string conversion rules and TypeError
[20005] for values without a string form. The failure carries the operator
'doesNotMatch' and the default message renders as `Expected "X" not to match /re/`.

--------------------------
### closeTo
**Tests that the value is approximately equal to the expected value**

```JavaScript
static assert.closeTo(Value actual,
    Value expected,
    Value delta,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* delta: Value, the allowed absolute difference
* msg: Value, the message when the assertion fails

The check is `Math.abs(actual - expected) <= delta`, so the bound is inclusive; both
values and the delta are converted with Number(), and a value that converts to NaN
(including a non-numeric string) throws a TypeError [20004] instead of failing the
assertion. Node.js has no closeTo.

--------------------------
### notCloseTo
**Tests that the value is not approximately equal to the expected value**

```JavaScript
static assert.notCloseTo(Value actual,
    Value expected,
    Value delta,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* delta: Value, the allowed absolute difference
* msg: Value, the message when the assertion fails

The exact negation of `closeTo` (`Math.abs(actual - expected) > delta`); the same
Number() conversion applies and a NaN conversion throws a TypeError [20004].

--------------------------
### lessThan
**Tests that the value is less than the expected value**

```JavaScript
static assert.lessThan(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

When either side is a number (or a string that converts to one, such as '10' next to
a number) the comparison is numeric; when both sides are non-numeric strings it is a
lexicographic UTF-8 comparison; a value that cannot be converted to a number (an
[object](../../object/ifs/object.md) or an invalid numeric string against a number) throws a TypeError [20004].
Node.js has no lessThan; with Node.js `assert.ok(a < b)` is the equivalent.

--------------------------
### notLessThan
**Tests that the value is not less than the expected value**

```JavaScript
static assert.notLessThan(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

The negation of `lessThan` (actual >= expected) with the same numeric/lexicographic
conversion rules and TypeError [20004] for values that cannot be compared.

--------------------------
### greaterThan
**Tests that the value is greater than the expected value**

```JavaScript
static assert.greaterThan(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

The mirror of `lessThan` (actual > expected) with the same numeric/lexicographic
conversion rules and TypeError [20004] for values that cannot be compared. The
generated failure message and operator field reuse the notLessThan wording ('to be
at least'). Node.js has no greaterThan.

--------------------------
### notGreaterThan
**Tests that the value is not greater than the expected value**

```JavaScript
static assert.notGreaterThan(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

The negation of `greaterThan` (actual <= expected) with the same numeric/lexicographic
conversion rules and TypeError [20004] for values that cannot be compared.

--------------------------
### exist
**Tests that the variable exists**

```JavaScript
static assert.exist(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

A value exists when it is neither null nor undefined; false, 0, '' and NaN exist.
Node.js has no exist; the equivalent is `assert.ok(value !== null && value !==
undefined)`.

--------------------------
### notExist
**Tests that the variable does not exist**

```JavaScript
static assert.notExist(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `exist`: only null and undefined do not exist, so 0, '' and
false all fail this check.

--------------------------
### isTrue
**Tests that the value is boolean true**

```JavaScript
static assert.isTrue(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The check is strict: 1, 'true' and new Boolean(true) all fail. Node.js has no isTrue;
the equivalent is `assert.strictEqual(value, true)`.

--------------------------
### isNotTrue
**Tests that the value is not boolean true**

```JavaScript
static assert.isNotTrue(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isTrue`: every value except the true primitive passes,
including 1 and new Boolean(true).

--------------------------
### isFalse
**Tests that the value is boolean false**

```JavaScript
static assert.isFalse(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The check is strict: 0, '' and new Boolean(false) all fail. Node.js has no isFalse;
the equivalent is `assert.strictEqual(value, false)`.

--------------------------
### isNotFalse
**Tests that the value is not boolean false**

```JavaScript
static assert.isNotFalse(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isFalse`: every value except the false primitive passes,
including 0 and new Boolean(false).

--------------------------
### isNull
**Tests that the value is Null**

```JavaScript
static assert.isNull(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Only the null primitive passes; undefined is not null and fails this check, use
`isUndefined` for it. Node.js has no isNull.

--------------------------
### isNotNull
**Tests that the value is not Null**

```JavaScript
static assert.isNotNull(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isNull`; since only null fails isNull, every other value
passes, undefined included.

--------------------------
### isUndefined
**Tests that the value is undefined**

```JavaScript
static assert.isUndefined(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Only the undefined primitive passes; null is defined for this check and fails it,
use `isNull` for null. Node.js has no isUndefined.

--------------------------
### isDefined
**Tests that the value is not undefined**

```JavaScript
static assert.isDefined(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isUndefined`; null and every other value pass. Node.js has no
isDefined.

--------------------------
### isFunction
**Tests that the value is a function**

```JavaScript
static assert.isFunction(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Classes, async functions and generator functions are functions too. Node.js has no
isFunction; the equivalent is `assert.strictEqual(typeof value, 'function')`.

--------------------------
### isNotFunction
**Tests that the value is not a function**

```JavaScript
static assert.isNotFunction(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isFunction`: every value that cannot be called passes, so
objects and arrays pass while classes fail.

--------------------------
### isObject
**Tests that the value is an [object](../../object/ifs/object.md)**

```JavaScript
static assert.isObject(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Arrays and functions count as objects, and boxed primitives (new Number(1)) count
too; null, undefined, primitives and symbols do not. `typeOf(value, '[object](../../object/ifs/object.md)')`
delegates to this check, so the same widening applies. Node.js has no isObject.

--------------------------
### isNotObject
**Tests that the value is not an [object](../../object/ifs/object.md)**

```JavaScript
static assert.isNotObject(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isObject`: primitives, null, undefined and symbols pass,
while arrays, functions and boxed primitives fail.

--------------------------
### isArray
**Tests that the value is an array**

```JavaScript
static assert.isArray(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Uses Array.isArray semantics: an Array subclass passes, while typed arrays and
[Buffer](../../object/ifs/Buffer.md) do not. Node.js has no isArray; the equivalent is
`assert.ok(Array.isArray(value))`.

--------------------------
### isNotArray
**Tests that the value is not an array**

```JavaScript
static assert.isNotArray(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isArray`: any value that is not an Array passes, including
typed arrays, [Buffer](../../object/ifs/Buffer.md) and arguments objects.

--------------------------
### isString
**Tests that the value is a string**

```JavaScript
static assert.isString(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Both a string primitive and a String [object](../../object/ifs/object.md) pass; a [Buffer](../../object/ifs/Buffer.md) does not (it is a
Uint8Array). Node.js has no isString.

--------------------------
### isNotString
**Tests that the value is not a string**

```JavaScript
static assert.isNotString(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isString`: a [Buffer](../../object/ifs/Buffer.md), a number and a String-like [object](../../object/ifs/object.md)
without the String prototype all pass.

--------------------------
### isNumber
**Tests that the value is a number**

```JavaScript
static assert.isNumber(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The check is on the primitive type: NaN passes, while a Number [object](../../object/ifs/object.md) does not.
Node.js has no isNumber; the equivalent is `assert.strictEqual(typeof value,
'number')`.

--------------------------
### isNotNumber
**Tests that the value is not a number**

```JavaScript
static assert.isNotNumber(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isNumber`: any value that is not a number primitive passes,
including a Number [object](../../object/ifs/object.md) and NaN-free numeric strings.

--------------------------
### isBoolean
**Tests that the value is a boolean**

```JavaScript
static assert.isBoolean(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Only the true and false primitives pass; a Boolean [object](../../object/ifs/object.md) does not. Node.js has no
isBoolean; the equivalent is `assert.strictEqual(typeof value, 'boolean')`.

--------------------------
### isNotBoolean
**Tests that the value is not a boolean**

```JavaScript
static assert.isNotBoolean(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isBoolean`: everything except the true and false primitives
passes, including 0, '' and a Boolean [object](../../object/ifs/object.md).

--------------------------
### typeOf
**Tests that the value is of the given type**

```JavaScript
static assert.typeOf(Value actual,
    String type,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* type: String, the specified type
* msg: Value, the message when the assertion fails

The accepted type names are 'array', 'function', 'string', '[object](../../object/ifs/object.md)', 'number',
'boolean', 'null' and 'undefined'; '[object](../../object/ifs/object.md)' matches arrays and functions as well
because it delegates to `isObject`. Any other name throws a TypeError [20004]
instead of failing the assertion. Node.js has no typeOf.

--------------------------
### notTypeOf
**Tests that the value is not of the given type**

```JavaScript
static assert.notTypeOf(Value actual,
    String type,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* type: String, the specified type
* msg: Value, the message when the assertion fails

The exact negation of `typeOf`, accepting the same eight type names and throwing a
TypeError [20004] for anything else; arrays fail `notTypeOf(value, '[object](../../object/ifs/object.md)')`
because typeOf/[object](../../object/ifs/object.md) delegates to `isObject`.

--------------------------
### property
**Tests that the [object](../../object/ifs/object.md) contains the specified property**

```JavaScript
static assert.property(Value object,
    Value prop,
    Value msg = undefined);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to [test](test.md)
* prop: Value, the property to [test](test.md)
* msg: Value, the message when the assertion fails

The property is looked up with the JavaScript in operator, so inherited properties
count as well. The receiver must be an [object](../../object/ifs/object.md) and the property name must be a
string; other values throw a TypeError [20004]. A primitive string receiver passes
the type check but crashes the [process](process.md) in this version, so pass objects only. The
failure carries the operator 'property'; Node.js has no property.

Example — own, inherited and nested properties:

```JavaScript
const assert = require('assert');
const user = {
    name: 'lion',
    address: {
        city: 'shanghai'
    }
};

assert.property(user, 'name');
assert.property(user, 'toString'); // inherited from Object.prototype
assert.notProperty(user, 'email');
assert.deepProperty(user, 'address.city');
assert.deepPropertyVal(user, 'address.city', 'shanghai');
assert.propertyNotVal(user, 'name', 'tiger');
console.log('property checks passed');
```

--------------------------
### notProperty
**Tests that the [object](../../object/ifs/object.md) does not contain the specified property**

```JavaScript
static assert.notProperty(Value object,
    Value prop,
    Value msg = undefined);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to [test](test.md)
* prop: Value, the property to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `property`; the same [object](../../object/ifs/object.md)/property type requirements and
TypeError [20004] apply, and an inherited property fails this check.

--------------------------
### deepProperty
**Deeply tests that the [object](../../object/ifs/object.md) contains the specified property**

```JavaScript
static assert.deepProperty(Value object,
    Value prop,
    Value msg = undefined);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to [test](test.md)
* prop: Value, the property to [test](test.md), separated by "."
* msg: Value, the message when the assertion fails

The property name is split on '.', so each segment names one level; a [path](path.md) like
'a.b.0' reaches array elements, while a property name containing a dot cannot be
addressed. A missing intermediate value fails the assertion (it does not throw); the
receiver must be an [object](../../object/ifs/object.md) and the [path](path.md) a string, otherwise a TypeError [20004] is
thrown. Node.js has no deepProperty.

--------------------------
### notDeepProperty
**Deeply tests that the [object](../../object/ifs/object.md) does not contain the specified property**

```JavaScript
static assert.notDeepProperty(Value object,
    Value prop,
    Value msg = undefined);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to [test](test.md)
* prop: Value, the property to [test](test.md), separated by "."
* msg: Value, the message when the assertion fails

The exact negation of `deepProperty`; a [path](path.md) through a missing intermediate value
counts as absent and passes this check.

--------------------------
### propertyVal
**Tests that the specified property in the [object](../../object/ifs/object.md) has the given value**

```JavaScript
static assert.propertyVal(Value object,
    Value prop,
    Value value,
    Value msg = undefined);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to [test](test.md)
* prop: Value, the property to [test](test.md)
* value: Value, the given value
* msg: Value, the message when the assertion fails

The value is compared with strict equality even though the [module](module.md) is loose, so
`propertyVal(obj, 'a', 1)` fails when the property holds '1'; a missing property
yields undefined and therefore fails. Node.js has no propertyVal.

--------------------------
### propertyNotVal
**Tests that the specified property in the [object](../../object/ifs/object.md) does not have the given value**

```JavaScript
static assert.propertyNotVal(Value object,
    Value prop,
    Value value,
    Value msg = undefined);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to [test](test.md)
* prop: Value, the property to [test](test.md)
* value: Value, the given value
* msg: Value, the message when the assertion fails

The exact negation of `propertyVal` with the same strict comparison: a missing
property (undefined) passes whenever the given value is not undefined.

--------------------------
### deepPropertyVal
**Deeply tests that the specified property in the [object](../../object/ifs/object.md) has the given value**

```JavaScript
static assert.deepPropertyVal(Value object,
    Value prop,
    Value value,
    Value msg = undefined);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to [test](test.md)
* prop: Value, the property to [test](test.md), separated by "."
* value: Value, the given value
* msg: Value, the message when the assertion fails

Like `propertyVal` with a dotted [path](path.md): the value is compared with strict equality,
so a numeric property compared against its string form fails. The receiver must be
an [object](../../object/ifs/object.md) and the [path](path.md) a string, otherwise a TypeError [20004] is thrown.

--------------------------
### deepPropertyNotVal
**Deeply tests that the specified property in the [object](../../object/ifs/object.md) does not have the given value**

```JavaScript
static assert.deepPropertyNotVal(Value object,
    Value prop,
    Value value,
    Value msg = undefined);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to [test](test.md)
* prop: Value, the property to [test](test.md), separated by "."
* value: Value, the given value
* msg: Value, the message when the assertion fails

The exact negation of `deepPropertyVal`; a missing intermediate value or a
different (strict) value passes, and the same TypeError [20004] applies to
non-[object](../../object/ifs/object.md) receivers and non-string paths.

--------------------------
### throws
**Tests that the given code throws an error**

```JavaScript
static assert.throws(Function() block,
    Value error,
    Value msg = undefined);
```

Parameters:
* block: Function(), the code to [test](test.md), given as a function
* error: Value, the expected error as a RegExp, error class, arrow validator or filter [object](../../object/ifs/object.md)
* msg: Value, the message when the assertion fails

The block is called synchronously without arguments; when it returns instead of
throwing, the assertion fails with 'Missing expected exception'. The error argument
filters the thrown value:

- a RegExp matches the string form of the thrown value;
- an error class - a function whose `prototype.constructor` is itself, such as
  TypeError - passes when the thrown value is an instance of it;
- any other function is a validation function: it is called with the thrown value and
  must return exactly true; use an arrow function for this form, because a normal
  function is treated as a class (Node.js accepts normal functions as validators);
- an [object](../../object/ifs/object.md) is a property filter: each own property of the filter is compared with
  the same property of the thrown value, RegExp values match the string form, other
  values use deepStrictEqual, and a property whose actual value is undefined is
  skipped (Node.js compares it).

An error thrown inside a validation function is propagated as-is. The failure carries
the operator 'throws' with the filter in expected and the thrown value in actual; a
custom message is used when a filter was supplied and did not match. Node.js has the
same filter forms but also appends a 'Caught error' excerpt.

Example — class, RegExp and validation function filters:

```JavaScript
const assert = require('assert');

assert.throws(() => JSON.parse('{'), SyntaxError);
assert.throws(() => {
    throw new Error('boom');
}, /boom/);
assert.throws(() => {
    throw new TypeError('bad');
}, (err) => err.message === 'bad');
try {
    assert.throws(() => {});
} catch (err) {
    console.log(err.message); // Missing expected exception
}
```

--------------------------
**Tests that the given code throws an error, with only a message**

```JavaScript
static assert.throws(Function() block,
    Value msg = undefined);
```

Parameters:
* block: Function(), the code to [test](test.md), given as a function
* msg: Value, the message when the assertion fails

Equivalent to calling the three-argument overload with an undefined error filter.
The message is ignored when nothing is thrown, because that failure always reports
the generated 'Missing expected exception' text; use a filter to have the message
rendered. Node.js treats `assert.throws(block, 'message')` as a message, while fibjs
binds the second argument to the error filter, so prefer passing the filter
explicitly.

--------------------------
### doesNotThrow
**Tests that the given code does not throw an error**

```JavaScript
static assert.doesNotThrow(Function() block,
    Value msg = undefined);
```

Parameters:
* block: Function(), the code to [test](test.md), given as a function
* msg: Value, the message when the assertion fails

The block is called synchronously without arguments and any thrown value fails the
assertion; there is no error filter, so to allow some errors and reject others use
`throws` with a validation function. The caught value is kept in the actual field,
the failure carries the operator 'doesNotThrow' and a custom message replaces the
default 'Got unwanted exception'. Node.js has the same shape.

--------------------------
### rejects
**Tests that the given code throws an error; the assertion fails if nothing is thrown**

```JavaScript
static Promise assert.rejects(Function() block,
    Value error,
    Value msg = undefined);
```

Parameters:
* block: Function(), the code to [test](test.md), given as a function returning a promise
* error: Value, the expected error as a RegExp, error class, arrow validator or filter [object](../../object/ifs/object.md)
* msg: Value, the message when the assertion fails

Returns:
* Promise, returns a Promise

The block is called synchronously without arguments: an error thrown by the call
rejects the returned promise with that error, and a return value that is not a
promise rejects it with a TypeError whose message is 'The rsult of the function is
not a promise.' (the typo is in the generated message). When the awaited promise
rejects, the error argument filters the rejection exactly like `throws` (RegExp,
error class, arrow validator or property filter [object](../../object/ifs/object.md)).

The returned promise resolves to undefined when the rejection matched and rejects
with the generated AssertionError otherwise; the operator is 'rejects'. Node.js
returns a promise with the same shape but rejects with ERR_INVALID_RETURN_VALUE for
a non-promise result.

Example — await a function and a promise rejection with different filters:

```JavaScript
const assert = require('assert');

(async () => {
    await assert.rejects(Promise.reject(new TypeError('bad input')), TypeError);
    await assert.rejects(async () => {
        throw new Error('later');
    }, /later/);
    await assert.rejects(() => Promise.reject(new Error('from fn')), (err) => {
        return err.message === 'from fn';
    });
    console.log('all rejections matched');
})();
```

--------------------------
**Tests that the given code rejects, with only a message**

```JavaScript
static Promise assert.rejects(Function() block,
    Value msg = undefined);
```

Parameters:
* block: Function(), the code to [test](test.md), given as a function returning a promise
* msg: Value, the message when the assertion fails

Returns:
* Promise, returns a Promise

Equivalent to the three-argument overload with an undefined error filter; the
message is ignored when nothing is rejected, because that failure always reports
the generated 'Missing expected rejection' text.

--------------------------
**Tests that the given promise rejects**

```JavaScript
static Promise assert.rejects(Promise result,
    Value error,
    Value msg = undefined);
```

Parameters:
* result: Promise, the code to [test](test.md), given as a Promise
* error: Value, the expected error as a RegExp, error class, arrow validator or filter [object](../../object/ifs/object.md)
* msg: Value, the message when the assertion fails

Returns:
* Promise, returns a Promise

The promise is awaited; a rejection is filtered by the error argument as in the
function overload, and a resolution fails the assertion with 'Missing expected
rejection'. The returned promise resolves to undefined when the rejection matched
and rejects with the generated AssertionError otherwise. Node.js has the same form.

--------------------------
**Tests that the given promise rejects, with only a message**

```JavaScript
static Promise assert.rejects(Promise result,
    Value msg = undefined);
```

Parameters:
* result: Promise, the code to [test](test.md), given as a Promise
* msg: Value, the message when the assertion fails

Returns:
* Promise, returns a Promise

Equivalent to the three-argument overload with an undefined error filter; the
message is ignored when nothing is rejected.

--------------------------
### ifError
**Throws the given value when it is truthy**

```JavaScript
static assert.ifError(Value object = undefined);
```

Parameters:
* object: Value, the argument

The value is rethrown as-is, not wrapped, which makes it the standard trailing
callback helper (`if (err) throw err`). Falsy values - undefined, null, false, 0, ''
and NaN - pass. Node.js wraps the value in an AssertionError, so a caught value that
is not an Error differs between the two implementations.

Example — pass a falsy value and rethrow an error:

```JavaScript
const assert = require('assert');

assert.ifError(null);
try {
    assert.ifError(new Error('from callback'));
} catch (err) {
    console.log(err.message); // from callback
}
```

## Static Properties
        
### AssertionError
**Function, The AssertionError constructor used for every failed assertion**

```JavaScript
static readonly Function assert.AssertionError;
```

It is the class behind all assertion failures, so `err instanceof
[assert.AssertionError](assert.md#AssertionError)` identifies one; `name` is 'AssertionError' and `code` is
'ERR_ASSERTION'. Constructing an instance directly is supported for testing error
handling; the options [object](../../object/ifs/object.md) supports:

```JavaScript
// fragment: options
({
    "message": "custom message", // optional; when omitted a message is generated
    "actual": 1, // the value that failed the check
    "expected": 2, // the expected value
    "operator": "strictEqual", // selects the generated message and diff form
    "property": "name" // optional property that was checked
})
```

`generatedMessage` is false when a message was given, and `toString()` renders as
`AssertionError [ERR_ASSERTION]: <message>`. Node.js exposes the same constructor and
fields; the strict [module](module.md) re-exports the same class.

