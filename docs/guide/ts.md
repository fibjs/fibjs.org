# 在 fibjs 中使用 TypeScript

fibjs 是一个高性能的 JavaScript 运行时，支持 TypeScript 模块的加载和执行。本文将介绍如何在 fibjs 中使用 TypeScript。

## 什么是 TypeScript

TypeScript 是由微软开发和维护的一种开源编程语言。它是 JavaScript 的超集，主要提供了静态类型和基于类的面向对象编程。TypeScript 通过类型注解和类型推断来增强代码的可读性和可维护性，同时提供了编译时的类型检查，帮助开发者在编写代码时发现潜在的错误。

### TypeScript 的主要特点

1. **类型系统**：TypeScript 提供了丰富的类型系统，包括基本类型、接口、枚举、元组、联合类型、交叉类型等。通过类型系统，开发者可以更好地描述数据结构和函数签名，减少运行时错误。
2. **现代 JavaScript 特性**：TypeScript 支持最新的 ECMAScript 标准，包括箭头函数、模板字符串、解构赋值、异步函数等。开发者可以使用这些现代特性编写更简洁和高效的代码。
3. **编译器**：TypeScript 提供了一个强大的编译器，可以将 TypeScript 代码编译为纯 JavaScript 代码。编译器还提供了丰富的配置选项，允许开发者自定义编译过程。
4. **工具支持**：TypeScript 与主流的开发工具和编辑器（如 Visual Studio Code、WebStorm、Sublime Text 等）集成良好，提供了代码补全、类型检查、重构等功能，提升了开发效率。
5. **社区和生态系统**：TypeScript 拥有庞大的社区和丰富的生态系统，许多流行的 JavaScript 库和框架（如 React、Angular、Vue 等）都提供了 TypeScript 支持。开发者可以利用这些资源快速构建高质量的应用程序。

## 环境配置

