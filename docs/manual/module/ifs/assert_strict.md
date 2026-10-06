# Module assert_strict
The assert_strict [module](module.md) provides the strict comparison-mode assertion functions;

every member that compares values uses strict equality

It is the strict counterpart of the [assert](assert.md) [module](module.md): `equal`/`notEqual` compare with
`===`/`!==` and `deepEqual`/`notDeepEqual` compare deeply with strict leaf values, while
every other member (`ok`, `throws`, `rejects`, `property`, ...) behaves exactly like its
[assert](assert.md) counterpart. Prefer this [module](module.md) for new code, as Node.js does.

Main capabilities:

- **Strict comparison**: `equal`, `notEqual` (mapped to strictEqual/notStrictEqual),
  `strictEqual`, `notStrictEqual`;
- **Strict deep comparison**: `deepEqual`, `notDeepEqual` (mapped to
  deepStrictEqual/notDeepStrictEqual), `deepStrictEqual`, `notDeepStrictEqual`;
- **Truthiness and failure**: `ok`, `notOk`, `exist`, `notExist`, `fail`;
- **Type and shape checks**: `isTrue` through `isNotBoolean`, `typeOf`, `notTypeOf`,
  `property`, `deepProperty`, `propertyVal`, `deepPropertyVal` and their negations;
- **Regular expression matching**: `match`, `doesNotMatch`;
- **Ordered comparison**: `closeTo`, `notCloseTo`, `lessThan`, `notLessThan`,
  `greaterThan`, `notGreaterThan`;
- **Exception checks**: `throws`, `doesNotThrow`, `rejects`; **error helpers**:
  `AssertionError`, `ifError`.

Concepts:

- **Difference from [assert](assert.md)**: this [module](module.md) is the same [object](../../object/ifs/object.md) as `require('[assert](assert.md)').strict`,
  so `strict.equal(a, b)` is `assert.strictEqual(a, b)`. The table lists every member whose
  semantics change; every member not listed is identical to its [assert](assert.md) counterpart.

  | assert_strict | behaves as [assert](assert.md) |
  | --- | --- |
  | `equal` | `strictEqual` (`===`) |
  | `notEqual` | `notStrictEqual` (`!==`) |
  | `deepEqual` | `deepStrictEqual` |
  | `notDeepEqual` | `notDeepStrictEqual` |
  | `strictEqual`, `notStrictEqual` | unchanged |
  | `deepStrictEqual`, `notDeepStrictEqual` | unchanged |

- **Strict equality**: leaves are compared with `===`, so `1` and `'1'` are never equal and
  [object](../../object/ifs/object.md) identity is required for the non-deep checks. Deep comparison still compares Dates
  by time value, RegExps by source and flags and Buffers by content, and it still ignores
  prototypes and symbol-keyed properties; see [assert](assert.md) for the full deep comparison rules.
- **AssertionError**: failures use the same class as [assert](assert.md)
  (`strict.AssertionError === [assert.AssertionError](assert.md#AssertionError)`) with name 'AssertionError' and code
  'ERR_ASSERTION'; the operator field names the underlying strict operator.
  `generatedMessage` is false when a message was supplied.
- **[Message](../../object/ifs/Message.md) argument**: as in [assert](assert.md), a string (or String [object](../../object/ifs/object.md)) is used as-is, a value
  with its own string form is rendered, and other values are ignored.

Import:

```JavaScript
const strict = require('assert/strict');
// equivalent: require('assert').strict, require('fibjs:assert/strict'),
// require('node:assert/strict')
```

Example 1 — strict equality and the mapped names:

```JavaScript
const strict = require('assert/strict');

strict.equal(1, 1); // same as strictEqual
strict.deepEqual({
    a: 1
}, {
    a: 1
}); // same as deepStrictEqual
strict.notEqual(1, '1'); // different types are unequal
console.log('strict checks passed');
```

Example 2 — a caught failure reports the strict operator:

```JavaScript
const strict = require('assert/strict');

try {
    strict.equal(1, '1');
} catch (err) {
    console.log(err.name); // AssertionError
    console.log(err.operator); // strictEqual
    console.log(JSON.stringify([err.actual, err.expected])); // [1,"1"]
}
```

Example 3 — the exception checks are unchanged:

