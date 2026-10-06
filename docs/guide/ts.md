# Using TypeScript in fibjs

fibjs is a high-performance JavaScript runtime that supports loading and executing TypeScript modules. This article explains how to use TypeScript in fibjs.

## What is TypeScript

TypeScript is an open-source programming language developed and maintained by Microsoft. It is a superset of JavaScript that mainly adds static typing and class-based object-oriented programming. TypeScript improves the readability and maintainability of code through type annotations and type inference, and provides compile-time type checking that helps developers find potential errors while writing code.

### Main features of TypeScript

1. **Type system**: TypeScript provides a rich type system, including primitive types, interfaces, enums, tuples, union types, intersection types and more. With it, developers can describe data structures and function signatures more precisely and reduce runtime errors.
2. **Modern JavaScript features**: TypeScript supports the latest ECMAScript standards, including arrow functions, template strings, destructuring assignments, async functions and more. Developers can use these modern features to write more concise and efficient code.
3. **Compiler**: TypeScript ships a powerful compiler that compiles TypeScript code into plain JavaScript. The compiler also offers a rich set of configuration options so developers can customize the compilation process.
4. **Tooling support**: TypeScript integrates well with mainstream development tools and editors (such as Visual Studio Code, WebStorm and Sublime Text), providing code completion, type checking and refactoring to improve productivity.
5. **Community and ecosystem**: TypeScript has a large community and a rich ecosystem; many popular JavaScript libraries and frameworks (such as React, Angular and Vue) provide TypeScript support. Developers can use these resources to build high-quality applications quickly.

## Environment setup

First, make sure fibjs is installed. You can download and install the latest version from the [official fibjs website](https://fibjs.org/).

## Writing TypeScript code

Create some TypeScript files, for example `ts1.cts` and `ts2.mts`:

```typescript
// ts1.cts
export const test = "test1";

// ts2.mts
export const test = "test2";
```

## Loading TypeScript modules in fibjs

fibjs can load and execute TypeScript modules directly. You can use either `require` or `import` syntax to load a TypeScript module. Note that when fibjs loads a TypeScript module it does not perform full syntax checking: it strips the TypeScript type annotations and converts the code to JavaScript syntax, so loading is very fast. This mechanism lets developers enjoy the benefits of TypeScript, such as type checking and code completion, during development while getting the same runtime performance as JavaScript.

### Loading TypeScript modules with `require`

In fibjs you can load TypeScript modules with `require` syntax. `require` is normally used to load CommonJS modules, which use the `.cts` extension. Here is an example:

```javascript
const t1 = require('./ts_files/ts1.cts');
console.log(t1.test); // Output: test1

const t2 = require('./ts_files/ts2.mts');
console.log(t2.test); // Output: test2
```

In this example we load two TypeScript modules with `require`: one CommonJS module (`ts1.cts`) and one ES module (`ts2.mts`). fibjs handles both automatically, converts them to JavaScript syntax and executes them.

### Loading TypeScript modules with `import`

You can also load TypeScript modules with `import` syntax. `import` is normally used to load ES modules, which use the `.mts` extension. Here is an example:

```javascript
import { test as test1 } from './ts_files/ts1.cts';
console.log(test1); // Output: test1

import { test as test2 } from './ts_files/ts2.mts';
console.log(test2); // Output: test2
```

In this example we load two TypeScript modules with `import`. Unlike `require`, `import` is static, meaning it resolves module dependencies at compile time. This makes the code more modular and maintainable.

### Loading TypeScript modules dynamically with `await import`

You can load TypeScript modules dynamically with `await import`. Dynamic import lets you load modules on demand at runtime, which is useful for lazy or conditional loading. Here is an example:

```javascript
(async () => {
    const t1 = await import('./ts_files/ts1.cts');
    console.log(t1.test); // Output: test1

    const t2 = await import('./ts_files/ts2.mts');
    console.log(t2.test); // Output: test2
})();
```

In this example we dynamically load two TypeScript modules with `await import`. Dynamic import returns a Promise that resolves to the module's exports object when the module has finished loading.

### Module types

In TypeScript, `.cts` files are CommonJS modules and `.mts` files are ES modules. The module type of a `.ts` file depends on the settings in `package.json`. fibjs handles both kinds of modules and picks the appropriate loading method based on the file extension.

### Example

Create some TypeScript files, for example `test3.mts` and `test4.mts`:

```typescript
// test3.mts
export const test3 = "test3";

// test4.mts
export const test4 = "test4";
```

You can load these modules with the following code:

```javascript
(async () => {
    const t3 = await import('./ts_files/test3.mts');
    console.log(t3.test3); // Output: test3

    const t4 = await import('./ts_files/test4.mts');
    console.log(t4.test4); // Output: test4
})();
```

### Importing TypeScript modules from CommonJS and ES modules

You can import TypeScript modules from CommonJS and ES modules:

```javascript
(async () => {
    const t5 = await import('./ts_files/test5.mts');
    console.log(t5.test5); // Output: test5

    const t6 = await import('./ts_files/test6.mts');
    console.log(t6.test6); // Output: test6
})();
```

## fibjs-specific support

fibjs's support for TypeScript modules goes beyond basic loading and execution: it includes a few distinctive features that help developers use TypeScript more efficiently.

### 1. Fast loading

Because fibjs does not perform full syntax checking when loading a TypeScript module but instead strips the TypeScript type annotations and converts the code to JavaScript syntax, modules load very quickly. This mechanism lets developers enjoy the benefits of TypeScript, such as type checking and code completion, during development while getting the same runtime performance as JavaScript.

### 2. Dynamic import

fibjs supports dynamic module import with `await import`, which is useful when modules must be loaded conditionally. For example:

```javascript
const moduleName = './ts_files/ts1.cts';

import(moduleName).then((module) => {
    console.log(module.test); // Output: test1
});
```

Dynamic import makes code more flexible, because you can decide at runtime which module to load. This is useful when different modules are selected based on user input or other conditions.

### 3. Parallel import

fibjs supports importing modules in parallel, which is useful for improving performance. For example:

```javascript
const module1Promise = import('./ts_files/ts1.cts');
const module2Promise = import('./ts_files/ts2.mts');

Promise.all([module1Promise, module2Promise]).then(([module1, module2]) => {
    console.log(module1.test); // Output: test1
    console.log(module2.test); // Output: test2
});
```

Importing modules in parallel can significantly improve application performance, because it lets you load several modules at the same time instead of one after another. This matters especially for large applications, where it shortens load time and improves the user experience.

The examples and features above show the many ways to load TypeScript modules in fibjs. fibjs's TypeScript support lets developers write more robust code with TypeScript's type checking and modern JavaScript features, while getting the same runtime performance as JavaScript.

👉 [Server-side Module Hot Update](server-hot-update.md)