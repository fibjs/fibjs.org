# fibjs 是什么？
fibjs 是一个主要为 web 后端开发而设计的应用服务器开发框架，它建立在 Google v8 JavaScript 引擎基础上，并且选择了和传统的 callback 不同的并发解决方案。fibjs 利用 fiber 在框架层隔离了异步调用带来的业务复杂性，极大降低了开发难度，并减少因为用户空间频繁异步处理带来的性能问题。

由于历史原因，JavaScript 主要被用于浏览器的 UI 处理，UI 开发是典型的单线程事件驱动模式，因此 JavaScript 也形成了以异步处理为主要编程范式。

随着 JavaScript 的成功，越来越多的人开始将 JavaScript 应用到其它的场景。与此同时，人们也越来越发现在很多场景下异步处理并不是最合适的选择。

## 返璞归真，敏捷开发
fibjs 在框架层使用 fiber 隔离了异步调用带来的业务复杂性，将 io 的异步处理封装为更加直观的同步调用，工程师只需要按照通常的同步业务逻辑编写代码，即可享有异步处理带来的巨大便利。

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
我们可以明显比较出两种不同的编程风格带来的差异。更少的代码会带来更少错误，随着代码的减少，代码的逻辑也更加清晰，无论是开发还是维护，都会从中获益。

## 拥抱高能
尽管我们可以很方便地通过扩充服务器来提高响应速度，但是性能仍然应该是选择一个开发框架的重要依据之一。随着 ES7 的推出，async 作为一种新的异步开发模式被引入 JavaScript。然而当我们享受 async 带来的同步风格时，也不得不面对它对性能的影响。

我们可以使用一段测试代码来比较不同的编程风格带来的性能差异：
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
我们从测试结果可以明显知道，当项目中广泛应用 async 之后，服务器将花费大量时间用来处理 async 函数的调用和返回。我们在一些服务端应用的实际测试中也发现了这一点。而且这种性能的急剧下降，是完全不能接受的。

fibjs 由于采用 fiber，可以充分利用 JavaScript 语言本身的特性，并且最大限度地发挥 v8 的优越性能。工程师可以很轻易地将服务器的性能发挥到极致。

## 灵活选择范式而不被绑架
选择使用 fibjs 并不意味着你必须使用同步的开发风格，实际上 fibjs 支持你所见过的任何一种异步编程范式，并且可以灵活地在同步风格和异步风格之间切换。

无论是 callback 还是 async，都有一个致命的缺陷，那就是传染性。只要一个函数是 callback 或者 async，那么所有依赖它的其它函数都必须是 callback 或者 async。这在大规模软件开发中将带来巨大的开发成本。

以一个简单的服务器开发场景为例。在项目初期，我们选择了内存作为 session 数据存储，此时，我们可以使用 sync 方式直接读取和存储数据，并基于此开发出完整业务。随着业务规模的发展，我们需要把 session 数据存储到 redis 或者 mongodb 里，此时，我们就需要把 session 相关的操作修改为 async 模式。

理论上，我们可以依次修改每一个函数，让它们符合所依赖的函数的要求，但是这样就要求我们完全了解所有的模块并且有能力对其作出修改。这在多人协作开发时或者使用第三方模块时是完全不可能完成的。

因此，所有的通用模块，都需要同时提供 sync 和 async 接口，以均衡处理异步和性能之间的平衡。更多的普通开发者则会选择只提供 async 接口。从而引发性能灾难。

在 fibjs 中，你可以很轻松的解决类似的问题，避免显式异步无节制地传染:
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
fibjs 可以使用 util.sync 将 callback 或者 async 函数转变为 sync 函数，并且直接调用。通过这种方式，我们可以很方便地整合不同编程范式的模块，并且以最小的开发成本将其转变为 sync 范式，有效地避免范式传染带来的灾难。

## 开始体验
准备好开始一场愉快的开发经历了吗？那么，从安装开始吧。

👉 【[安装运行环境](install.md)】
