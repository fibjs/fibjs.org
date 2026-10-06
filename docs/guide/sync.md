# Synchronous and Asynchronous

As web applications continue to evolve, JavaScript, as a widely used programming language, keeps developing and changing as well. In web front-end development, JavaScript is mainly used for UI processing in the browser. UI development is a typical single-threaded, event-driven model, so asynchronous processing has become JavaScript's primary programming paradigm. However, in large-scale, complex applications, the problems and complexity caused by asynchronous programming have become increasingly obvious.

The arrival of Node.js brought a brand-new asynchronous programming paradigm to JavaScript: the event loop and callback functions. This paradigm is efficient and concise, and it suits high-concurrency, I/O-intensive scenarios. However, it also brings its own problems and complexity. Especially in large-scale, complex applications, programmers have to deal with many nested callback functions and with the ordering of asynchronous calls, which increases the complexity and difficulty of the program.

To solve these problems and difficulties, fibjs came into being. fibjs is an application server development framework designed mainly for web back-end development. It is built on the Google v8 JavaScript engine and chose a concurrency solution different from traditional callbacks. fibjs uses fibers to isolate the business complexity caused by asynchronous calls at the framework level, greatly reducing development difficulty and mitigating the performance problems caused by frequent asynchronous processing in user space. At the same time, compared with the traditional asynchronous programming paradigm, its synchronous programming paradigm is more readable, has simpler logic, and is easier to maintain.

## Introduction to fiber
fibjs is a high-performance JavaScript server framework built on the v8 engine, aimed mainly at web back-end development. It started in 2009 and has since achieved high stability and productivity, with a wide range of application cases both at home and abroad.

In fibjs, fibers are used to bridge business logic and I/O processing. A fiber differs from traditional threads, coroutines, processes, and similar concepts. It is a user-level lightweight thread and can be seen as a cooperative multitasking mechanism. Fibers can execute business logic and I/O operations in different contexts, and internally they manage resources through pre-allocation and recycling. Compared with traditional threads and processes, fibers are more lightweight, more flexible, and more efficient.

Compared with other thread libraries (such as pthread, WinThread, Boost.Thread, and so on), fibers have the following advantages:

- **Cooperative scheduling**: Fibers use cooperative scheduling and do not require preemptive scheduling by the kernel or operating system, which reduces frequent context switches and speeds up program execution, while avoiding race conditions and deadlocks between threads.
- **Lightweight**: Each fiber consumes only a small amount of stack space, so large numbers of fibers can be created in highly concurrent applications without using too much memory.
- **High efficiency**: Fibers are implemented based on features of the JavaScript language itself and make full use of the superior performance of the v8 engine, so they are faster than traditional thread libraries.

By using fibers, fibjs can separate business logic from I/O processing and wrap asynchronous calls in the form of synchronous calls, making code easier to write and maintain while fully leveraging the strengths of the JavaScript language.

## Synchronous programming in fibjs
In asynchronous programming, nested callback functions can make code less readable, easily leading to the callback hell problem and increasing the difficulty of the code and the cost of debugging. The synchronous programming paradigm, by contrast, is closer to how humans think, making code structure clearer and easier to read and maintain, and it can greatly improve development efficiency and code quality.

In fibjs, synchronous programming is a very popular and commonly used paradigm. It makes the structure and logic of code more intuitive and easier to understand and maintain. Some synchronous functions and modules are highly supported in fibjs, such as util.sync and fs.readSync.

In fibjs, you can call the asynchronous functions of built-in objects directly in synchronous style:
```JavaScript
const fs = require("fs");

const data = fs.readFile("/path/to/file");
console.log(data);
```
You can also wrap an asynchronous function with util.sync and try…catch so that the fiber receives the return value of the asynchronous call, thereby achieving a synchronous effect. For example:
```JavaScript
// load module
const coroutine = require("coroutine");
const util = require("util");
const fs = require("fs");

// use util.sync to wrap fs.readFile
const readFile = util.sync(fs.readFile);

// call the sync function
const data = readFile("myfile.txt");
console.log(data);
```
In the example above, we defined a function named readFile that uses util.sync to wrap the asynchronous fs.readFile function into a synchronous function, which returns data directly when called in synchronous style. This synchronous call style is similar to the traditional JavaScript programming paradigm; the difference is that in fibjs it does not block the thread but achieves the asynchronous effect through fibers.

