# Module vm
The vm [module](module.md) runs JavaScript source text in the current context or in a fresh, isolated context and exposes the [SandBox](../../object/ifs/SandBox.md) [module](module.md) [registry](registry.md); use it to evaluate generated code, reuse a compiled script and keep evaluated code away from host globals

Main capabilities:

- **Evaluate text**: `runInThisContext` (host context), `runInNewContext` (fresh context) and
  `runInContext` (a context prepared by createContext);
- **Contexts**: `createContext` prepares an [object](../../object/ifs/object.md) as a context, `isContext` detects one;
- **Compiled scripts**: the `Script` class — constructor, `runInThisContext`, `runInContext`,
  `runInNewContext` and `createCachedData`;
- **Module [registry](registry.md)**: the `SandBox` class, an isolated [module](module.md) table with its own require (see
  the [SandBox](../../object/ifs/SandBox.md) class; it is a [module](module.md) loader, not a script evaluation API).

Concepts:

- **Compile vs run**: every runIn* function compiles the source text and runs it in one step;
  [Script](../../object/ifs/Script.md) splits the two so one compiled script can be run any number of times in different
  contexts. Use createCachedData to persist the V8 code cache between processes.
- **Contexts**: a context is a [global](global.md) [object](../../object/ifs/object.md) plus its own set of built-ins. createContext
  prepares an [object](../../object/ifs/object.md) and returns it marked as a context; runInNewContext prepares the [object](../../object/ifs/object.md) it
  is given. The prepared [object](../../object/ifs/object.md) is the visible [global](global.md): its own properties are readable and
  writable by the script, and globals the script creates appear as its properties. Contexts do
  not share their globals, so the same compiled script keeps separate state in each context.
- **Isolation**: a fresh context isolates the [global](global.md) scope but is not a security boundary; the
  script can still reach the host through the objects it is given, including functions such as
  [Buffer](../../object/ifs/Buffer.md). A fresh context provides the standard JavaScript built-ins and [Buffer](../../object/ifs/Buffer.md); it has no
  [console](console.md), [timers](timers.md), require, [process](process.md), [module](module.md), URL or fetch. runInThisContext runs in the normal
  fibjs [global](global.md), where all of these exist. See the [SandBox](../../object/ifs/SandBox.md) class for an isolated [module](module.md) [registry](registry.md).
- **[SandBox](../../object/ifs/SandBox.md) and vm**: the [module](module.md) exposes two complementary tools. A standalone [SandBox](../../object/ifs/SandBox.md) [global](global.md)
  is also a vm context (`vm.isContext(sandbox.global)` is true), so
  `vm.runInContext(code, sandbox.global)` evaluates code against the sandbox [global](global.md), while
  `sandbox.require` loads modules through the sandbox [registry](registry.md).
- **Results and errors**: the completion value of the last statement is returned; an empty
  script returns undefined. A syntax error is thrown during compilation as a SyntaxError with
  the V8 message and no error number. A runtime error is an ordinary JavaScript error whose
  stack names the script file; the default file name is `<anonymous>`, and filename, lineOffset
  and columnOffset change the reported position. Running in an [object](../../object/ifs/object.md) that is not a context
  throws Error 20003. An opts argument that is a number, boolean or array throws Error 20005;
  null is accepted as "no options".
- **Timeout**: the timeout option (milliseconds) limits one run. A run that exceeds it fails
  with Error 20021 ("The maximum amount of time for a script to execute was exceeded.");
  Node.js reports the same condition as an ERR_SCRIPT_EXECUTION_TIMEOUT error.
- **Dynamic import**: vm installs no import callback for compiled scripts, so code that calls
  `import()` aborts the [process](process.md) in this release; load modules with require instead.
- **Node.js comparison**: the core surface matches Node's vm — createContext, isContext,
  runInContext, runInNewContext, runInThisContext, and [Script](../../object/ifs/Script.md) with the three run methods and
  createCachedData. The per-member notes list the differences; the main ones are the default
  file name `<anonymous>` (Node.js uses `evalmachine.<anonymous>`), the `type: '[module](module.md)'`
  compile option as a fibjs extension, and the missing Node.js members compileFunction,
  measureMemory, [constants](constants.md), SourceTextModule and SyntheticModule.

