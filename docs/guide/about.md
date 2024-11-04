# 什么是 fibjs？

fibjs 是一个专为 Web 后端开发设计的高性能应用服务器开发框架。它基于 Google V8 JavaScript 引擎，采用与传统回调不同的并发解决方案。通过使用 fiber（纤程），fibjs 在框架层面上隔离了异步调用的复杂性，大大降低了开发难度，并减少了因频繁异步处理导致的性能问题。

## 为什么选择 fibjs？

### 返璞归真，简化开发

JavaScript 作为一种广泛应用于浏览器端的编程语言，其异步处理机制在前端开发中得到了充分的发挥。然而，在后端开发中，异步编程往往会增加代码的复杂性，导致难以维护和调试。fibjs 通过引入 fiber 技术，将异步操作封装为同步调用，极大地简化了后端开发的流程。

#### 异步编程的挑战

在传统的 JavaScript 后端开发中，异步编程是不可避免的。无论是处理数据库查询、文件读写，还是网络请求，开发者都需要面对回调地狱（callback hell）和复杂的错误处理逻辑。以下是一个典型的异步代码示例：

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

从上面的代码可以看出，嵌套的回调函数使得代码结构复杂，难以阅读和维护。每个异步操作都需要处理错误，并在错误发生时进行回滚操作，这进一步增加了代码的复杂性。

#### fiber 技术的优势

fibjs 通过引入 fiber 技术，将异步操作封装为同步调用，使得代码更加简洁和直观。fiber 是一种轻量级的线程，可以在不阻塞主线程的情况下执行异步操作。以下是使用 fibjs 的同步代码示例：

```JavaScript
conn.trans(() => {
    var result = conn.execute('INSERT INTO posts SET title=?', title);
    var log = 'Post ' + result.insertId + ' added';
    conn.execute('INSERT INTO log SET data=?', log);
});
console.log('success!');
```

通过使用 fiber 技术，开发者可以像编写同步代码一样编写异步操作，避免了回调地狱的问题。代码结构更加清晰，逻辑更加直观，极大地提高了开发效率。

#### 更简洁的代码

fibjs 还提供了更简洁的代码写法，使得开发者可以在一行代码中完成多个异步操作：

```JavaScript
conn.trans(() => conn.execute('INSERT INTO log SET data=?',
    'Post ' + conn.execute('INSERT INTO posts SET title=?', title).insertId + ' added'));
console.log('success!');
```

这种写法不仅减少了代码量，还进一步简化了逻辑，使得代码更加易读和易维护。

#### 性能优势

除了简化代码结构，fiber 技术还带来了显著的性能提升。以下是不同编程风格的性能测试代码：

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

在最新的 V8 引擎下，运行结果如下：

```sh
async: 0.539ms
callback: 0.221ms
sync: 0.061ms
```

从结果可以看出，async 函数的性能远低于同步函数，而 fibjs 的 fiber 技术则能充分发挥 V8 引擎的性能优势。

#### 灵活的编程范式

fibjs 支持各种异步编程范式，并允许在同步和异步风格之间灵活切换。通过 `util.sync` 函数，fibjs 可以将回调函数或异步函数转变为同步函数，避免异步范式的传染性问题。以下是一个示例代码：

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

通过这种方式，开发者可以根据具体需求选择合适的编程范式，进一步提高开发效率和代码质量。

#### 代码维护和可读性

使用 fiber 技术的另一个显著优势是代码的可维护性和可读性得到了极大的提升。传统的异步代码由于嵌套的回调函数和复杂的错误处理逻辑，往往难以阅读和理解。而使用 fibjs 后，代码结构更加扁平化，逻辑更加直观，开发者可以更容易地追踪代码执行流程，发现和修复问题。

#### 生态系统和社区支持

fibjs 拥有丰富的生态系统和活跃的社区支持。开发者可以方便地找到各种插件和扩展，满足不同的开发需求。同时，社区中的其他开发者也会分享他们的经验和最佳实践，帮助新手快速上手并提高开发水平。

#### 未来展望

随着 JavaScript 语言和 V8 引擎的不断发展，fibjs 也在不断进化和优化。未来，fibjs 将继续致力于提升性能和简化开发流程，为开发者提供更强大的工具和更优质的开发体验。

fibjs 通过引入 fiber 技术，将异步操作封装为同步调用，极大地简化了后端开发的流程。开发者可以像编写同步代码一样编写异步操作，避免了回调地狱的问题，代码结构更加清晰，逻辑更加直观，极大地提高了开发效率。同时，fiber 技术还带来了显著的性能提升，使得 fibjs 成为后端开发的理想选择。

## 开始体验 fibjs

准备好开始愉快的开发体验了吗？从安装开始吧！

👉 【[安装运行环境](install.md)】
