# Module util
Utility helpers for formatting, inspecting, type checks, async wrappers and collections

The [module](module.md) groups several families of helpers:

- Formatting and inspection: `format`, `formatWithOptions`, `inspect`, `styleText`,
`getStringWidth`, `stripVTControlCharacters`
- Async wrappers: `sync`, `promisify`, `callbackify`
- Type and value checks: the `is*` family, `isEmpty`, `isDeepEqual`,
`isDeepStrictEqual` and the `types` [object](../../object/ifs/object.md)
- Objects and arrays: `clone`, `deepFreeze`, `extend`/`_extend`, `pick`, `omit`, `has`,
`keys`, `values`, `first`, `last`, `unique`, `union`, `intersection`, `flatten`,
`without`, `difference`, `each`, `map`, `reduce`
- Diagnostics and loading: `debuglog`/`debug`, `deprecate`, `buildInfo`, `compile`,
`parseArgs`, `parseEnv`, `stripTypeScript`, `inherits`
- Re-exports: `TextDecoder`, `TextEncoder`, `types`, `colors`

Concepts:
- Formatting: `format` converts only `%s`, `%d`, `%j` and `%%`. Other specifiers
(`%i`, `%f`, `%o`, `%O`, `%c`) are kept literally and their argument is appended at
the end as an extra value. `%s` uses String(), `%d` truncates the string form with
atoi(), and `%j` renders through the inspection formatter below.
- Inspection: values are rendered with a JSON-like formatter; the defaults are depth
2, 100 array items and 10000 string characters. `depth: null` means unlimited, and
a negative `maxArrayLength`/`maxStringLength` shortens the output. Pass
`{ "table": true, "fields": [...] }` to render an array of records as a table.
`colors` defaults to true and emits ANSI codes when the terminal supports color.
- Async contract: fibjs APIs are synchronous-first and most also take a trailing
error-first callback. `sync` blocks the current fiber until a callback or promise
completes, `promisify` returns a promise-returning function and `callbackify`
returns a callback-taking function. Wrapping the same function twice returns the
same wrapper, and the three wrappers recognize each other's results.
- Deep equality: `isDeepEqual` is loose, `isDeepStrictEqual` is strict; dates and
regular expressions are compared by content and fibjs native objects through their
own `equals`. NaN compares unequal, 0 and -0 compare equal and prototypes are not
part of the comparison.
- Node.js differences: `parseArgs` is a command-line tokenizer rather than Node's
option parser; `sync`, `compile`, `buildInfo`, `getStringWidth`, `isEmpty`, `clone`,
`deepFreeze` and the collection helpers are fibjs extensions; `deprecate` is a
no-op and `promisify.custom` is not supported.

Import:

```JavaScript
const util = require('util');
```

Example 1 — quick type checks:

```JavaScript
var util = require('util');
console.log(util.isDate(new Date()));
console.log(util.isRegExp(/some regexp/));
```

Example 2 — prototype inheritance with inherits():

```JavaScript
var util = require('util');

function Animal() {
    this.name = 'Animal';
    this.sleep = function() {
        console.log(this.name + ' is sleeping!');
    }
}
Animal.prototype.eat = function(food) {
    console.log(this.name + ' is eating: ' + food);
};

function Cat() {
    this.name = 'cat';
}
util.inherits(Cat, Animal);
```

Example 3 — inspecting nested values with inspect options:

```JavaScript
var util = require('util');

const nested = {
    a: {
        b: {
            c: 1
        }
    }
};
console.log(util.inspect(nested, {
    colors: false
}));
console.log(util.inspect(nested, {
    colors: false,
    depth: null
}));
console.log(util.inspect([1, 2, 3], {
    colors: false,
    maxArrayLength: 1
}));
```

Example 4 — printf-style templates and trailing values:

```JavaScript
const util = require('util');

console.log(util.format('%s:%s', 'foo')); // foo:%s
console.log(util.format('%s:%s', 'foo', 'bar')); // foo:bar
console.log(util.format('%s:%s', 'foo', 'bar', 1)); // foo:bar 1
console.log(util.format('%d', '42.9')); // 42 (atoi truncation)
console.log(util.format('%j', {
    a: 1
})); // {"a":1}
console.log(util.format('%o', {
    a: 1
})); // %o {"a":1}
```

Notes:
- The [module](module.md) examples above cover the type checks, inheritance, inspection and
formatting paths; the async wrappers have runnable examples on their members.
- `parseArgs` tokenizes a command line string; it is not Node.js's option parser.
- `util.types` and `util.colors` are exposed through this [module](module.md) only, not as
top-level `require('[types](types.md)')` / `require('[colors](colors.md)')`.

## Objects
        
### TextDecoder
**The WHATWG [TextDecoder](../../object/ifs/TextDecoder.md) class, re-exported for convenience**

```JavaScript
TextDecoder util.TextDecoder;
```

Same [object](../../object/ifs/object.md) as the [global](global.md) `TextDecoder`; see the TextDecoder interface for the
constructor options (`fatal`, `ignoreBOM`) and the supported encodings.

--------------------------
### TextEncoder
**The WHATWG [TextEncoder](../../object/ifs/TextEncoder.md) class, re-exported for convenience**

```JavaScript
TextEncoder util.TextEncoder;
```

Same [object](../../object/ifs/object.md) as the [global](global.md) `TextEncoder`; it only encodes UTF-8 and exposes
`encoding` and `encodeInto` in addition to `encode`.

--------------------------
### types
**Utility functions for built-in type checking, exposed as `util.types`**

```JavaScript
types util.types;
```

The same functions are also available directly as `util.is*` members. Unlike
Node.js, the [module](module.md) is not requirable by the name `types`; use `util.types`.

--------------------------
### colors
**Color [constants](constants.md) and capability information for [console](console.md) output**

```JavaScript
colors util.colors;
```

