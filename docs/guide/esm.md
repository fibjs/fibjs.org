# Using ECMAScript Modules (ESM) in fibjs

fibjs is a high-performance JavaScript runtime that supports ECMAScript modules (ESM). Using ESM in fibjs lets you organize your code better and take advantage of the modular features of modern JavaScript. The following is an introduction to using ESM in fibjs.

## 1. What are ECMAScript modules (ESM)?

ECMAScript modules (ESM) are the official module system for JavaScript. They let you split your code into independent modules, where each module exposes only the parts that are needed and can import the functionality it needs from other modules. ESM provides the `import` and `export` syntax for importing and exporting modules.

In traditional JavaScript development, code was usually written in one or more files, but the dependencies between those files were not explicit, which made the code harder to maintain and read. To improve this, the community developed several module systems, such as CommonJS and AMD. However, these module systems are not part of the JavaScript language itself; they are implemented through tools and libraries. As the JavaScript ecosystem evolved, a standardized module system became increasingly important. ECMAScript modules (ESM) emerged in response and were introduced in ECMAScript 2015 (ES6).

The design goal of ESM is to provide a standardized way to define modules and their dependencies, thereby making code more maintainable and readable. By using ESM, developers can organize code more clearly and reuse code more easily. The core features of ESM include static structure, top-level scope, strict mode, and asynchronous loading.

### Static structure

An important feature of ESM is its static structure. Unlike CommonJS modules, an ESM module's dependencies can be determined at compile time. This means that before the code executes, the JavaScript engine already knows which modules need to be loaded. This static structure allows tools and optimizers to analyze and optimize code better, thereby improving performance.

### Top-level scope

In ESM, every module has its own top-level scope. Variables, functions, and classes defined inside a module do not leak into the global scope and do not affect other modules. This scope isolation helps avoid naming conflicts and makes modules more independent and reusable.

### Strict mode

ESM modules execute in strict mode by default. Strict mode is a stricter mode of JavaScript parsing and execution that eliminates some unreasonable and unsafe features of JavaScript, thereby improving the robustness and security of code. For example, in strict mode you cannot use undeclared variables, cannot delete non-deletable properties, and so on. By enabling strict mode by default, ESM modules help developers write more robust and secure code.

### Asynchronous loading

ESM supports loading modules asynchronously, which is very important for improving performance and user experience. In the traditional synchronous loading model, the browser must wait for all dependent modules to finish loading before it can execute the code, which can make page load times too long. With ESM, modules can be loaded asynchronously, which reduces page load time and improves user experience.

### `import` and `export` syntax

ESM provides the `import` and `export` syntax for importing and exporting modules. The `export` syntax defines a module's public interface, that is, the parts the module wants to expose to other modules. The `import` syntax imports functionality from other modules. In this way, developers can clearly define a module's dependencies and reuse code conveniently.

For example, suppose there is a module `math.mjs` that exports an `add` function:

```javascript
// math.mjs
export function add(a, b) {
    return a + b;
}
```

You can import this function in another module and use it:

```javascript
// main.mjs
import { add } from './math.mjs';
console.log(add(2, 3)); // Output: 5
```

ECMAScript modules (ESM) are the official module system for JavaScript. By providing standardized module definitions and dependency management, they improve the maintainability and readability of code. By using ESM, developers can organize code better and use the modular features of modern JavaScript to build complex applications.

## 2. Using ESM in fibjs

In fibjs, you can use the `import` syntax to import modules and the `export` syntax to export modules. fibjs also supports importing modules asynchronously, which is very useful for dynamic loading. In addition, fibjs supports using the `require` syntax in CommonJS modules to import `.mjs` files. With these features, developers can make full use of the advantages of ECMAScript modules (ESM) in fibjs to organize and manage code.

### 2.1 Simple import

You can use the `import` syntax to import a module. For example, suppose you have a module `esm1.mjs` that exports an object:

```javascript
// esm1.mjs
export const test = 4;
```

You can import this module in another file:

```javascript
// main.js
import { test } from './esm1.mjs';
console.log(test); // Output: 4
```

This approach is very intuitive: you can clearly see the module's dependencies and reuse code conveniently. This helps developers organize code better and improves the maintainability and readability of the code.

### 2.2 Importing `.mjs` files with `require`

In CommonJS modules, fibjs allows you to use the `require` syntax to import `.mjs` files. For example:

```javascript
// main.js
const m = require('./esm1.mjs');
console.log(m.test); // Output: 4
```

This makes using ESM more flexible, because you can gradually introduce ESM modules into existing CommonJS modules without refactoring all the code at once. This is very useful for incremental migration of large projects.

### 2.3 Asynchronous import

fibjs supports using the `await import` syntax to import modules asynchronously. This is very useful when you need to load modules dynamically. For example:

```javascript
// main.js
(async () => {
    const module = await import('./esm1.mjs');
    console.log(module.test); // Output: 4
})();
```

Asynchronous imports can improve application performance, because they let you load modules only when needed instead of loading all modules at once at application startup. This is especially important for large applications, because it reduces initial load time and improves user experience.

### 2.4 Importing JSON files

You can import JSON files directly, and fibjs will automatically parse them into JavaScript objects. For example:

```javascript
// data.json
{
    "test": 500
}

// main.js
import data from './data.json';
console.log(data.test); // Output: 500
```