Import:

```JavaScript
const vm = require('vm');
```

Example 1 — evaluate expressions and share state in the current context:

```JavaScript
const vm = require('vm');

console.log(vm.runInThisContext('6 * 7')); // 42

vm.runInThisContext('globalThis.__vm_runs = (globalThis.__vm_runs || 0) + 1;');
console.log(globalThis.__vm_runs); // 1
delete globalThis.__vm_runs;
```

Example 2 — isolate code in a new context and reuse an existing one:

```JavaScript
const vm = require('vm');

const sandbox = {
    count: 1
};
console.log(vm.runInNewContext('count += 41; count;', sandbox)); // 42
console.log(sandbox.count); // 42

const context = vm.createContext({
    name: 'fibjs'
});
console.log(vm.isContext(context)); // true
console.log(vm.runInContext('name + "!"', context)); // fibjs!
```

Example 3 — compile once, reuse the script, reuse its code cache, and bound the run time:

```JavaScript
const vm = require('vm');

const source = 'counter = (typeof counter === "undefined" ? 0 : counter) + 1; counter;';
const script = new vm.Script(source);
console.log(script.runInNewContext({})); // 1
console.log(script.runInNewContext({
    counter: 41
})); // 42

console.log(new vm.Script(source, {
        cachedData: script.createCachedData()
    })
    .runInNewContext({
        counter: 41
    })); // 42

try {
    new vm.Script('while (true);').runInThisContext({
        timeout: 100
    });
} catch (e) {
    console.log(e.number); // 20021
}
```

## Objects
        
### SandBox
**The [SandBox](../../object/ifs/SandBox.md) class [object](../../object/ifs/object.md), see the [SandBox](../../object/ifs/SandBox.md) class**

```JavaScript
SandBox vm.SandBox;
```

A [SandBox](../../object/ifs/SandBox.md) is an isolated [module](module.md) [registry](registry.md): it owns a [module](module.md) table and loads code through
`sandbox.require`, which is a different concern from running script text in a context. The
two meet again because a standalone sandbox [global](global.md) is a vm context, so it can be passed to
runInContext.

--------------------------
### Script
**The [Script](../../object/ifs/Script.md) class [object](../../object/ifs/object.md), see the [Script](../../object/ifs/Script.md) class**

```JavaScript
Script vm.Script;
```

A [Script](../../object/ifs/Script.md) compiles source text once and runs it in any context. The runIn* functions of this
[module](module.md) are one-shot equivalents that compile and run in a single call.

## Static Methods
        
### createContext
**Prepares an [object](../../object/ifs/object.md) as a context and returns it**

```JavaScript
static Object vm.createContext(Object contextObject = {},
    Object opts = {});
```

Parameters:
* contextObject: Object, the [object](../../object/ifs/object.md) to prepare as a context; a new empty [object](../../object/ifs/object.md) when omitted
* opts: Object, reserved options, ignored in this release

Returns:
* Object, the prepared context [object](../../object/ifs/object.md)

The [object](../../object/ifs/object.md) is marked as a context and becomes the [global](global.md) [object](../../object/ifs/object.md) of the new context: its own
properties are readable and writable by scripts, and globals the scripts create appear as
its properties. The mark is permanent; calling createContext again with a prepared [object](../../object/ifs/object.md)
returns it unchanged, and isContext then reports true.

opts is accepted for Node.js compatibility and is currently ignored. Preparing a context is
not a security boundary, see the [module](module.md) Concepts.

Example:

```JavaScript
const vm = require('vm');

const context = vm.createContext({
    count: 0
});
vm.runInContext('count += 1;', context);
console.log(context.count, vm.isContext(context)); // 1 true
```

--------------------------
### isContext
**Returns true when the [object](../../object/ifs/object.md) is a prepared context**

```JavaScript
static Boolean vm.isContext(Object contextObject);
```