Exposed as `util.colors`; `hasColors` reports whether the terminal supports
ANSI [colors](colors.md), and every color constant is an empty string when it does not.
See the [colors](colors.md) [module](module.md) for the full list.

## Static Methods
        
### format
**Formats values with a printf-style template and returns the string**

```JavaScript
static String util.format(...args);
```

Parameters:
* args: ..., optional parameter list

Returns:
* String, returns the formatted string

When the first argument is a string it is used as the format template; a
non-string first argument makes every argument part of a space-separated
concatenation. Only `%s`, `%d`, `%j` and `%%` are converted; any other
specifier is kept literally and its value is appended at the end instead.
`%s` applies String() (a Symbol argument throws TypeError), `%d` truncates
the string form through atoi() and `%j` renders with the inspection
formatter below, so circular values produce their inspection form and BigInt
is accepted. A specifier without an argument is left in place.

See the util [module](module.md) for the formatting and inspection concepts.

Example:

```JavaScript
var util = require('util');

console.log(util.format('%s:%s', 'foo')); // foo:%s
console.log(util.format('%s:%s', 'foo', 'bar', 'baz')); // foo:bar baz
console.log(util.format('%d', '42.9')); // 42
console.log(util.format('%o', {
    a: 1
})); // %o {"a":1}
```

--------------------------
### formatWithOptions
**Formats values like format, using the given options for rendered values**

```JavaScript
static String util.formatWithOptions(Object options,
    Value fmt,
    ...args);
```

Parameters:
* options: Object, inspect options used for non-string values
* fmt: Value, the format string; any other value is formatted as-is
* args: ..., optional parameter list

Returns:
* String, returns the formatted string

`fmt` is the template when it is a string and takes part in the plain
concatenation otherwise. Non-string extra values are rendered by inspect with
`options`, which accepts the inspect options (`colors`, `depth`,
`maxArrayLength`, `maxStringLength`).

--------------------------
### inherits
**Sets up prototype inheritance between two constructors (legacy helper)**

```JavaScript
static util.inherits(Value constructor,
    Value superConstructor);
```

Parameters:
* constructor: Value, the initial constructor
* superConstructor: Value, the inherited superclass

Sets `constructor.prototype` to an [object](../../object/ifs/object.md) created from
`superConstructor.prototype` and stores the superclass in
`constructor.super_`. Throws a TypeError (20004) when either argument is not
an [object](../../object/ifs/object.md) or the superclass has no prototype. Prefer the `class`/`extends`
syntax in new code; this helper matches the Node.js legacy API.

Example:

```JavaScript
var util = require('util');

function Animal(name) {
    this.name = name;
}
Animal.prototype.eat = function(food) {
    console.log(this.name + ' is eating ' + food);
};

function Cat() {
    Animal.call(this, 'cat');
}
util.inherits(Cat, Animal);

var cat = new Cat();
console.log(cat instanceof Animal); // true
console.log(Cat.super_ === Animal); // true
```

--------------------------
### parseEnv
**Parses the raw text of a dotenv file into a null-prototype [object](../../object/ifs/object.md)**

```JavaScript
static Object util.parseEnv(String content);
```

Parameters:
* content: String, raw content of the dotenv file

Returns:
* Object, returns the parsed key-value [object](../../object/ifs/object.md)

Supports `KEY=value`, `export KEY=value`, empty values, single, double and
backtick quoting, `\n` escapes inside double quotes and multi-line single
quoted values. A `#` outside quotes starts a comment, duplicate keys keep the
last value, `\r` is dropped and lines without `=` are skipped.

Example:

```JavaScript
var util = require('util');

const env = util.parseEnv('A=1\nB="two words"\nC=3 # comment\nA=4');
console.log(env.A); // 4
console.log(env.B); // two words
console.log(env.C); // 3
console.log(Object.getPrototypeOf(env) === null); // true
```

--------------------------
### inspect
**Returns a debug representation of a value controlled by options**

```JavaScript
static String util.inspect(Value obj,
    Object options = {});
```

Parameters:
* obj: Value, the [object](../../object/ifs/object.md) to [process](process.md)
* options: Object, the format control options to use

Returns:
* String, returns the formatted string

Options:

```JavaScript
// fragment: options
({
    "colors": true, // ANSI color when the terminal supports it, defaults to true
    "depth": 2, // max nesting depth, null means unlimited, defaults to 2
    "table": false, // render an array of records as a table, defaults to false
    "encode_string": true, // encode strings instead of showing them raw
    "maxArrayLength": 100, // max array items, negative hides items, 100 by default
    "maxStringLength": 10000, // max string chars, negative keeps the tail
    "fields": [] // table columns to display, empty means all
})
```

Strings are shown double quoted, buffers as `<[Buffer](../../object/ifs/Buffer.md) ..>`, typed arrays as
`[Uint8Array]`, maps and sets with their markers, functions as
`[Function name]` and errors as their stack plus own properties; repeated
objects become `[Circular]`. Unknown options are ignored. Note that `colors`
defaults to true here while Node.js defaults to false.

Example:

```JavaScript
var util = require('util');

const nested = {
    a: {
        b: {
            c: 1
        }
    }
};
console.log(util.inspect(nested, {
    colors: false
}));
console.log(util.inspect(nested, {
    colors: false,
    depth: null
}));
console.log(util.inspect([1, 2, 3], {
    colors: false,
    maxArrayLength: 1
}));
```

--------------------------
### styleText
**Applies ANSI color and style codes to text**

```JavaScript
static String util.styleText(String format[],
    String text);
```

Parameters:
* format[]: String, array of format names
* text: String, the text to format

Returns:
* String, returns the formatted string

`format` is either a single name or an array of names; array entries are
applied left to right, so the first name becomes the outermost wrapper. When
the terminal does not support [colors](colors.md) (non-TTY with NO_COLOR, or no TTY at
all) the text is returned unchanged. Unknown names are ignored, unlike
Node.js which throws for them.