首先，确保你已经安装了 fibjs。你可以从 [fibjs 官方网站](https://fibjs.org/) 下载并安装最新版本。

## 编写 TypeScript 代码

创建一些 TypeScript 文件，例如 `ts1.cts` 和 `ts2.mts`：

```typescript
// ts1.cts
export const test = "test1";

// ts2.mts
export const test = "test2";
```

## 在 fibjs 中加载 TypeScript 模块

fibjs 支持直接加载和执行 TypeScript 模块。你可以使用 `require` 或 `import` 语法来加载 TypeScript 模块。需要注意的是，fibjs 加载 TypeScript 模块时不会进行完整的语法检查，而是直接去除 TypeScript 的类型注解，转换为 JavaScript 语法，因此可以非常快速地加载。这种机制使得开发者可以在开发过程中享受 TypeScript 提供的类型检查和代码补全等优势，同时在运行时获得与 JavaScript 相同的性能。

### 使用 `require` 加载 TypeScript 模块

在 fibjs 中，你可以使用 `require` 语法加载 TypeScript 模块。`require` 语法通常用于加载 CommonJS 模块，这些模块以 `.cts` 为扩展名。以下是一个示例：

```javascript
const t1 = require('./ts_files/ts1.cts');
console.log(t1.test); // 输出: test1

const t2 = require('./ts_files/ts2.mts');
console.log(t2.test); // 输出: test2
```

在这个示例中，我们使用 `require` 语法加载了两个 TypeScript 模块，一个是 CommonJS 模块（`ts1.cts`），另一个是 ES 模块（`ts2.mts`）。fibjs 会自动处理这些模块，将它们转换为 JavaScript 语法并执行。

### 使用 `import` 加载 TypeScript 模块

你也可以使用 `import` 语法加载 TypeScript 模块。`import` 语法通常用于加载 ES 模块，这些模块以 `.mts` 为扩展名。以下是一个示例：

```javascript
import { test as test1 } from './ts_files/ts1.cts';
console.log(test1); // 输出: test1

import { test as test2 } from './ts_files/ts2.mts';
console.log(test2); // 输出: test2
```

在这个示例中，我们使用 `import` 语法加载了两个 TypeScript 模块。与 `require` 语法不同，`import` 语法是静态的，意味着它在编译时解析模块依赖关系。这使得代码更加模块化和可维护。

### 使用 `await import` 动态加载 TypeScript 模块

你可以使用 `await import` 语法动态加载 TypeScript 模块。动态导入允许你在运行时按需加载模块，这对于需要延迟加载或条件加载的场景非常有用。以下是一个示例：

```javascript
(async () => {
    const t1 = await import('./ts_files/ts1.cts');
    console.log(t1.test); // 输出: test1

    const t2 = await import('./ts_files/ts2.mts');
    console.log(t2.test); // 输出: test2
})();
```

在这个示例中，我们使用 `await import` 语法动态加载了两个 TypeScript 模块。动态导入返回一个 Promise，当模块加载完成时，Promise 会解析为模块的导出对象。

### 模块类型

在 TypeScript 中，`.cts` 文件表示 CommonJS 模块，`.mts` 文件表示 ES 模块。`.ts` 文件的模块类型取决于 `package.json` 中的设置。fibjs 能够处理这两种类型的模块，并根据文件扩展名自动选择适当的加载方式。

### 示例

创建一些 TypeScript 文件，例如 `test3.mts` 和 `test4.mts`：

```typescript
// test3.mts
export const test3 = "test3";

// test4.mts
export const test4 = "test4";
```

你可以使用以下代码加载这些模块：

```javascript
(async () => {
    const t3 = await import('./ts_files/test3.mts');
    console.log(t3.test3); // 输出: test3

    const t4 = await import('./ts_files/test4.mts');
    console.log(t4.test4); // 输出: test4
})();
```

### 从 CommonJS 和 ES 模块中导入 TypeScript 模块

你可以从 CommonJS 和 ES 模块中导入 TypeScript 模块：

```javascript
(async () => {
    const t5 = await import('./ts_files/test5.mts');
    console.log(t5.test5); // 输出: test5

    const t6 = await import('./ts_files/test6.mts');
    console.log(t6.test6); // 输出: test6
})();
```

## fibjs 的特色支持

fibjs 对 TypeScript 模块的支持不仅限于基本的加载和执行，还包括一些独特的特性，使得开发者可以更高效地使用 TypeScript。

### 1. 快速加载

由于 fibjs 在加载 TypeScript 模块时不会进行完整的语法检查，而是直接去除 TypeScript 的类型注解并转换为 JavaScript 语法，因此可以非常快速地加载模块。这种机制使得开发者可以在开发过程中享受 TypeScript 提供的类型检查和代码补全等优势，同时在运行时获得与 JavaScript 相同的性能。

### 2. 动态导入

fibjs 支持使用 `await import` 语法动态导入模块，这对于需要根据条件加载模块的场景非常有用。例如：

```javascript
const moduleName = './ts_files/ts1.cts';

import(moduleName).then((module) => {
    console.log(module.test); // 输出: test1
});
```

动态导入模块使得代码更加灵活，因为你可以根据运行时的条件来决定加载哪个模块。这对于需要根据用户输入或其他条件加载不同模块的场景非常有用。

### 3. 并行导入

fibjs 支持并行导入模块，这对于提高性能非常有用。例如：

```javascript
const module1Promise = import('./ts_files/ts1.cts');
const module2Promise = import('./ts_files/ts2.mts');

Promise.all([module1Promise, module2Promise]).then(([module1, module2]) => {
    console.log(module1.test); // 输出: test1
    console.log(module2.test); // 输出: test2
});
```

并行导入模块可以显著提高应用程序的性能，因为它允许你同时加载多个模块，而不是一个接一个地加载。这对于大型应用程序尤其重要，因为它可以减少加载时间，提高用户体验。

通过以上示例和特性介绍，你可以看到在 fibjs 中加载 TypeScript 模块的多种方式。fibjs 的 TypeScript 支持使得开发者可以利用 TypeScript 的类型检查和现代 JavaScript 特性来编写更健壮的代码，同时在运行时享受与 JavaScript 相同的性能。

👉 【[服务端模块热更新](server-hot-update.md)】