Parameters:
* contextObject: Object, the [object](../../object/ifs/object.md) to check

Returns:
* Boolean, true when the [object](../../object/ifs/object.md) is a prepared context

A true result means the [object](../../object/ifs/object.md) carries the context mark set by createContext or
runInNewContext, or that it is the standalone [global](global.md) of a [SandBox](../../object/ifs/SandBox.md). A plain [object](../../object/ifs/object.md) returns
false.

Example:

```JavaScript
const vm = require('vm');

console.log(vm.isContext({})); // false
console.log(vm.isContext(vm.createContext())); // true
```

--------------------------
### runInContext
**Compiles the code and runs it in a prepared context, returning the completion value**

```JavaScript
static Value vm.runInContext(String code,
    Object contextifiedObject,
    Object | String opts = {});
```

Parameters:
* code: String, the source text to compile and run
* contextifiedObject: Object, the prepared context to run in; Error 20003 when it is not a context
* opts: Object | String, the run options [object](../../object/ifs/object.md), or the script file name

Returns:
* Value, the completion value of the last statement

contextifiedObject must be a context, otherwise Error 20003 is thrown. The code runs in that
context's [global](global.md) scope, reading and writing its properties; globals it creates remain in the
context for later runs.

opts may be an options [object](../../object/ifs/object.md) or a file name string equivalent to an [object](../../object/ifs/object.md) with filename.
The compile and run options are accepted in the same [object](../../object/ifs/object.md):

```JavaScript
// fragment: options
({
    "filename": "<anonymous>", // file name used in error stacks
    "lineOffset": 0, // number of lines added to reported positions
    "columnOffset": 0, // number of columns added to reported positions
    "timeout": 0 // run limit in milliseconds; 0 disables the limit
})
```

A syntax error is thrown as a SyntaxError at compile time. A run that exceeds timeout fails
with Error 20021 ("The maximum amount of time for a script to execute was exceeded.");
Node.js reports the same condition as ERR_SCRIPT_EXECUTION_TIMEOUT.

Example:

```JavaScript
const vm = require('vm');

const context = vm.createContext({
    width: 6,
    height: 7
});
console.log(vm.runInContext('width * height', context)); // 42
```

--------------------------
### runInNewContext
**Prepares an [object](../../object/ifs/object.md) as a context, compiles the code and runs it in that context**

```JavaScript
static Value vm.runInNewContext(String code,
    Object contextObject = {},
    Object | String opts = {});
```

Parameters:
* code: String, the source text to compile and run
* contextObject: Object, the [object](../../object/ifs/object.md) to prepare as a context; a new empty [object](../../object/ifs/object.md) when omitted
* opts: Object | String, the run options [object](../../object/ifs/object.md), or the script file name

Returns:
* Value, the completion value of the last statement

Equivalent to createContext(contextObject) followed by runInContext(code, contextObject,
opts); the [object](../../object/ifs/object.md) remains a context afterwards, so it can be reused with runInContext. When
contextObject is omitted, a new empty [object](../../object/ifs/object.md) is used and discarded.

opts may be an options [object](../../object/ifs/object.md) or a file name string; the options are the same as
runInContext, including timeout.

Example:

```JavaScript
const vm = require('vm');

const sandbox = {
    name: 'fibjs'
};
console.log(vm.runInNewContext('name.toUpperCase()', sandbox)); // FIBJS
console.log(sandbox.name); // fibjs (the script did not modify it)
```

--------------------------
### runInThisContext
**Compiles the code and runs it in the current context, returning the completion value**

```JavaScript
static Value vm.runInThisContext(String code,
    Object | String opts = {});
```

Parameters:
* code: String, the source text to compile and run
* opts: Object | String, the run options [object](../../object/ifs/object.md), or the script file name

Returns:
* Value, the completion value of the last statement

The script shares the caller [global](global.md) [object](../../object/ifs/object.md): it can read and write [global](global.md) variables and use
the host require, [process](process.md) and [timers](timers.md). opts may be an options [object](../../object/ifs/object.md) or a file name string;
the options are the same as runInContext, including timeout.