Supported formats: bold, italic, underline, strikethrough, hidden,
black, red, green, yellow, blue, magenta, cyan, white,
bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite,
gray/grey, blackBright, redBright, greenBright, yellowBright, blueBright,
magentaBright, cyanBright, whiteBright

Example:

```JavaScript
var util = require('util');

const styled = util.styleText(['bold', 'green'], 'ok');
console.log(util.stripVTControlCharacters(styled)); // ok
```

--------------------------
**Applies a single ANSI color or style to text**

```JavaScript
static String util.styleText(String format,
    String text);
```

Parameters:
* format: String, format name
* text: String, the text to format

Returns:
* String, returns the formatted string

Single-name form of the array overload; see `styleText(String format[], ...)`
for the supported names and the color capability rules.

--------------------------
### debuglog
**Creates a [ConsoleObject](../../object/ifs/ConsoleObject.md) that conditionally logs debug information**

```JavaScript
static ConsoleObject util.debuglog(String section);
```

Parameters:
* section: String, the debug section to use

Returns:
* [ConsoleObject](../../object/ifs/ConsoleObject.md), returns a [ConsoleObject](../../object/ifs/ConsoleObject.md) [object](../../object/ifs/object.md)

The returned [ConsoleObject](../../object/ifs/ConsoleObject.md) writes to stderr only when `NODE_DEBUG` contains
the section name, prefixing each line with `SECTION pid:`. Matching is
case-insensitive and `NODE_DEBUG` is a comma separated list; wildcards are
not supported (Node.js accepts `foo*`). `enabled` reports the current state
and follows later changes of the environment variable.

--------------------------
**Creates a [ConsoleObject](../../object/ifs/ConsoleObject.md) that conditionally logs debug information**

```JavaScript
static ConsoleObject util.debuglog(String section,
    Function(ConsoleObject log) fn);
```

Parameters:
* section: String, the debug section to use
* fn: Function([ConsoleObject](../../object/ifs/ConsoleObject.md) log), callback invoked on the first log call with an optimized log function

Returns:
* [ConsoleObject](../../object/ifs/ConsoleObject.md), returns a [ConsoleObject](../../object/ifs/ConsoleObject.md) [object](../../object/ifs/object.md)

Same as `debuglog(String section)`; `fn` is called on the first logging
call with a log function. When the section is disabled, `fn` receives a
stubbed logger whose methods are all no-ops.

--------------------------
### debug
**Alias of debuglog: creates a conditional debug logger**

```JavaScript
static ConsoleObject util.debug(String section);
```

Parameters:
* section: String, the debug section to use

Returns:
* [ConsoleObject](../../object/ifs/ConsoleObject.md), returns a [ConsoleObject](../../object/ifs/ConsoleObject.md) [object](../../object/ifs/object.md)

Alias of `debuglog(String section)`; see it for the `NODE_DEBUG` matching
rules and the line prefix.

--------------------------
**Alias of debuglog: creates a conditional debug logger**

```JavaScript
static ConsoleObject util.debug(String section,
    Function(ConsoleObject log) fn);
```

Parameters:
* section: String, the debug section to use
* fn: Function([ConsoleObject](../../object/ifs/ConsoleObject.md) log), callback invoked on the first log call with an optimized log function

Returns:
* [ConsoleObject](../../object/ifs/ConsoleObject.md), returns a [ConsoleObject](../../object/ifs/ConsoleObject.md) [object](../../object/ifs/object.md)

Alias of `debuglog(String section, Function([ConsoleObject](../../object/ifs/ConsoleObject.md) log) fn)`; see it
for the first-call callback behavior.

--------------------------
### deprecate
**Returns the function unchanged; kept for Node.js API compatibility**

```JavaScript
static Function(...args) => Value util.deprecate(Function(...args) => Value fn,
    String msg,
    String code = "");
```

Parameters:
* fn: Function(...args) => Value, the function to wrap
* msg: String, the warning message
* code: String, the warning code

Returns:
* Function(...args) => Value, returns the wrapped result

The current implementation is a no-op wrapper: the returned value is the
same function, calling it never emits a deprecation warning and `msg` and
`code` are ignored. Do not rely on it for deprecation reporting.

--------------------------
### isEmpty
**Checks whether the given variable contains no value (no enumerable properties)**

