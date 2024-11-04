# 使用 fibjs 的 ECMAScript 模块 (ESM)

fibjs 是一个高性能的 JavaScript 运行时，支持 ECMAScript 模块 (ESM)。在 fibjs 中使用 ESM 可以让你更好地组织代码，并利用现代 JavaScript 的模块化特性。以下是如何在 fibjs 中使用 ESM 的介绍。

## 1. 什么是 ECMAScript 模块 (ESM)？

ECMAScript 模块 (ESM) 是 JavaScript 的官方模块系统。它允许你将代码分割成独立的模块，每个模块只暴露需要的部分，并且可以从其他模块中导入需要的功能。ESM 提供了 `import` 和 `export` 语法来实现模块的导入和导出。

在传统的 JavaScript 开发中，代码通常被写在一个或多个文件中，但这些文件之间的依赖关系并不明确，导致代码的可维护性和可读性较差。为了改善这一问题，社区开发了多种模块系统，如 CommonJS 和 AMD。然而，这些模块系统并不是 JavaScript 语言本身的一部分，而是通过工具和库来实现的。随着 JavaScript 生态系统的发展，标准化的模块系统变得越来越重要。于是，ECMAScript 模块 (ESM) 应运而生，并在 ECMAScript 2015 (ES6) 中被引入。

ESM 的设计目标是提供一种标准化的方式来定义模块及其依赖关系，从而提高代码的可维护性和可读性。通过使用 ESM，开发者可以更清晰地组织代码，并且可以更方便地重用代码。ESM 的核心特性包括静态结构、顶层作用域、严格模式和异步加载。

### 静态结构

ESM 的一个重要特性是其静态结构。与 CommonJS 模块不同，ESM 模块在编译时就能确定模块的依赖关系。这意味着在代码执行之前，JavaScript 引擎就已经知道哪些模块需要被加载。这种静态结构使得工具和优化器可以更好地分析和优化代码，从而提高性能。

### 顶层作用域

在 ESM 中，每个模块都有自己的顶层作用域。模块内部定义的变量、函数和类不会泄漏到全局作用域，也不会影响其他模块。这种作用域隔离有助于避免命名冲突，并使得模块更加独立和可重用。

### 严格模式

ESM 模块默认在严格模式下执行。严格模式是一种更严格的 JavaScript 解析和执行模式，它消除了 JavaScript 中的一些不合理和不安全的特性，从而提高代码的健壮性和安全性。例如，在严格模式下，不能使用未声明的变量，不能删除不可删除的属性，等等。通过默认启用严格模式，ESM 模块可以帮助开发者编写更健壮和安全的代码。

### 异步加载

ESM 支持异步加载模块，这对于提高性能和用户体验非常重要。在传统的同步加载模式下，浏览器必须等待所有依赖的模块加载完成后才能执行代码，这可能导致页面加载时间过长。而在 ESM 中，模块可以异步加载，从而减少页面加载时间，提高用户体验。

### `import` 和 `export` 语法

ESM 提供了 `import` 和 `export` 语法来实现模块的导入和导出。`export` 语法用于定义模块的公共接口，即模块希望暴露给其他模块的部分。`import` 语法用于从其他模块中导入功能。通过这种方式，开发者可以清晰地定义模块的依赖关系，并且可以方便地重用代码。

例如，假设有一个模块 `math.mjs`，它导出一个函数 `add`：

```javascript
// math.mjs
export function add(a, b) {
    return a + b;
}
```

你可以在另一个模块中导入这个函数并使用它：

```javascript
// main.mjs
import { add } from './math.mjs';
console.log(add(2, 3)); // 输出: 5
```

ECMAScript 模块 (ESM) 是 JavaScript 的官方模块系统，它通过提供标准化的模块定义和依赖管理机制，提高了代码的可维护性和可读性。通过使用 ESM，开发者可以更好地组织代码，并利用现代 JavaScript 的模块化特性来构建复杂的应用程序。

## 2. 在 fibjs 中使用 ESM