```JavaScript
const strict = require('assert/strict');

strict.throws(() => JSON.parse('{'), SyntaxError);
strict.doesNotThrow(() => JSON.parse('{}'));

(async () => {
    await strict.rejects(Promise.reject(new Error('down')), /down/);
    console.log('rejection matched');
})();
```

Notes:

- `strict.ok` is the loose [assert](assert.md) [module](module.md) [object](../../object/ifs/object.md) itself (`strict.ok === require('[assert](assert.md)')`),
  because the alias points at that [module](module.md); calling it behaves like [assert](assert.md) ok.
- `strict.strict` does not exist; require the loose [module](module.md) directly to mix both modes.
- Node.js exposes the same `[assert](assert.md)/strict` entry point with the same mapping, and fibjs also
  registers the aliases `fibjs:[assert](assert.md)/strict` and `node:[assert](assert.md)/strict`.
- Besides `strictEqual`-style checks, every other member shares the implementation of
  [assert](assert.md), including the crash of `property` on a string receiver and the leniency of the
  `throws` property filter.

## Objects
        
### ok
**Tests that the value is truthy; the assertion fails if it is false; an alias of the [module](module.md)**

```JavaScript
assert assert_strict.ok;
```

Unlike the other members, `strict.ok` is the loose [assert](assert.md) [module](module.md) [object](../../object/ifs/object.md) itself
(`strict.ok === require('[assert](assert.md)')`), because the alias points at that [module](module.md); calling
it behaves exactly like the loose `ok`. The failure carries the operator 'ok'.

## Static Methods
        
### operator
**The callable [module](module.md) [object](../../object/ifs/object.md) itself; tests that the value is truthy**