### How util.sync works
util.sync is an efficient wrapper function in the kernel. The following JavaScript code can achieve similar functionality:
```JavaScript
const coroutine = require("coroutine");

function sync(func) {
  return function _warp() {
    var ev = new coroutine.Event();
    var e, r;

    func.apply(this, [
      ...arguments,
      function (err, result) {
        e = err;
        r = result;
        ev.set();
      }
    ]);

    ev.wait();
    if (e)
      throw e;

    return r;
  }
}
```
This code defines a utility function named sync for converting an asynchronous callback function into a synchronous call function. It takes a function func and returns a new function _wrap. The new function implements the conversion of the original function into a synchronous call. In _wrap, a new Event object ev is first created for thread scheduling and for waiting on the result of the asynchronous callback. Then the apply method is used to call the original function func with the specified arguments plus a new callback function. During the call, an asynchronous callback occurs: the new callback stores the returned result in the variables e and r and wakes up the Event object. Finally, the variable e determines whether an exception is thrown, or the variable r is returned. This function is a solution for converting asynchronous callback functions into synchronous calls, and it can improve the readability and maintainability of functions.

## Asynchronous programming in fibjs
In fibjs, most asynchronous methods (including I/O and network request methods) support both synchronous and asynchronous calls, which means developers can choose whichever style they need at any time.

Taking fs.readFile() as an example, we can use the method in two ways:

### Asynchronous approach
Pass a callback function to handle the result of reading the file. For example:
```JavaScript
const fs = require("fs");

fs.readFile("/path/to/file", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```
This approach suits cases where you need to perform some action after the file has been read.

### Synchronous approach
Omit the callback function to get the contents of the file directly. For example:
```JavaScript
const fs = require("fs");

const data = fs.readFile("/path/to/file");
console.log(data);
```
In this example, we get the file contents from the return value data of the read call, and we do not have to wait for a callback to finish after the file is read before continuing. This approach suits cases where you need to perform other actions before the file read completes.

As you can see, the ability to support both synchronous and asynchronous calls lets developers choose different styles according to their needs and development scenarios. In some cases, synchronous code is more readable and easier to maintain and debug; in others, the asynchronous style can better improve the responsiveness and performance of the code.

However, when using the synchronous approach, you should also note that in some scenarios it may block the current fiber. Therefore, we need to choose the appropriate programming style based on actual requirements.

## Asynchronous programming with async/await
fibjs also has built-in support for async/await, which makes asynchronous code more concise and easier to read. Here are two ways to use async/await:

### Using fs.readFileAsync
```JavaScript
const fs = require("fs");

async function readFileAsync() {
  try {
    const data = await fs.readFileAsync("/path/to/file");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFileAsync();
```
This approach uses async/await syntax to make asynchronous code look like synchronous code, greatly improving the readability and maintainability of the code.

### Using fs.promises.readFile
```JavaScript
const fs = require("fs").promises;

async function readFileWithPromises() {
  try {
    const data = await fs.readFile("/path/to/file");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFileWithPromises();
```
This approach uses the fs.promises module and likewise handles asynchronous operations with async/await syntax, making the code more concise and easier to read.

As the examples above show, fibjs provides several asynchronous programming styles, and developers can choose the most suitable one for their needs and development scenarios.

## Conclusion
In this article, we introduced fibjs's synchronous programming style and its asynchronous programming solutions, along with their advantages and use cases. We mentioned that fibjs can use fibers to isolate the performance problems caused by business logic and asynchronous processing, reducing operational complexity and improving development efficiency. We also highlighted fibjs's advantages in I/O processing and memory management, which make development, testing, and maintenance much easier.

Finally, we encourage readers to explore fibjs in depth and to take part in contributing to fibjs and in its community activities. We believe that fibjs will continue to attract the attention and support of the open source community with its powerful performance and ease of use.

👉 [Using ECMAScript Modules (ESM) in fibjs](esm.md)