在 fibjs 中，你可以使用 `import` 语法来导入模块，并使用 `export` 语法来导出模块。fibjs 还支持异步导入模块，这对于动态加载模块非常有用。此外，fibjs 还支持在 CommonJS 模块中使用 `require` 语法来导入 `.mjs` 文件。通过这些特性，开发者可以在 fibjs 中充分利用 ECMAScript 模块 (ESM) 的优势来组织和管理代码。

### 2.1 简单导入

你可以使用 `import` 语法来导入一个模块。例如，假设你有一个模块 `esm1.mjs`，它导出一个对象：

```javascript
// esm1.mjs
export const test = 4;
```

你可以在另一个文件中导入这个模块：

```javascript
// main.js
import { test } from './esm1.mjs';
console.log(test); // 输出: 4
```

这种方式非常直观，可以清晰地看到模块的依赖关系，并且可以方便地重用代码。通过这种方式，开发者可以更好地组织代码，提高代码的可维护性和可读性。

### 2.2 使用 `require` 导入 `.mjs` 文件

在 CommonJS 模块中，fibjs 允许你使用 `require` 语法来导入 `.mjs` 文件。例如：

```javascript
// main.js
const m = require('./esm1.mjs');
console.log(m.test); // 输出: 4
```

这种方式使得在使用 ESM 时更加灵活，因为你可以在现有的 CommonJS 模块中逐步引入 ESM 模块，而不需要一次性重构所有代码。这对于大型项目的渐进式迁移非常有用。

### 2.3 异步导入

fibjs 支持使用 `await import` 语法来异步导入模块。这在需要动态加载模块时非常有用。例如：

```javascript
// main.js
(async () => {
    const module = await import('./esm1.mjs');
    console.log(module.test); // 输出: 4
})();
```

异步导入模块可以提高应用程序的性能，因为它允许你在需要时才加载模块，而不是在应用程序启动时一次性加载所有模块。这对于大型应用程序尤其重要，因为它可以减少初始加载时间，提高用户体验。

### 2.4 导入 JSON 文件

你可以直接导入 JSON 文件，fibjs 会自动将其解析为 JavaScript 对象。例如：

```javascript
// data.json
{
    "test": 500
}

// main.js
import data from './data.json';
console.log(data.test); // 输出: 500
```

这种方式使得处理 JSON 数据变得非常简单和直观。你可以直接在代码中导入 JSON 文件，而不需要额外的解析步骤。这对于处理配置文件或静态数据非常有用。

### 2.5 导入内置模块

fibjs 允许你使用 `import` 语法导入内置模块。例如：

```javascript
// main.js
import { Buffer } from 'buffer';
console.log(Buffer); // 输出: [Function: Buffer]
```

这种方式使得使用内置模块变得更加方便和一致。你可以使用相同的 `import` 语法来导入内置模块和自定义模块，从而简化代码结构。

### 2.6 使用 `import.meta`

`import.meta` 是一个包含当前模块元数据的对象。你可以使用 `import.meta` 获取模块的文件路径和 URL。例如：

```javascript
// main.js
console.log(import.meta.url); // 输出当前模块的 URL
```

这种方式使得获取模块的元数据变得非常简单和直观。你可以使用 `import.meta` 获取当前模块的相关信息，从而在代码中进行相应的处理。

### 2.7 在沙箱中使用 ESM

fibjs 提供了 `vm.SandBox` 类，可以在沙箱中运行代码。你可以在沙箱中使用 ESM：

```javascript
// main.js
const vm = require('vm');
const sbox = new vm.SandBox();

(async () => {
    const module = await sbox.import('./esm1.mjs', __dirname);
    console.log(module.test); // 输出: 4
})();
```

这种方式使得在沙箱中运行代码变得非常简单和直观。你可以使用 `vm.SandBox` 类在沙箱中运行代码，从而提高代码的安全性和隔离性。

### 2.8 并行导入

fibjs 支持并行导入模块，这对于提高性能非常有用。例如：

```javascript
// main.js
const module1Promise = import('./esm1.mjs');
const module2Promise = import('./esm2.mjs');

Promise.all([module1Promise, module2Promise]).then(([module1, module2]) => {
    console.log(module1.test); // 输出: 4
    console.log(module2.test); // 输出: 200
});
```

