# hello, world
首先，你需要成功在系统中安装了 fibjs。依照惯例，我们从最简单的 "hello, world" 开始我们的第一行 fibjs 程序：
```JavaScript
console.log('hello, world');
```
保存文件 `main.js` 后，在命令行输入 `fibjs main.js`，便可以执行这段代码。

## 第一个 hello 服务器
fibjs 作为后端开发框架，内置了一个相当强大的应用服务器，我们可以十分方便地迅速搭建起一个 web server。接下来我们将建立第一个 hello 服务器：
```JavaScript
const http = require('http');

var svr = new http.Server(8080, (req) => {
    req.response.write('hello, world');
});

svr.start();
```
运行后，在浏览器内输入：
```
http://127.0.0.1:8080/
```
你可以看到我们第一个 hello 服务器的输出 `hello, world`。

## 聪明一些
第一个 hello 服务器比较笨，无论你输入什么地址，它都只会返回 `hello, world`。接下来我们来让它变得聪明一些：
```JavaScript
const http = require('http');

var hello_server = {
    '/:name': (req, name) => {
        req.response.write('hello, ' + name);
    }
};

var svr = new http.Server(8080, hello_server);

svr.start();
```
运行后，在浏览器地址栏内输入：
```
http://127.0.0.1:8080/fibjs
```
你可以看到服务器的输出内容变成了 `hello, fibjs`，当你修改地址栏的内容，服务器的输出也会跟着发生变化。

## 能者多劳，支持静态网站
接下来，我们让服务器多做一些事情，我们希望服务器能够支持静态文件浏览，同时也可以输出 `hello, world`，我们设定响应 `hello, fibjs` 的地址为：`/hello/fibjs`：
```JavaScript
const http = require('http');
const path = require('path');

var root_server = {
    '/hello/:name': (req, name) => {
        req.response.write('hello, ' + name);
    },
    '*': path.join(__dirname, 'web')
};

var svr = new http.Server(8080, root_server);

svr.start();
```
你需要创建一个目录 `web`，并且在其中存放一些文件，比如下载一份 fibjs 文档放在里面做为测试。

运行后，我们访问 `http://127.0.0.1:8080/hello/fibjs`，依旧可以看到 `hello, fibjs`，而访问其它地址，则会看到静态文件。

## 增加模块解耦能力
接下来，我们来让服务器更复杂一些。我们有一组 hello 服务，完成我们定义的业务请求。这组服务的路径由主服务根据需求指定。下面这个例子中，`hello` 和 `bonjour` 都会指向 hello 的服务。
```JavaScript
const http = require('http');
const path = require('path');

var hello_server = {
    '/:name(fibjs.*)': (req, name) => {
        req.response.write('hello, ' + name + '. I love you.');
    },
    '/:name': (req, name) => {
        req.response.write('hello, ' + name);
    }
};

var root_server = {
    '/hello': hello_server,
    '/bonjour': hello_server,
    '*': path.join(__dirname, 'web')
};

var svr = new http.Server(8080, root_server);

svr.start();
```
通过这种方式，我们可以很方便地创建出完全解耦的模块，然后使用主程序组装成我们需要的接口。这在 api 版本管理中格外方便，比如从 `/v1/hello/fibjs` 修改为 `/v2/hello/fibjs`，模块本身不需要做任何变动，仅仅在入口处修改即可。

## 小结
通过这个小节，你已经可以开始自己的 fibjs 服务器项目了。接下来，我们会在更多的细分领域介绍 fibjs 的开发方法。

👉 【[美好生活从测试开始](test.md)】