```JavaScript
static Boolean util.isEmpty(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if empty

True for null, undefined, empty strings, empty arrays, objects without own
property names, and primitive numbers or booleans. Node.js has no equivalent
helper.

--------------------------
### isArray
**Checks whether the given variable is an array**

```JavaScript
static Boolean util.isArray(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is an array

Equivalent to Array.isArray(); typed arrays and array-like objects are not
arrays.

--------------------------
### isBoolean
**Checks whether the given variable is a Boolean**

```JavaScript
static Boolean util.isBoolean(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a Boolean

True for primitive booleans and for Boolean wrapper objects created with
new Boolean(); wrapper objects count as booleans here.

--------------------------
### isNull
**Checks whether the given variable is Null**

```JavaScript
static Boolean util.isNull(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is Null

True only for null; use isNullOrUndefined to cover both null and undefined.

--------------------------
### isNullOrUndefined
**Checks whether the given variable is Null or Undefined**

```JavaScript
static Boolean util.isNullOrUndefined(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is Null or Undefined

True for null and undefined; shorthand for the common guard.

--------------------------
### isNumber
**Checks whether the given variable is a number**

```JavaScript
static Boolean util.isNumber(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a number

True for primitive numbers and Number wrapper objects; NaN and Infinity are
numbers.

--------------------------
### isBigInt
**Checks whether the given variable is a BigInt**

```JavaScript
static Boolean util.isBigInt(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a BigInt

True for BigInt primitives and BigInt wrapper objects.

--------------------------
### isString
**Checks whether the given variable is a string**

```JavaScript
static Boolean util.isString(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a string

True for string primitives and String wrapper objects.

--------------------------
### isUndefined
**Checks whether the given variable is Undefined**

```JavaScript
static Boolean util.isUndefined(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is Undefined

True only for undefined.

--------------------------
### isRegExp
**Checks whether the given variable is a regular expression [object](../../object/ifs/object.md)**

```JavaScript
static Boolean util.isRegExp(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a regular expression [object](../../object/ifs/object.md)

True for RegExp objects, including ones created in another context.

--------------------------
### isObject
**Checks whether the given variable is an [object](../../object/ifs/object.md)**

```JavaScript
static Boolean util.isObject(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is an [object](../../object/ifs/object.md)

True for every non-primitive value, functions included; null and undefined
are not objects.

--------------------------
### isDate
**Checks whether the given variable is a date [object](../../object/ifs/object.md)**

```JavaScript
static Boolean util.isDate(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a date [object](../../object/ifs/object.md)

True for Date instances, including invalid dates.

--------------------------
### isNativeError
**Checks whether the given variable is an error [object](../../object/ifs/object.md)**

```JavaScript
static Boolean util.isNativeError(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is an error [object](../../object/ifs/object.md)

True for Error and its built-in subclasses as created by the engine; a plain
[object](../../object/ifs/object.md) whose prototype chain includes Error.prototype is not matched.

--------------------------
### isPrimitive
**Checks whether the given variable is a primitive type**

```JavaScript
static Boolean util.isPrimitive(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a primitive type

True for null, undefined, booleans, numbers, bigints, strings and symbols;
functions and all other objects are false.

--------------------------
### isSymbol
**Checks whether the given variable is a Symbol type**

```JavaScript
static Boolean util.isSymbol(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a Symbol type

True for primitive symbols; wrapper objects created with Object(Symbol()) are
not matched.

--------------------------
### isDataView
**Checks whether the given variable is a DataView type**

```JavaScript
static Boolean util.isDataView(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a DataView type

True for DataView instances; typed arrays are buffer views but not
DataViews.

--------------------------
### isExternal
**Checks whether the given variable is an External type**

```JavaScript
static Boolean util.isExternal(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is an External type

True only for V8 native External values, which JavaScript code cannot
create; typically false.

--------------------------
### isMap
**Checks whether the given variable is a Map type**

```JavaScript
static Boolean util.isMap(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a Map type

True for Map instances, including subclasses.

--------------------------
### isMapIterator
**Checks whether the given variable is a MapIterator type**

```JavaScript
static Boolean util.isMapIterator(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a MapIterator type

True for iterators returned by Map keys(), values() and entries().

--------------------------
### isPromise
**Checks whether the given variable is a Promise type**

```JavaScript
static Boolean util.isPromise(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a Promise type

True for native Promise instances, including values returned by async
functions.

--------------------------
### isAsyncFunction
**Checks whether the given variable is an AsyncFunction type**

```JavaScript
static Boolean util.isAsyncFunction(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is an AsyncFunction type

True for async function declarations, expressions, arrow functions and
methods.

--------------------------
### isSet
**Checks whether the given variable is a Set type**

```JavaScript
static Boolean util.isSet(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a Set type

True for Set instances, including subclasses.

--------------------------
### isSetIterator
**Checks whether the given variable is a SetIterator type**

```JavaScript
static Boolean util.isSetIterator(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a SetIterator type

True for iterators returned by Set keys(), values() and entries().

--------------------------
### isTypedArray
**Checks whether the given variable is a TypedArray type**

```JavaScript
static Boolean util.isTypedArray(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a TypedArray type

True for every typed array kind (Uint8Array, Int32Array, Float64Array, ...);
ArrayBuffer and DataView are not typed arrays.

--------------------------
### isUint8Array
**Checks whether the given variable is a Uint8Array type**

```JavaScript
static Boolean util.isUint8Array(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a Uint8Array type

True for Uint8Array instances; fibjs [Buffer](../../object/ifs/Buffer.md) values match because [Buffer](../../object/ifs/Buffer.md)
derives from Uint8Array.

--------------------------
### isFunction
**Checks whether the given variable is a function [object](../../object/ifs/object.md)**

```JavaScript
static Boolean util.isFunction(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a function [object](../../object/ifs/object.md)

True for functions and classes, including async and generator functions.

--------------------------
### isBuffer
**Checks whether the given variable is a [Buffer](../../object/ifs/Buffer.md) [object](../../object/ifs/object.md)**

```JavaScript
static Boolean util.isBuffer(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a [Buffer](../../object/ifs/Buffer.md) [object](../../object/ifs/object.md)

True only for fibjs [Buffer](../../object/ifs/Buffer.md) values; Node.js has no [util.types](util.md#types).isBuffer and
uses [Buffer.isBuffer](../../object/ifs/Buffer.md#isBuffer) instead.

--------------------------
### isFloat16Array
**Checks whether the given variable is a Float16Array type**

```JavaScript
static Boolean util.isFloat16Array(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a Float16Array type

True for Float16Array instances.

--------------------------
### isAnyArrayBuffer
**Checks whether the given variable is an ArrayBuffer or SharedArrayBuffer type**

```JavaScript
static Boolean util.isAnyArrayBuffer(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is an ArrayBuffer or SharedArrayBuffer type

True for both ArrayBuffer and SharedArrayBuffer.

--------------------------
### isSharedArrayBuffer
**Checks whether the given variable is a SharedArrayBuffer type**

```JavaScript
static Boolean util.isSharedArrayBuffer(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a SharedArrayBuffer type

True only for SharedArrayBuffer; a plain ArrayBuffer is matched by
isAnyArrayBuffer.

--------------------------
### isArgumentsObject
**Checks whether the given variable is an arguments [object](../../object/ifs/object.md)**

```JavaScript
static Boolean util.isArgumentsObject(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is an arguments [object](../../object/ifs/object.md)

True for the arguments [object](../../object/ifs/object.md) of a non-arrow function; arrays are not
matched.

--------------------------
### isBoxedPrimitive
**Checks whether the given variable is a boxed primitive [object](../../object/ifs/object.md)**

```JavaScript
static Boolean util.isBoxedPrimitive(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a boxed primitive [object](../../object/ifs/object.md)

True for Boolean, Number, String, Symbol and BigInt wrapper objects created
with new or Object().

--------------------------
### isGeneratorFunction
**Checks whether the given variable is a GeneratorFunction type**

```JavaScript
static Boolean util.isGeneratorFunction(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a GeneratorFunction type

True for generator function declarations, expressions and methods.

--------------------------
### isGeneratorObject
**Checks whether the given variable is a Generator [object](../../object/ifs/object.md)**

```JavaScript
static Boolean util.isGeneratorObject(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a Generator [object](../../object/ifs/object.md)

True for the iterator returned when a generator function is called.

--------------------------
### isProxy
**Checks whether the given variable is a Proxy instance**

```JavaScript
static Boolean util.isProxy(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a Proxy instance

True for Proxy instances; the underlying target is not a proxy.

--------------------------
### isModuleNamespaceObject
**Checks whether the given variable is a Module Namespace [object](../../object/ifs/object.md)**

```JavaScript
static Boolean util.isModuleNamespaceObject(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a Module Namespace [object](../../object/ifs/object.md)

True for ES [module](module.md) namespace objects obtained with `import * as ns`; plain
objects are not namespaces.

--------------------------
### isCryptoKey
**Checks whether the given variable is a [CryptoKey](../../object/ifs/CryptoKey.md) type**

```JavaScript
static Boolean util.isCryptoKey(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a [CryptoKey](../../object/ifs/CryptoKey.md) type

True for [CryptoKey](../../object/ifs/CryptoKey.md) objects produced by the [crypto](crypto.md) [module](module.md).

--------------------------
### isKeyObject
**Checks whether the given variable is a [KeyObject](../../object/ifs/KeyObject.md) type**

```JavaScript
static Boolean util.isKeyObject(Value v);
```

Parameters:
* v: Value, the variable to check

Returns:
* Boolean, returns True if it is a [KeyObject](../../object/ifs/KeyObject.md) type

True for [KeyObject](../../object/ifs/KeyObject.md) instances produced by the [crypto](crypto.md) [module](module.md).

--------------------------
### isDeepEqual
**Tests whether a value is deeply equal to the expected value**

```JavaScript
static Boolean util.isDeepEqual(Value actual,
    Value expected);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value

Returns:
* Boolean, returns True if deeply equal

Deep equality with component-wise loose comparison: dates and regular
expressions are compared by content, fibjs native objects through their own
equals, and other values with JavaScript `==` semantics (for example '1'
equals 1). NaN never equals NaN. This is a fibjs extension; Node.js only
provides isDeepStrictEqual.

--------------------------
### isDeepStrictEqual
**Tests whether a value is strictly deeply equal to the expected value**

```JavaScript
static Boolean util.isDeepStrictEqual(Value actual,
    Value expected);
```

Parameters:
* actual: Value, the value to [test](test.md)
* expected: Value, the expected value

Returns:
* Boolean, returns True if strictly deeply equal

Deep equality with component-wise strict comparison. Dates and regular
expressions are compared by content, fibjs native objects through their own
equals, and functions are equal only when identical. Unlike Node.js, NaN is
not equal to NaN, 0 equals -0 and constructors are not part of the
comparison.

Example:

```JavaScript
var util = require('util');

console.log(util.isDeepStrictEqual([1, [2, 3]], [1, [2, 3]])); // true
console.log(util.isDeepStrictEqual('1', 1)); // false
console.log(util.isDeepStrictEqual(NaN, NaN)); // false
```

--------------------------
### has
**Queries whether the specified [object](../../object/ifs/object.md) contains the given key**

```JavaScript
static Boolean util.has(Value v,
    String key);
```

Parameters:
* v: Value, the [object](../../object/ifs/object.md) to query
* key: String, the key to query

Returns:
* Boolean, returns True if the [object](../../object/ifs/object.md) has the own property

Checks own properties only (Object.prototype.hasOwnProperty semantics),
including non-enumerable ones; null and undefined return false while other
non-objects throw TypeError 20004. A shadowed hasOwnProperty does not affect
the check. Node.js has no [util.has](util.md#has).

--------------------------
### keys
**Queries the array of all keys of the specified [object](../../object/ifs/object.md)**

```JavaScript
static Array util.keys(Value v);
```

Parameters:
* v: Value, the [object](../../object/ifs/object.md) to query

Returns:
* Array, returns the array of enumerable property names

Returns the enumerable property names, own and inherited, with array indices
converted to strings; non-objects return an empty array. Node.js has no
[util.keys](util.md#keys) (Object.keys covers own properties only).

--------------------------
### values
**Queries the array of all values of the specified [object](../../object/ifs/object.md)**

```JavaScript
static Array util.values(Value v);
```

Parameters:
* v: Value, the [object](../../object/ifs/object.md) to query

Returns:
* Array, returns the array of enumerable property values

Returns the values of the enumerable properties reported by `keys`, own and
inherited; non-objects return an empty array.

--------------------------
### clone
**Clones the given variable; objects and arrays are copied to a new one**

```JavaScript
static Value util.clone(Value v);
```

Parameters:
* v: Value, the variable to clone

Returns:
* Value, returns the clone result

Shallow copy: the result is a new [object](../../object/ifs/object.md) or array whose top-level properties
reference the same values, so nested objects are shared. Date, RegExp and
wrapper objects are recreated, functions and arguments objects are returned
as-is, and fibjs native objects ([Buffer](../../object/ifs/Buffer.md), Map, ...) are returned unchanged.
Node.js has no [util.clone](util.md#clone); structuredClone is a [global](global.md) instead.

Example:

```JavaScript
var util = require('util');

const source = {
    list: [1, 2],
    nested: {
        a: 1
    }
};
const copy = util.clone(source);
copy.list.push(3);
console.log(source.list); // [ 1, 2, 3 ] (the nested array is shared)
console.log(util.clone(source).nested === source.nested); // true
```

--------------------------
### deepFreeze
**Deeply freezes an [object](../../object/ifs/object.md) and everything it contains**

```JavaScript
static util.deepFreeze(Value v);
```

Parameters:
* v: Value, the [object](../../object/ifs/object.md) to freeze

Recursively freezes the [object](../../object/ifs/object.md), every array it contains and every value
reachable through enumerable properties. Returns undefined. Throws a
TypeError when a value cannot be frozen, for example a [Buffer](../../object/ifs/Buffer.md).

--------------------------
### extend
**Extends the specified [object](../../object/ifs/object.md) with the key-values of one or more objects**

```JavaScript
static Value util.extend(Value v,
    ...objs);
```

Parameters:
* v: Value, the [object](../../object/ifs/object.md) to extend
* objs: ..., one or more objects used for extension

Returns:
* Value, returns the extension result

Copies the enumerable properties (own and inherited) of each source into the
first argument and returns it, with later sources winning. null and
undefined sources are skipped, a null/undefined target is returned
unchanged, and other non-objects throw TypeError 20004. `_extend` is the
Node.js-compatible alias.

--------------------------
### _extend
**Extends an [object](../../object/ifs/object.md) with the key-values of one or more objects (alias)**

```JavaScript
static Value util._extend(Value v,
    ...objs);
```

Parameters:
* v: Value, the [object](../../object/ifs/object.md) to extend
* objs: ..., one or more objects used for extension

Returns:
* Value, returns the extension result

Alias of extend, matching the deprecated Node.js [util._extend](util.md#_extend).

--------------------------
### pick
**Returns a copy of an [object](../../object/ifs/object.md) containing only the property values of the specified keys**

```JavaScript
static Object util.pick(Value v,
    ...objs);
```

Parameters:
* v: Value, the [object](../../object/ifs/object.md) to filter
* objs: ..., one or more keys to select

Returns:
* Object, returns the filter result

Copies the listed properties from the [object](../../object/ifs/object.md); each argument is a key or an
array of keys (arrays are expanded one level). Inherited enumerable
properties are included and missing keys are skipped. A null/undefined
target yields an empty [object](../../object/ifs/object.md); other non-objects throw TypeError 20004.

--------------------------
### omit
**Returns a copy of an [object](../../object/ifs/object.md) excluding the property values of the specified keys**

```JavaScript
static Object util.omit(Value v,
    ...keys);
```

Parameters:
* v: Value, the [object](../../object/ifs/object.md) to filter
* keys: ..., one or more keys to exclude

Returns:
* Object, returns the filtered result

Copies every enumerable property except the listed ones; each argument is a
key or an array of keys, and keys are converted to strings, so
omit(['a', 'b'], 0) removes index 0. A null/undefined target yields an empty
[object](../../object/ifs/object.md).

--------------------------
### first
**Gets the first element of an array**

```JavaScript
static Value util.first(Value v);
```

Parameters:
* v: Value, the array to get from

Returns:
* Value, returns the element

Returns the first element of an array, or undefined for an empty array or a
null/undefined argument; a non-array throws TypeError 20004. The overload
with `n` returns a new array with up to `n` leading elements instead.

--------------------------
**Gets several elements from the beginning of an array**

```JavaScript
static Value util.first(Value v,
    Integer n);
```

Parameters:
* v: Value, the array to get from
* n: Integer, the number of elements to get

Returns:
* Value, returns the array of elements

Array form of first: returns up to `n` leading elements, clamped to the
length; n <= 0 or a null/undefined argument yields an empty array.

--------------------------
### last
**Gets the last element of an array**

```JavaScript
static Value util.last(Value v);
```

Parameters:
* v: Value, the array to get from

Returns:
* Value, returns the element

Returns the last element of an array, or undefined for an empty array or a
null/undefined argument; a non-array throws TypeError 20004. The overload
with `n` returns a new array with up to `n` trailing elements instead.

--------------------------
**Gets several elements from the end of an array**

```JavaScript
static Value util.last(Value v,
    Integer n);
```

Parameters:
* v: Value, the array to get from
* n: Integer, the number of elements to get

Returns:
* Value, returns the array of elements

Array form of last: returns up to `n` trailing elements in original order,
clamped to the length; n <= 0 or a null/undefined argument yields an empty
array.

--------------------------
### unique
**Gets a copy of an array with duplicate elements removed**

```JavaScript
static Array util.unique(Value v,
    Boolean sorted = false);
```

Parameters:
* v: Value, the array to deduplicate
* sorted: Boolean, whether the array is sorted; if the array is sorted, a faster algorithm is used

Returns:
* Array, returns the array with duplicate elements removed

Returns a new array keeping the first occurrence of each value, compared
with strict equality. With sorted = true a single backward scan is used,
which assumes equal values are adjacent and only removes adjacent
duplicates. Non-arrays throw TypeError 20004.

--------------------------
### union
**Merges the values of one or more arrays into an array of unique values**

```JavaScript
static Array util.union(...arrs);
```

Parameters:
* arrs: ..., one or more arrays to merge

Returns:
* Array, returns the merge result

Concatenates the arrays and removes duplicates with strict equality,
keeping the first occurrence; every argument must be an array (TypeError
20004 otherwise) and no argument produces an empty array.

--------------------------
### intersection
**Returns the values present in every given array**

```JavaScript
static Array util.intersection(...arrs);
```

Parameters:
* arrs: ..., one or more arrays used to compute the intersection

Returns:
* Array, returns the computed intersection

Returns the values of the first array that also appear in every remaining
array, compared with strict equality; duplicates in the first array are
removed and empty arguments yield an empty array. Non-array arguments throw
TypeError 20004.

--------------------------
### flatten
**Flattens a nested array into a single-level array; shallow stops at one level**

```JavaScript
static Array util.flatten(Value arr,
    Boolean shallow = false);
```

Parameters:
* arr: Value, the array to convert
* shallow: Boolean, whether to flatten only one level, default is false

Returns:
* Array, returns the conversion result

Flattens nested arrays (and array-like objects) into a single-level array at
any depth; shallow = true flattens one level only. Circular references
throw error 20024 ("util: circular reference [object](../../object/ifs/object.md).") and non-objects throw
TypeError 20004.

--------------------------
### without
**Returns a copy of the array with one or more elements excluded**

```JavaScript
static Array util.without(Value arr,
    ...els);
```

Parameters:
* arr: Value, the array to exclude from
* els: ..., one or more elements to exclude

Returns:
* Array, returns the exclusion result

Returns a copy of an array-like value without the listed elements, compared
with strict equality; non-objects without a length throw TypeError 20004.

--------------------------
### difference
**Returns a copy of the array with the elements of the without arrays excluded**

```JavaScript
static Array util.difference(Array list,
    ...arrs);
```

Parameters:
* list: Array, the array to exclude from
* arrs: ..., one or more arrays to exclude

Returns:
* Array, returns the exclusion result

Returns the values of the first array that do not appear in any of the other
arrays, compared with strict equality; non-array arguments throw TypeError
20004.

--------------------------
### each
**Iterates over the elements of list in order, calling iterator for each**

```JavaScript
static Value util.each(Value list,
    Function(Value element, Value index, Value list) iterator,
    Value context = undefined);
```

Parameters:
* list: Value, the list or [object](../../object/ifs/object.md) to iterate
* iterator: Function(Value element, Value index, Value list), the callback function used for iteration
* context: Value, the context [object](../../object/ifs/object.md) to bind when calling iterator

Returns:
* Value, returns list itself

Iterates an array by index or another [object](../../object/ifs/object.md) by property keys, calling
iterator(element, indexOrKey, list) with `context` bound to this. Returns
list itself; a non-[object](../../object/ifs/object.md) list is returned unchanged without iterating.

--------------------------
### map
**Maps each value in list to a new array through the transform function**

```JavaScript
static Array util.map(Value list,
    Function(Value element, Value index, Value list) => Value iterator,
    Value context = undefined);
```

Parameters:
* list: Value, the list or [object](../../object/ifs/object.md) to transform
* iterator: Function(Value element, Value index, Value list) => Value, the callback function used for transformation
* context: Value, the context [object](../../object/ifs/object.md) to bind when calling iterator

Returns:
* Array, returns the transformation result

Maps an array by index or another [object](../../object/ifs/object.md) by property keys through
iterator(element, indexOrKey, list), returning a new array of the results; a
non-[object](../../object/ifs/object.md) list yields an empty array.

--------------------------
### reduce
**Reduces the elements in list to a single value**

```JavaScript
static Value util.reduce(Value list,
    Function(Value memo, Value element, Value index, Value list) => Value iterator,
    Value memo,
    Value context = undefined);
```

Parameters:
* list: Value, the list or [object](../../object/ifs/object.md) to reduce
* iterator: Function(Value memo, Value element, Value index, Value list) => Value, the callback function used for reduction
* memo: Value, the initial value of the reduction
* context: Value, the context [object](../../object/ifs/object.md) to bind when calling iterator

Returns:
* Value, returns the reduction result

Folds an array or [object](../../object/ifs/object.md) using iterator(memo, element, indexOrKey, list) and
returns the final memo; `memo` is required and is also returned unchanged
for a non-[object](../../object/ifs/object.md) list.

--------------------------
### parseArgs
**Splits a command line string into an argument array**

```JavaScript
static NArray util.parseArgs(String command);
```

Parameters:
* command: String, the command line string to parse

Returns:
* NArray, returns the parsed parameter list

Honours double quotes and backslash escapes, and splits on whitespace. This
is a tokenizer, not Node.js's `parseArgs({ options })` parser: it does not
understand options, defaults or positionals.

Example:

```JavaScript
var util = require('util');

console.log(util.parseArgs('-a b "c d" e\\ f'));
// [ '-a', 'b', 'c d', 'e f' ]
```

--------------------------
### compile
**Compiles a script into binary code**

```JavaScript
static Buffer util.compile(String srcname,
    String script,
    Integer mode = 0);
```

Parameters:
* srcname: String, the name of the script to add
* script: String, the script code to compile
* mode: Integer, compilation mode, 0: [module](module.md), 1: script, 2: worker, default is 0

Returns:
* [Buffer](../../object/ifs/Buffer.md), returns the compiled binary code

Compiles a script into a gzipped V8 code cache (not machine-executable code)
that can be saved as a .jsc file and loaded by run or require. Mode 0 wraps
the code as a [module](module.md), mode 1 as a script and mode 2 as a worker; a leading
shebang is neutralised. Syntax errors throw SyntaxError, and compiled code
cannot be recovered as source, so programs relying on Function.toString
break. Node.js has no [util.compile](util.md#compile); this is a fibjs extension.

Example:

```JavaScript
var util = require('util');
var fs = require('fs');
var path = require('path');
var os = require('os');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'util-compile-'));
const file = path.join(dir, 'demo.jsc');
fs.writeFile(file, util.compile('demo', 'module.exports = 40 + 2;'));
console.log(require(file)); // 42
fs.unlink(file);
fs.rmdir(dir);
```

--------------------------
### sync
**Wraps a callback or async function for synchronous invocation**

```JavaScript
static Function(...args) => Value util.sync(Function(...args) => Value func,
    Boolean async_func = false);
```

Parameters:
* func: Function(...args) => Value, the function to wrap
* async_func: Boolean, whether to treat func as an async function; if false it is

Returns:
* Function(...args) => Value, returns a function that runs synchronously

`func` is called with a trailing error-first callback, or is awaited when it
is an async function (or `async_func` is true). The wrapper blocks the
current fiber until the callback fires or the promise settles, then returns
the result; a callback error or promise rejection is thrown in the caller.
Wrapping the same function returns the same wrapper, shared with promisify
and callbackify of that function.

Example:

```JavaScript
var util = require('util');

function cb_test(a, b, cb) {
    setTimeout(() => cb(null, a + b), 10);
}
console.log(util.sync(cb_test)(100, 200)); // 300

async function async_test(a, b) {
    return a + b;
}
console.log(util.sync(async_test)(100, 200)); // 300

function promise_test(a, b) {
    return Promise.resolve(a + b);
}
console.log(util.sync(promise_test, true)(100, 200)); // 300
```

--------------------------
### promisify
**Wraps a callback function for promise-based invocation**

```JavaScript
static Function(...args) => Promise util.promisify(Function(...args) => Value func);
```

Parameters:
* func: Function(...args) => Value, the function to wrap

Returns:
* Function(...args) => Promise, returns an async function

`func` must take an error-first callback as its last argument; the returned
function resolves with the callback's second argument and rejects with its
first. An invocation without a value resolves with undefined. Wrapped
functions are cached and shared with sync and callbackify. Node.js's
`promisify.custom` symbol is not supported.

Example:

```JavaScript
var util = require('util');

function cb_test(a, b, cb) {
    setTimeout(() => cb(null, a + b), 10);
}

util.promisify(cb_test)(100, 200).then(result => {
    console.log(result); // 300
});
```

--------------------------
### callbackify
**Wraps an async function for callback-based invocation**

```JavaScript
static Function(...args) util.callbackify(Function(...args) => Value func);
```

Parameters:
* func: Function(...args) => Value, the function to wrap

Returns:
* Function(...args), returns a callback function

The returned function calls back with (null, value) when the promise
resolves and (reason, null) when it rejects. A function that returns a
non-promise value does not invoke the callback at all, and a rejection with
a falsy reason is passed through as-is (Node.js wraps it in an Error with a
`reason` field). Wrapped functions are cached and shared with sync and
promisify.

Example:

```JavaScript
var util = require('util');

async function async_test(a, b) {
    return a + b;
}

util.callbackify(async_test)(100, 200, (err, result) => {
    console.log(result); // 300
});
```

--------------------------
### buildInfo
**Returns build and component version information for the engine**

```JavaScript
static Object util.buildInfo();
```

Returns:
* Object, returns the component version [object](../../object/ifs/object.md)

The result carries `fibjs`, `node` (the embedded Node API version),
`platform`, `arch`, the compiler key (`clang`, `gcc` or `msvc`), `date`,
`modules` and a `vender` [object](../../object/ifs/object.md) with the versions of the bundled libraries
(`v8`, `uv`, `openssl`, `sqlite`, `zlib`, ...). `builtins` lists the
registered [module](module.md) names. This is a fibjs extension; Node.js exposes
`process.versions` instead.

Example:

```JavaScript
var util = require('util');

const info = util.buildInfo();
console.log(info.vender.v8.length > 0); // true
console.log(info.builtins.includes('fs')); // true
```

--------------------------
### stripTypeScript
**Converts TypeScript code to JavaScript, removing all type annotations**

```JavaScript
static String util.stripTypeScript(String code);
```

Parameters:
* code: String, TypeScript source code

Returns:
* String, returns the converted JavaScript code

This method uses strip-only mode, replacing TypeScript type syntax with
spaces while keeping the line and column positions of the source code
unchanged; this keeps debugging and source maps working.

Notes: strip-only mode does not support the following syntax:
- enum (must be converted to an IIFE)
- const enum (must be inlined)
- namespace (must be converted to an IIFE)
- constructor parameter properties (such as constructor(public x: string))
- import = require() syntax
- export = syntax
- angle bracket type assertions (such as <T>expr, use the as syntax instead)

Invalid TypeScript is not validated: the stripper returns the mangled text
instead of throwing.

Example:

```JavaScript
var util = require('util');
var ts = 'const x: string = "hello";';
var js = util.stripTypeScript(ts);
console.log(js); // 'const x         = "hello";'
```

--------------------------
### getStringWidth
**Gets the visual width of a string in terminal columns**

```JavaScript
static Integer util.getStringWidth(String str);
```

Parameters:
* str: String, the string whose width is to be calculated

Returns:
* Integer, returns the visual width of the string

Characters with East Asian Width Fullwidth (F) or Wide (W) count as 2 and
most other characters as 1. Emoji with emoji presentation count as 2.
Control characters and combining marks count as 0; ANSI escape sequences
are skipped.

Example:

```JavaScript
var util = require('util');

console.log(util.getStringWidth('hello')); // 5
console.log(util.getStringWidth('\u4f60\u597d')); // 4
console.log(util.getStringWidth('\u001b[31mred\u001b[0m')); // 3
```

--------------------------
### stripVTControlCharacters
**Removes ANSI escape sequences (VT control characters) from a string**

```JavaScript
static String util.stripVTControlCharacters(String str);
```

Parameters:
* str: String, the string to [process](process.md)

Returns:
* String, returns the string with ANSI escape sequences removed

Removes CSI sequences ([colors](colors.md), cursor movement), OSC sequences terminated by
BEL or ST, and two-byte ESC sequences; other characters are copied
unchanged. Node.js exposes the same function.

Example:

```JavaScript
var util = require('util');

console.log(util.stripVTControlCharacters('\u001b[31mred\u001b[0m')); // red
console.log(util.stripVTControlCharacters('\u001b]0;title\u0007body')); // body
```

