# fibjs 是什么？
fibjs 是一个专为 web 后端开发设计的应用服务器开发框架。它构建在 Google V8 JavaScript 引擎的基础上，并采用与传统回调不同的并发解决方案。fibjs 使用 fiber（纤程）在框架层面上隔离了异步调用所带来的业务复杂性，大大降低了开发难度，并减少了因用户空间频繁的异步处理而导致的性能问题。

由于历史原因，JavaScript 主要被用于处理浏览器的 UI。UI 开发是典型的单线程事件驱动模式，因此 JavaScript 逐渐形成了以异步处理为主要编程范式。

随着 JavaScript 的成功，越来越多的人开始将 JavaScript 应用于其他场景。与此同时，人们也越来越意识到在许多场景中，异步处理并不是最合适的选择。

## 返璞归真，敏捷开发
fibjs 在框架层面使用 fiber（纤程）隔离了异步调用所带来的业务复杂性，将 I/O 的异步处理封装为更直观的同步调用。工程师只需按照通常的同步业务逻辑编写代码，即可享受异步处理所带来的巨大便利。

以下这段代码摘自 mysql 模块的文档：
```JavaScript
conn.beginTransaction(err => {
    if (err) {
        throw err;
    }
    conn.query('INSERT INTO posts SET title=?', title,
        (error, results, fields) => {
            if (error) {
                return conn.rollback(() => {
                    throw error;
                });
            }

            var log = 'Post ' + results.insertId + ' added';

            conn.query('INSERT INTO log SET data=?', log,
                (error, results, fields) => {
                    if (error) {
                        return conn.rollback(() => {
                            throw error;
                        });
                    }
                    conn.commit((err) => {
                        if (err) {
                            return conn.rollback(() => {
                                throw err;
                            });
                        }
                        console.log('success!');
                    });
                });
        });
});
```
在 fibjs 中，完成同样的工作，代码如下：
```JavaScript
conn.trans(() => {
    var result = conn.execute('INSERT INTO posts SET title=?', title);
    var log = 'Post ' + results.insertId + ' added';
    conn.execute('INSERT INTO log SET data=?', log);
});
console.log('success!');
```
如果你追求简洁，你甚至可以把代码写成这样：
```JavaScript
conn.trans(() => conn.execute('INSERT INTO log SET data=?',
        'Post ' + conn.execute('INSERT INTO posts SET title=?', title).insertId +
        ' added'));
console.log('success!');
```
通过比较，我们可以明显看到不同编程风格所带来的差异。较少的代码意味着较少的错误，随着代码的减少，代码的逻辑也会更加清晰。这种情况下，不论是开发还是维护工作都会获益。

## 拥抱高能
尽管扩展服务器来提高响应速度是相对容易的，但性能仍然是选择一个开发框架时的重要考虑因素之一。随着 ES7 的推出，async 作为一种新的异步开发模式被引入到 JavaScript 中。然而，当我们享受 async 带来的同步编程风格时，也必须面对它对性能的影响。

为了比较不同编程风格带来的性能差异，我们可以使用以下测试代码：
```JavaScript
var count = 1000;

async function test_async(n) {
    if (n == count)
        return;
    await test_async(n + 1);
}

function test_callback(n, cb) {
    if (n == count)
        return cb();

    test_callback(n + 1, () => {
        cb();
    });
}

function test_sync(n) {
    if (n == count)
        return;
    test_sync(n + 1);
}

async function test() {
    console.time("async");
    await test_async(0);
    console.timeEnd("async");

    console.time("callback");
    test_callback(0, () => {
        console.timeEnd("callback");
    });

    console.time("sync");
    test_sync(0);
    console.timeEnd("sync");
}

test();
```
在最新的 v8 下，这段代码的运行结果如下：
```sh
async: 0.539ms
callback: 0.221ms
sync: 0.061ms
```
从测试结果中，我们可以清楚地看到，当广泛应用 async 后，服务器将花费大量时间来处理 async 函数的调用和返回。我们在一些实际的服务端应用测试中也发现了这一点。然而，这种急剧下降的性能是完全无法接受的。

与此相比，fibjs 使用 fiber 技术，充分利用了 JavaScript 语言本身的特性，并最大限度地发挥了 V8 引擎的优越性能。工程师可以轻而易举地将服务器的性能发挥到极致。

## 灵活选择范式而不被绑架
选择使用 fibjs 并不意味着你必须使用同步的开发风格。实际上，fibjs 支持你所熟悉的各种异步编程范式，并且可以灵活地在同步风格和异步风格之间切换。

然而，无论是回调函数还是 async，它们都有一个致命的缺陷，那就是传染性。如果一个函数是回调函数或 async 函数，那么所有依赖于它的其他函数也必须是回调函数或 async 函数。在大规模软件开发中，这将导致巨大的开发成本。

以一个简单的服务器开发场景为例。在项目初期，我们选择将 session 数据存储在内存中，此时，我们可以使用同步方式直接读取和存储数据，并基于此开发完整的业务功能。随着业务规模的扩大，我们需要将 session 数据存储到 Redis 或 MongoDB 中，此时，我们就需要将与 session 相关的操作改为异步模式。

理论上，我们可以逐个修改每个函数，使它们符合所依赖函数的要求，但这要求我们完全了解所有模块并具备修改它们的能力。在多人协作开发或使用第三方模块时，这几乎是不可能的。

因此，在所有通用模块中，都应同时提供同步和异步接口，以平衡异步和性能之间的关系。而普通开发者通常会选择仅提供异步接口，从而导致性能问题。

在 fibjs 中，你可以轻松解决类似问题，避免不受控制地传播显式异步：
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
fibjs 提供了 util.sync 函数，可以将回调函数或异步函数转变为同步函数并直接调用。借助这种方式，我们可以轻松地整合不同编程范式的模块，并最小化开发成本，将它们转变为同步范式，有效地避免范式传染带来的灾难。

## 开始体验
准备好开始一场愉快的开发经历了吗？那么，从安装开始吧。

👉 【[安装运行环境](install.md)】