```JavaScript
static assert_strict.operator(Value actual = undefined,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

`strict(value, message)` is the same check as `ok` and the failure carries the
operator 'ok'; the parameter defaults to undefined, so `strict()` fails.

--------------------------
### notOk
**Tests that the value is falsy; the assertion fails if it is true**

```JavaScript
static assert_strict.notOk(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `ok`, shared with the loose [assert](assert.md) [module](module.md); the failure carries
the operator 'notOk'. Node.js has no notOk, the equivalent is
`assert.ok(!value)`.

--------------------------
### equal
**Tests that the value strictly equals the expected value**

```JavaScript
static assert_strict.equal(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

In this [module](module.md) `equal` is an alias of `strictEqual`: it uses `===`, so `equal(1,
'1')` fails, and the failure carries the operator 'strictEqual' (not '==', which the
loose [module](module.md) uses). `strict.equal` and `strict.strictEqual` are the same behavior;
Node.js applies the same alias.

--------------------------
### notEqual
**Tests that the value does not strictly equal the expected value**

```JavaScript
static assert_strict.notEqual(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

In this [module](module.md) `notEqual` is an alias of `notStrictEqual`: two references to the same
[object](../../object/ifs/object.md) are equal and fail the check, while `1` and `'1'` are unequal and pass it. The
failure carries the operator 'notStrictEqual'.

--------------------------
### strictEqual
**Tests that the value strictly equals the expected value**

```JavaScript
static assert_strict.strictEqual(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

Uses the JavaScript `===` operator, exactly as in the loose [module](module.md): `1` and `'1'`
are not equal, NaN is not equal to NaN, +0 and -0 are equal, and objects must be the
same reference. A custom message is prepended to the generated diff; the failure
carries the operator 'strictEqual'.

--------------------------
### notStrictEqual
**Tests that the value does not strictly equal the expected value**

```JavaScript
static assert_strict.notStrictEqual(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

The exact negation of `strictEqual`, shared with the loose [module](module.md);
`notStrictEqual(1, '1')` passes and `notStrictEqual(obj, obj)` fails. The failure
carries the operator 'notStrictEqual'.

--------------------------
### deepEqual
**Tests that the value strictly deeply equals the expected value**

```JavaScript
static assert_strict.deepEqual(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

In this [module](module.md) `deepEqual` is an alias of `deepStrictEqual`: leaf values are
compared with `===`, so `deepEqual({ a: 1 }, { a: '1' })` fails, and the failure
carries the operator 'deepStrictEqual'. Dates are compared by time value, RegExps by
source and flags and Buffers by content, while prototypes and symbol-keyed
properties are ignored; a custom message is prepended to the generated diff.

Example — strict deep comparison:

```JavaScript
const strict = require('assert/strict');

strict.deepEqual({
    a: 1,
    b: [2, 3]
}, {
    a: 1,
    b: [2, 3]
});
strict.deepEqual(new Date(1000), new Date(1000));
try {
    strict.deepEqual({
        a: 1
    }, {
        a: '1'
    });
} catch (err) {
    console.log(err.operator); // deepStrictEqual
}
```

--------------------------
### notDeepEqual
**Tests that the value does not strictly deeply equal the expected value**

```JavaScript
static assert_strict.notDeepEqual(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

In this [module](module.md) `notDeepEqual` is an alias of `notDeepStrictEqual`;
`notDeepEqual({ a: 1 }, { a: '1' })` passes while structurally and strictly
identical values fail. The failure carries the operator 'notDeepStrictEqual'.

--------------------------
### deepStrictEqual
**Tests that the value strictly deeply equals the expected value**

```JavaScript
static assert_strict.deepStrictEqual(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): leaf values are compared with `===` and the rules for
Dates, RegExps, arrays and Buffers are the same as `deepEqual`; prototypes and
symbol-keyed properties are still not compared, which differs from Node.js. A custom
message is prepended to the generated diff; the failure carries the operator
'deepStrictEqual'.

--------------------------
### notDeepStrictEqual
**Tests that the value does not strictly deeply equal the expected value**

```JavaScript
static assert_strict.notDeepStrictEqual(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

The exact negation of `deepStrictEqual`, shared with the loose [module](module.md): values whose
leaves differ in type pass and strictly identical values fail. The failure carries
the operator 'notDeepStrictEqual'.

--------------------------
### match
**Tests that the string matches the expected regular expression**

```JavaScript
static assert_strict.match(String actual,
    RegExp expected,
    Value msg = undefined);
```

Parameters:
* actual: String, the string to [test](test.md)
* expected: RegExp, the expected regular expression
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): the actual value is declared String, so a String
[object](../../object/ifs/object.md), a Date (its ISO form), a [Buffer](../../object/ifs/Buffer.md) (its utf8 bytes) and an [object](../../object/ifs/object.md) with its own
toString are converted, while values without a string form fail with a TypeError
[20005]; Node.js requires a real string. The failure carries the operator 'match'.

--------------------------
### doesNotMatch
**Tests that the string does not match the expected regular expression**

```JavaScript
static assert_strict.doesNotMatch(String actual,
    RegExp expected,
    Value msg = undefined);
```

Parameters:
* actual: String, the string to [test](test.md)
* expected: RegExp, the expected regular expression
* msg: Value, the message when the assertion fails

The exact negation of `match`, shared with the loose [module](module.md), including the string
conversion rules and the TypeError [20005] for values without a string form. The
failure carries the operator 'doesNotMatch'.

--------------------------
### closeTo
**Tests that the value is approximately equal to the expected value**

```JavaScript
static assert_strict.closeTo(Value actual,
    Value expected,
    Value delta,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* delta: Value, the allowed absolute difference
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): the check is `Math.abs(actual - expected) <= delta`
with the bound inclusive, and a value that converts to NaN throws a TypeError [20004]
instead of failing the assertion. Node.js has no closeTo.

--------------------------
### notCloseTo
**Tests that the value is not approximately equal to the expected value**

```JavaScript
static assert_strict.notCloseTo(Value actual,
    Value expected,
    Value delta,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* delta: Value, the allowed absolute difference
* msg: Value, the message when the assertion fails

The exact negation of `closeTo` (`Math.abs(actual - expected) > delta`), shared
with the loose [module](module.md) and with the same TypeError [20004] for NaN conversions.

--------------------------
### lessThan
**Tests that the value is less than the expected value**

```JavaScript
static assert_strict.lessThan(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): numeric when either side is a number (or a numeric
string next to a number), lexicographic UTF-8 when both sides are non-numeric
strings, and a TypeError [20004] for values that cannot be converted to a number.
Node.js has no lessThan.

--------------------------
### notLessThan
**Tests that the value is not less than the expected value**

```JavaScript
static assert_strict.notLessThan(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

The negation of `lessThan` (actual >= expected), shared with the loose [module](module.md) and
using the same conversion rules and TypeError [20004].

--------------------------
### greaterThan
**Tests that the value is greater than the expected value**

```JavaScript
static assert_strict.greaterThan(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

The mirror of `lessThan` (actual > expected), shared with the loose [module](module.md); the
generated failure message and operator field reuse the notLessThan wording ('to be
at least'). Node.js has no greaterThan.

--------------------------
### notGreaterThan
**Tests that the value is not greater than the expected value**

```JavaScript
static assert_strict.notGreaterThan(Value actual,
    Value expected,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value
* msg: Value, the message when the assertion fails

The negation of `greaterThan` (actual <= expected), shared with the loose [module](module.md) and
using the same conversion rules and TypeError [20004].

--------------------------
### exist
**Tests that the variable exists**

```JavaScript
static assert_strict.exist(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): a value exists when it is neither null nor undefined,
so false, 0, '' and NaN exist. Node.js has no exist.

--------------------------
### notExist
**Tests that the variable does not exist**

```JavaScript
static assert_strict.notExist(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `exist`, shared with the loose [module](module.md): only null and
undefined do not exist, so 0, '' and false all fail this check.

--------------------------
### isTrue
**Tests that the value is boolean true**

```JavaScript
static assert_strict.isTrue(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md) and strict by nature: 1, 'true' and new Boolean(true)
all fail. Node.js has no isTrue.

--------------------------
### isNotTrue
**Tests that the value is not boolean true**

```JavaScript
static assert_strict.isNotTrue(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isTrue`, shared with the loose [module](module.md): every value except
the true primitive passes, including 1 and new Boolean(true).

--------------------------
### isFalse
**Tests that the value is boolean false**

```JavaScript
static assert_strict.isFalse(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): only the false primitive passes, so 0, '' and
new Boolean(false) fail. Node.js has no isFalse.

--------------------------
### isNotFalse
**Tests that the value is not boolean false**

```JavaScript
static assert_strict.isNotFalse(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isFalse`, shared with the loose [module](module.md): every value except
the false primitive passes, including 0 and new Boolean(false).

--------------------------
### isNull
**Tests that the value is Null**

```JavaScript
static assert_strict.isNull(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): only the null primitive passes; undefined is not null
and fails this check, use `isUndefined` for it. Node.js has no isNull.

--------------------------
### isNotNull
**Tests that the value is not Null**

```JavaScript
static assert_strict.isNotNull(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isNull`, shared with the loose [module](module.md): every value except
null passes, undefined included.

--------------------------
### isUndefined
**Tests that the value is undefined**

```JavaScript
static assert_strict.isUndefined(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): only the undefined primitive passes; null is defined
for this check and fails it, use `isNull` for null. Node.js has no isUndefined.

--------------------------
### isDefined
**Tests that the value is not undefined**

```JavaScript
static assert_strict.isDefined(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isUndefined`, shared with the loose [module](module.md): null and every
other value pass. Node.js has no isDefined.

--------------------------
### isFunction
**Tests that the value is a function**

```JavaScript
static assert_strict.isFunction(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): classes, async functions and generator functions are
functions too. Node.js has no isFunction.

--------------------------
### isNotFunction
**Tests that the value is not a function**

```JavaScript
static assert_strict.isNotFunction(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isFunction`, shared with the loose [module](module.md): every value that
cannot be called passes, so objects and arrays pass while classes fail.

--------------------------
### isObject
**Tests that the value is an [object](../../object/ifs/object.md)**

```JavaScript
static assert_strict.isObject(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): arrays and functions count as objects, boxed
primitives count too, while null, undefined, primitives and symbols do not.
`typeOf(value, '[object](../../object/ifs/object.md)')` delegates to this check. Node.js has no isObject.

--------------------------
### isNotObject
**Tests that the value is not an [object](../../object/ifs/object.md)**

```JavaScript
static assert_strict.isNotObject(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isObject`, shared with the loose [module](module.md): primitives, null,
undefined and symbols pass, while arrays, functions and boxed primitives fail.

--------------------------
### isArray
**Tests that the value is an array**

```JavaScript
static assert_strict.isArray(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): an Array subclass passes, while typed arrays and
[Buffer](../../object/ifs/Buffer.md) do not. Node.js has no isArray; the equivalent is
`assert.ok(Array.isArray(value))`.

--------------------------
### isNotArray
**Tests that the value is not an array**

```JavaScript
static assert_strict.isNotArray(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isArray`, shared with the loose [module](module.md): any value that is
not an Array passes, including typed arrays, [Buffer](../../object/ifs/Buffer.md) and arguments objects.

--------------------------
### isString
**Tests that the value is a string**

```JavaScript
static assert_strict.isString(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): both a string primitive and a String [object](../../object/ifs/object.md) pass,
while a [Buffer](../../object/ifs/Buffer.md) does not (it is a Uint8Array). Node.js has no isString.

--------------------------
### isNotString
**Tests that the value is not a string**

```JavaScript
static assert_strict.isNotString(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isString`, shared with the loose [module](module.md): a [Buffer](../../object/ifs/Buffer.md), a number
and a String-like [object](../../object/ifs/object.md) without the String prototype all pass.

--------------------------
### isNumber
**Tests that the value is a number**

```JavaScript
static assert_strict.isNumber(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): NaN passes and a Number [object](../../object/ifs/object.md) does not. Node.js has
no isNumber.

--------------------------
### isNotNumber
**Tests that the value is not a number**

```JavaScript
static assert_strict.isNotNumber(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isNumber`, shared with the loose [module](module.md): any value that is
not a number primitive passes, including a Number [object](../../object/ifs/object.md) and numeric strings.

--------------------------
### isBoolean
**Tests that the value is a boolean**

```JavaScript
static assert_strict.isBoolean(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): only the true and false primitives pass, a Boolean
[object](../../object/ifs/object.md) does not. Node.js has no isBoolean.

--------------------------
### isNotBoolean
**Tests that the value is not a boolean**

```JavaScript
static assert_strict.isNotBoolean(Value actual,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `isBoolean`, shared with the loose [module](module.md): everything except
the true and false primitives passes, including 0, '' and a Boolean [object](../../object/ifs/object.md).

--------------------------
### typeOf
**Tests that the value is of the given type**

```JavaScript
static assert_strict.typeOf(Value actual,
    String type,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* type: String, the specified type
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): the accepted names are 'array', 'function', 'string',
'[object](../../object/ifs/object.md)', 'number', 'boolean', 'null' and 'undefined', where '[object](../../object/ifs/object.md)' also matches
arrays and functions; any other name throws a TypeError [20004]. Node.js has no
typeOf.

--------------------------
### notTypeOf
**Tests that the value is not of the given type**

```JavaScript
static assert_strict.notTypeOf(Value actual,
    String type,
    Value msg = undefined);
```

Parameters:
* actual: Value, the value to [test](test.md)
* type: String, the specified type
* msg: Value, the message when the assertion fails

The exact negation of `typeOf`, shared with the loose [module](module.md), with the same eight
type names and TypeError [20004] for anything else.

--------------------------
### property
**Tests that the [object](../../object/ifs/object.md) contains the specified property**

```JavaScript
static assert_strict.property(Value object,
    Value prop,
    Value msg = undefined);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to [test](test.md)
* prop: Value, the property to [test](test.md)
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): the lookup includes inherited properties, the receiver
must be an [object](../../object/ifs/object.md) and the property name a string, and other values throw a TypeError
[20004]. A primitive string receiver passes the type check but crashes the [process](process.md)
in this version, so pass objects only. Node.js has no property.

--------------------------
### notProperty
**Tests that the [object](../../object/ifs/object.md) does not contain the specified property**

```JavaScript
static assert_strict.notProperty(Value object,
    Value prop,
    Value msg = undefined);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to [test](test.md)
* prop: Value, the property to [test](test.md)
* msg: Value, the message when the assertion fails

The exact negation of `property`, shared with the loose [module](module.md): an inherited
property fails this check and the same TypeError [20004] applies to non-[object](../../object/ifs/object.md)
receivers and non-string names.

--------------------------
### deepProperty
**Deeply tests that the [object](../../object/ifs/object.md) contains the specified property**

```JavaScript
static assert_strict.deepProperty(Value object,
    Value prop,
    Value msg = undefined);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to [test](test.md)
* prop: Value, the property to [test](test.md), separated by "."
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): the [path](path.md) is split on '.', so 'a.b.0' reaches array
elements and a property name containing a dot cannot be addressed; a missing
intermediate value fails the assertion instead of throwing. Node.js has no
deepProperty.

--------------------------
### notDeepProperty
**Deeply tests that the [object](../../object/ifs/object.md) does not contain the specified property**

```JavaScript
static assert_strict.notDeepProperty(Value object,
    Value prop,
    Value msg = undefined);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to [test](test.md)
* prop: Value, the property to [test](test.md), separated by "."
* msg: Value, the message when the assertion fails

The exact negation of `deepProperty`, shared with the loose [module](module.md): a [path](path.md) through a
missing intermediate value counts as absent and passes.

--------------------------
### propertyVal
**Tests that the specified property in the [object](../../object/ifs/object.md) has the given value**

```JavaScript
static assert_strict.propertyVal(Value object,
    Value prop,
    Value value,
    Value msg = undefined);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to [test](test.md)
* prop: Value, the property to [test](test.md)
* value: Value, the given value
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md) and already strict there: the value is compared with
`===`, so `propertyVal(obj, 'a', 1)` fails when the property holds '1' and a missing
property yields undefined and fails. Node.js has no propertyVal.

--------------------------
### propertyNotVal
**Tests that the specified property in the [object](../../object/ifs/object.md) does not have the given value**

```JavaScript
static assert_strict.propertyNotVal(Value object,
    Value prop,
    Value value,
    Value msg = undefined);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to [test](test.md)
* prop: Value, the property to [test](test.md)
* value: Value, the given value
* msg: Value, the message when the assertion fails

The exact negation of `propertyVal`, shared with the loose [module](module.md) and using the same
strict comparison.

--------------------------
### deepPropertyVal
**Deeply tests that the specified property in the [object](../../object/ifs/object.md) has the given value**

```JavaScript
static assert_strict.deepPropertyVal(Value object,
    Value prop,
    Value value,
    Value msg = undefined);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to [test](test.md)
* prop: Value, the property to [test](test.md), separated by "."
* value: Value, the given value
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): the dotted [path](path.md) is walked and the leaf is compared
with strict equality; the receiver must be an [object](../../object/ifs/object.md) and the [path](path.md) a string,
otherwise a TypeError [20004] is thrown.

--------------------------
### deepPropertyNotVal
**Deeply tests that the specified property in the [object](../../object/ifs/object.md) does not have the given value**

```JavaScript
static assert_strict.deepPropertyNotVal(Value object,
    Value prop,
    Value value,
    Value msg = undefined);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to [test](test.md)
* prop: Value, the property to [test](test.md), separated by "."
* value: Value, the given value
* msg: Value, the message when the assertion fails

The exact negation of `deepPropertyVal`, shared with the loose [module](module.md): a missing
intermediate value or a different (strict) value passes.

--------------------------
### throws
**Tests that the given code throws an error**

```JavaScript
static assert_strict.throws(Function() block,
    Value error,
    Value msg = undefined);
```

Parameters:
* block: Function(), the code to [test](test.md), given as a function
* error: Value, the expected error as a RegExp, error class, arrow validator or filter [object](../../object/ifs/object.md)
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md) and unaffected by the strict mode: the block is called
synchronously without arguments and a return without a throw fails with 'Missing
expected exception'. The error argument can be a RegExp matching the string form of
the thrown value, an error class checked with instanceof, an arrow validation
function that must return exactly true, or a property filter [object](../../object/ifs/object.md) compared with
deepStrictEqual (a property whose actual value is undefined is skipped).

An error thrown inside a validation function is propagated as-is. The failure
carries the operator 'throws'; a custom message is used when a filter was supplied
and did not match. Node.js accepts the same forms but also treats normal functions
as validators and appends a 'Caught error' excerpt.

Example — a class and an arrow validation function:

```JavaScript
const strict = require('assert/strict');

strict.throws(() => JSON.parse('{'), SyntaxError);
strict.throws(() => {
    throw new TypeError('bad');
}, (err) => {
    return err.message === 'bad';
});
console.log('exceptions matched');
```

--------------------------
**Tests that the given code throws an error, with only a message**

```JavaScript
static assert_strict.throws(Function() block,
    Value msg = undefined);
```

Parameters:
* block: Function(), the code to [test](test.md), given as a function
* msg: Value, the message when the assertion fails

Equivalent to calling the three-argument overload with an undefined error filter;
the message is ignored when nothing is thrown, because that failure always reports
the generated 'Missing expected exception' text.

--------------------------
### doesNotThrow
**Tests that the given code does not throw an error**

```JavaScript
static assert_strict.doesNotThrow(Function() block,
    Value msg = undefined);
```

Parameters:
* block: Function(), the code to [test](test.md), given as a function
* msg: Value, the message when the assertion fails

Shared with the loose [module](module.md): the block is called synchronously without arguments
and any thrown value fails the assertion, with the caught value in the actual field.
There is no error filter; use `throws` with a validation function to allow only some
errors, and a custom message replaces the default 'Got unwanted exception'.

--------------------------
### rejects
**Tests that the given code rejects, and returns a promise**

```JavaScript
static Promise assert_strict.rejects(Function() block,
    Value error,
    Value msg = undefined);
```

Parameters:
* block: Function(), the code to [test](test.md), given as a function returning a promise
* error: Value, the expected error as a RegExp, error class, arrow validator or filter [object](../../object/ifs/object.md)
* msg: Value, the message when the assertion fails

Returns:
* Promise, returns a Promise

Shared with the loose [module](module.md) and unaffected by the strict mode. The block is called
synchronously without arguments: a synchronous error rejects the returned promise
with that error, a non-promise return rejects it with a TypeError ('The rsult of
the function is not a promise.' - the typo is in the generated message), and a
returned promise is awaited. The error argument filters the rejection exactly like
`throws` (RegExp, error class, arrow validator or property filter [object](../../object/ifs/object.md)).

When the awaited promise resolves the assertion fails with 'Missing expected
rejection'. The returned promise resolves to undefined when the rejection matched
and rejects with the generated AssertionError otherwise; the operator is 'rejects'.
Node.js returns a promise with the same shape but rejects with
ERR_INVALID_RETURN_VALUE for a non-promise result.

Example — await a function and a promise rejection:

```JavaScript
const strict = require('assert/strict');

(async () => {
    await strict.rejects(Promise.reject(new TypeError('bad input')), TypeError);
    await strict.rejects(async () => {
        throw new Error('later');
    }, /later/);
    console.log('all rejections matched');
})();
```

--------------------------
**Tests that the given code rejects, with only a message**

```JavaScript
static Promise assert_strict.rejects(Function() block,
    Value msg = undefined);
```

Parameters:
* block: Function(), the code to [test](test.md), given as a function returning a promise
* msg: Value, the message when the assertion fails

Returns:
* Promise, returns a Promise

Equivalent to the three-argument overload with an undefined error filter; the
message is ignored when nothing is rejected.

--------------------------
**Tests that the given promise rejects**

```JavaScript
static Promise assert_strict.rejects(Promise result,
    Value error,
    Value msg = undefined);
```

Parameters:
* result: Promise, the code to [test](test.md), given as a Promise
* error: Value, the expected error as a RegExp, error class, arrow validator or filter [object](../../object/ifs/object.md)
* msg: Value, the message when the assertion fails

Returns:
* Promise, returns a Promise

Shared with the loose [module](module.md): the promise is awaited and its rejection is filtered
by the error argument as in the function overload, while a resolution fails the
assertion with 'Missing expected rejection'. The returned promise resolves to
undefined when the rejection matched and rejects with the generated AssertionError
otherwise; Node.js has the same form.

--------------------------
**Tests that the given promise rejects, with only a message**

```JavaScript
static Promise assert_strict.rejects(Promise result,
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
static assert_strict.ifError(Value object = undefined);
```

Parameters:
* object: Value, the argument

Shared with the loose [module](module.md): the value is rethrown as-is, not wrapped, which makes
it the standard trailing callback helper (`if (err) throw err`). Falsy values -
undefined, null, false, 0, '' and NaN - pass. Node.js wraps the value in an
AssertionError instead, so a caught value that is not an Error differs.

## Static Properties
        
### AssertionError
**Function, The AssertionError constructor used for every failed assertion**

```JavaScript
static readonly Function assert_strict.AssertionError;
```

The same class as [assert.AssertionError](assert.md#AssertionError) (`strict.AssertionError ===
[assert.AssertionError](assert.md#AssertionError)`): name is 'AssertionError', code is 'ERR_ASSERTION' and the
instances carry the actual, expected, operator and generatedMessage fields. Every
failure of this [module](module.md), including the aliased equal/deepEqual ones, throws it; see
[assert.AssertionError](assert.md#AssertionError) for the constructor options and fields.

