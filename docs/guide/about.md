# What is fibjs?

fibjs is a high-performance application server development framework designed for web back-end development. It is based on Google's V8 JavaScript engine and adopts a concurrency approach different from traditional callbacks. By using fibers, fibjs isolates the complexity of asynchronous calls at the framework level, greatly reducing development difficulty and reducing performance problems caused by frequent asynchronous processing.

## Why Choose fibjs?

### Back to Basics, Simplified Development

As a programming language widely used on the browser side, JavaScript's asynchronous processing mechanism is fully exploited in front-end development. In back-end development, however, asynchronous programming often increases code complexity, making code hard to maintain and debug. By introducing fiber technology, fibjs wraps asynchronous operations as synchronous calls, greatly simplifying the back-end development process.

#### The Challenge of Asynchronous Programming

In traditional JavaScript back-end development, asynchronous programming is unavoidable. Whether handling database queries, file reads and writes, or network requests, developers have to face callback hell and complex error-handling logic. The following is a typical example of asynchronous code:

```JavaScript
conn.beginTransaction(err => {
    if (err) throw err;
    conn.query('INSERT INTO posts SET title=?', title, (error, results) => {
        if (error) return conn.rollback(() => { throw error; });
        var log = 'Post ' + results.insertId + ' added';
        conn.query('INSERT INTO log SET data=?', log, (error) => {
            if (error) return conn.rollback(() => { throw error; });
            conn.commit(err => {
                if (err) return conn.rollback(() => { throw err; });
                console.log('success!');
            });
        });
    });
});
```

As the code above shows, nested callback functions make the code structure complex and hard to read and maintain. Every asynchronous operation needs error handling and a rollback when an error occurs, which further increases the code's complexity.

#### Advantages of Fiber Technology

By introducing fiber technology, fibjs wraps asynchronous operations as synchronous calls, making the code more concise and intuitive. A fiber is a lightweight thread that can perform asynchronous operations without blocking the main thread. The following is a synchronous code example using fibjs:

```JavaScript
conn.trans(() => {
    var result = conn.execute('INSERT INTO posts SET title=?', title);
    var log = 'Post ' + result.insertId + ' added';
    conn.execute('INSERT INTO log SET data=?', log);
});
console.log('success!');
```

By using fiber technology, developers can write asynchronous operations just like synchronous code, avoiding the problem of callback hell. The code structure is clearer and the logic more intuitive, greatly improving development efficiency.

#### More Concise Code

fibjs also provides a more concise syntax, allowing developers to complete multiple asynchronous operations in a single line of code:

```JavaScript
conn.trans(() => conn.execute('INSERT INTO log SET data=?',
    'Post ' + conn.execute('INSERT INTO posts SET title=?', title).insertId + ' added'));
console.log('success!');
```

This style not only reduces the amount of code but also further simplifies the logic, making the code easier to read and maintain.

#### Performance Advantages

Besides simplifying the code structure, fiber technology also brings significant performance improvements. The following is performance test code for the different programming styles:

```JavaScript
var count = 1000;

async function test_async(n) {
    if (n == count) return;
    await test_async(n + 1);
}

function test_callback(n, cb) {
    if (n == count) return cb();
    test_callback(n + 1, () => { cb(); });
}

function test_sync(n) {
    if (n == count) return;
    test_sync(n + 1);
}

async function test() {
    console.time("async");
    await test_async(0);
    console.timeEnd("async");

    console.time("callback");
    test_callback(0, () => { console.timeEnd("callback"); });

    console.time("sync");
    test_sync(0);
    console.timeEnd("sync");
}

test();
```

On the latest V8 engine, the results are as follows:

```sh
async: 0.539ms
callback: 0.221ms
sync: 0.061ms
```

The results show that async functions perform far worse than synchronous functions, while fibjs's fiber technology can fully leverage the performance advantages of the V8 engine.

#### Flexible Programming Paradigms

fibjs supports various asynchronous programming paradigms and allows flexible switching between synchronous and asynchronous styles. Through the `util.sync` function, fibjs can turn callback functions or async functions into synchronous functions, avoiding the contagiousness of the asynchronous paradigm. The following is an example:

```JavaScript
var util = require('util');

function session_get(sid) {
    return sdata;
}

async function async_session_get(sid) {
    return sdata;
}

function callback_session_get(sid, cb) {
    cb(null, sdata);
}

data = session_get(sid);
data = util.sync(async_session_get)(sid);
data = util.sync(callback_session_get)(sid);
```

In this way, developers can choose the appropriate programming paradigm for their specific needs, further improving development efficiency and code quality.

#### Code Maintenance and Readability

Another notable advantage of using fiber technology is that code maintainability and readability are greatly improved. Traditional asynchronous code, with its nested callback functions and complex error-handling logic, is often hard to read and understand. With fibjs, the code structure is flatter and the logic more intuitive, so developers can more easily trace the code execution flow and find and fix problems.

#### Ecosystem and Community Support

fibjs has a rich ecosystem and active community support. Developers can easily find various plugins and extensions to meet different development needs. At the same time, other developers in the community share their experience and best practices, helping newcomers get started quickly and improve their skills.

#### Future Outlook

As the JavaScript language and the V8 engine continue to evolve, fibjs is also constantly evolving and optimizing. In the future, fibjs will continue to be committed to improving performance and simplifying the development process, providing developers with more powerful tools and a better development experience.

By introducing fiber technology, fibjs wraps asynchronous operations as synchronous calls, greatly simplifying the back-end development process. Developers can write asynchronous operations just like synchronous code, avoiding the problem of callback hell; the code structure is clearer and the logic more intuitive, greatly improving development efficiency. At the same time, fiber technology also brings significant performance improvements, making fibjs an ideal choice for back-end development.

## Getting Started with fibjs

Ready to start a pleasant development experience? Begin with installation!

👉 [Installation](install.md)