This makes handling JSON data very simple and intuitive. You can import JSON files directly in your code without an extra parsing step. This is very useful for configuration files or static data.

### 2.5 Importing built-in modules

fibjs allows you to use the `import` syntax to import built-in modules. For example:

```javascript
// main.js
import { Buffer } from 'buffer';
console.log(Buffer); // Output: [Function: Buffer]
```

This makes using built-in modules more convenient and consistent. You can use the same `import` syntax to import both built-in and custom modules, which simplifies your code structure.

### 2.6 Using `import.meta`

`import.meta` is an object containing metadata about the current module. You can use `import.meta` to get the module's file path and URL. For example:

```javascript
// main.js
console.log(import.meta.url); // Output the URL of the current module
```

This makes getting module metadata very simple and intuitive. You can use `import.meta` to get information about the current module and handle it accordingly in your code.

### 2.7 Using ESM in a sandbox

fibjs provides the `vm.SandBox` class, which can run code in a sandbox. You can use ESM inside a sandbox:

```javascript
// main.js
const vm = require('vm');
const sbox = new vm.SandBox();

(async () => {
    const module = await sbox.import('./esm1.mjs', __dirname);
    console.log(module.test); // Output: 4
})();
```

This makes running code in a sandbox very simple and intuitive. You can use the `vm.SandBox` class to run code in a sandbox, which improves the security and isolation of your code.

### 2.8 Parallel imports

fibjs supports importing modules in parallel, which is very useful for improving performance. For example:

```javascript
// main.js
const module1Promise = import('./esm1.mjs');
const module2Promise = import('./esm2.mjs');

Promise.all([module1Promise, module2Promise]).then(([module1, module2]) => {
    console.log(module1.test); // Output: 4
    console.log(module2.test); // Output: 200
});
```

Importing modules in parallel can significantly improve application performance, because it lets you load multiple modules at the same time instead of one after another. This is especially important for large applications, because it reduces load time and improves user experience.

### 2.9 Using dynamic imports

fibjs also supports dynamic imports, which is very useful when modules need to be loaded based on conditions. For example:

```javascript
// main.js
const moduleName = './esm1.mjs';

import(moduleName).then((module) => {
    console.log(module.test); // Output: 4
});
```

Dynamic imports make code more flexible, because you can decide which module to load based on runtime conditions. This is very useful when different modules need to be loaded based on user input or other conditions.

### 2.10 Using namespace imports

You can use namespace import syntax to import an entire module as an object. For example:

```javascript
// esm1.mjs
export const test = 4;
export function add(a, b) {
    return a + b;
}

// main.js
import * as math from './esm1.mjs';
console.log(math.test); // Output: 4
console.log(math.add(2, 3)); // Output: 5
```

Namespace import syntax makes importing an entire module very simple and intuitive. You can import the whole module as an object and conveniently access all of its exports.

### 2.11 Using default exports

You can use default export syntax to export a module's default value. For example:

```javascript
// esm1.mjs
const test = 4;
export default test;

// main.js
import test from './esm1.mjs';
console.log(test); // Output: 4
```

Default export syntax makes exporting a module's default value very simple and intuitive. You can use the `export default` syntax to export a module's default value, which simplifies importing and using the module.

### 2.12 Using named exports

You can use named export syntax to export multiple values from a module. For example:

```javascript
// esm1.mjs
export const test = 4;
export function add(a, b) {
    return a + b;
}

// main.js
import { test, add } from './esm1.mjs';
console.log(test); // Output: 4
console.log(add(2, 3)); // Output: 5
```

Named export syntax makes exporting multiple values from a module very simple and intuitive. You can use the `export` syntax to export multiple values, so they can be conveniently used in other modules.

### 2.13 Using renamed exports

You can use renamed export syntax to export a module's values under different names. For example:

```javascript
// esm1.mjs
const test = 4;
function add(a, b) {
    return a + b;
}
export { test as value, add as sum };

// main.js
import { value, sum } from './esm1.mjs';
console.log(value); // Output: 4
console.log(sum(2, 3)); // Output: 5
```

Renamed export syntax makes exporting a module's values very flexible. You can rename values when exporting them, which avoids naming conflicts and makes the code clearer and easier to read.

### 2.14 Using renamed imports

You can use renamed import syntax to import a module's values under different names. For example:

```javascript
// esm1.mjs
export const test = 4;
export function add(a, b) {
    return a + b;
}

// main.js
import { test as value, add as sum } from './esm1.mjs';
console.log(value); // Output: 4
console.log(sum(2, 3)); // Output: 5
```

Renamed import syntax makes importing a module's values very flexible. You can rename values when importing them, which avoids naming conflicts and makes the code clearer and easier to read.

## Conclusion

fibjs's support for ECMAScript modules (ESM) lets developers organize code using the modular features of modern JavaScript. By using the `import` and `export` syntax, developers can manage dependencies better and improve the maintainability and readability of code. In addition, fibjs supports using the `require` syntax in CommonJS modules to import `.mjs` files, which makes using ESM more flexible. fibjs's asynchronous loading and parallel import features further improve application performance and user experience.

With these features, developers can make full use of the advantages of ECMAScript modules (ESM) in fibjs to organize and manage code, and thus build more robust and efficient applications. fibjs's ESM support lets developers share code between the server side and the client side, improving development efficiency and code quality.

👉 [Using TypeScript in fibjs](ts.md)