并行导入模块可以显著提高应用程序的性能，因为它允许你同时加载多个模块，而不是一个接一个地加载。这对于大型应用程序尤其重要，因为它可以减少加载时间，提高用户体验。

### 2.9 使用动态导入

fibjs 还支持动态导入模块，这对于需要根据条件加载模块的场景非常有用。例如：

```javascript
// main.js
const moduleName = './esm1.mjs';

import(moduleName).then((module) => {
    console.log(module.test); // 输出: 4
});
```

动态导入模块使得代码更加灵活，因为你可以根据运行时的条件来决定加载哪个模块。这对于需要根据用户输入或其他条件加载不同模块的场景非常有用。

### 2.10 使用命名空间导入

你可以使用命名空间导入语法来导入整个模块作为一个对象。例如：

```javascript
// esm1.mjs
export const test = 4;
export function add(a, b) {
    return a + b;
}

// main.js
import * as math from './esm1.mjs';
console.log(math.test); // 输出: 4
console.log(math.add(2, 3)); // 输出: 5
```

命名空间导入语法使得导入整个模块变得非常简单和直观。你可以将整个模块作为一个对象导入，从而方便地访问模块中的所有导出。

### 2.11 使用默认导出

你可以使用默认导出语法来导出模块的默认值。例如：

```javascript
// esm1.mjs
const test = 4;
export default test;

// main.js
import test from './esm1.mjs';
console.log(test); // 输出: 4
```

默认导出语法使得导出模块的默认值变得非常简单和直观。你可以使用 `export default` 语法来导出模块的默认值，从而简化模块的导入和使用。

### 2.12 使用具名导出

你可以使用具名导出语法来导出模块的多个值。例如：

```javascript
// esm1.mjs
export const test = 4;
export function add(a, b) {
    return a + b;
}

// main.js
import { test, add } from './esm1.mjs';
console.log(test); // 输出: 4
console.log(add(2, 3)); // 输出: 5
```

具名导出语法使得导出模块的多个值变得非常简单和直观。你可以使用 `export` 语法来导出模块的多个值，从而方便地在其他模块中使用这些值。

### 2.13 使用重命名导出

你可以使用重命名导出语法来导出模块的值，并在导出时重命名。例如：

```javascript
// esm1.mjs
const test = 4;
function add(a, b) {
    return a + b;
}
export { test as value, add as sum };

// main.js
import { value, sum } from './esm1.mjs';
console.log(value); // 输出: 4
console.log(sum(2, 3)); // 输出: 5
```

重命名导出语法使得导出模块的值变得非常灵活。你可以在导出时重命名模块的值，从而避免命名冲突，并使得代码更加清晰和易读。

### 2.14 使用重命名导入

你可以使用重命名导入语法来导入模块的值，并在导入时重命名。例如：

```javascript
// esm1.mjs
export const test = 4;
export function add(a, b) {
    return a + b;
}

// main.js
import { test as value, add as sum } from './esm1.mjs';
console.log(value); // 输出: 4
console.log(sum(2, 3)); // 输出: 5
```

重命名导入语法使得导入模块的值变得非常灵活。你可以在导入时重命名模块的值，从而避免命名冲突，并使得代码更加清晰和易读。

## 结论

fibjs 对 ECMAScript 模块 (ESM) 的支持使得开发者可以利用现代 JavaScript 的模块化特性来组织代码。通过使用 `import` 和 `export` 语法，开发者可以更好地管理依赖关系，并提高代码的可维护性和可读性。此外，fibjs 还支持在 CommonJS 模块中使用 `require` 语法来导入 `.mjs` 文件，使得在使用 ESM 时更加灵活。fibjs 的异步加载和并行导入特性进一步提高了应用程序的性能和用户体验。

通过这些特性，开发者可以在 fibjs 中充分利用 ECMAScript 模块 (ESM) 的优势来组织和管理代码，从而构建更加健壮和高效的应用程序。fibjs 对 ESM 的支持使得开发者可以在服务器端和客户端之间共享代码，提高开发效率和代码质量。

👉 【[在 fibjs 中使用 TypeScript](ts.md)】