# Hello World

## 介绍

fibjs 是一个高效的 JavaScript 服务器端开发框架，专为高并发和高性能应用设计。它基于 V8 引擎，提供了丰富的内置模块和强大的异步编程能力，使得开发者可以轻松构建高性能的网络应用。本手册将带你从零开始，逐步了解如何使用 fibjs 创建一个简单的 "Hello World" 应用，并逐步扩展到更复杂的功能。

## 第一个 fibjs 程序

我们从最简单的 "Hello World" 程序开始。创建一个名为 `main.js` 的文件，并在其中写入以下代码：

```JavaScript
console.log('hello, world');
```

保存文件后，在命令行输入以下命令来运行这段代码：

```sh
fibjs main.js
```

你将看到控制台输出 `hello, world`。

## 创建一个简单的 HTTP 服务器

fibjs 内置了一个强大的 HTTP 服务器模块，使得我们可以非常方便地创建一个 Web 服务器。接下来，我们将创建一个简单的 HTTP 服务器，并返回 "hello, world"。

创建一个名为 `server.js` 的文件，并在其中写入以下代码：

```JavaScript
const http = require('http');

var svr = new http.Server(8080, (req) => {
    req.response.write('hello, world');
});

svr.start();
```

运行这段代码后，在浏览器中访问 `http://127.0.0.1:8080/`，你将看到页面显示 `hello, world`。

## 动态响应请求

上面的服务器无论你输入什么地址，它都只会返回 `hello, world`。接下来，我们让它变得聪明一些，根据请求的路径返回不同的内容。

修改 `server.js` 文件，写入以下代码：

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

运行这段代码后，在浏览器地址栏内输入 `http://127.0.0.1:8080/fibjs`，你将看到页面显示 `hello, fibjs`。当你修改地址栏的内容，服务器的输出也会跟着发生变化。

## 支持静态文件

接下来，我们让服务器多做一些事情，希望它能够支持静态文件浏览，同时也可以输出 `hello, world`。我们设定响应 `hello, fibjs` 的地址为：`/hello/fibjs`。

修改 `server.js` 文件，写入以下代码：

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

运行这段代码后，访问 `http://127.0.0.1:8080/hello/fibjs`，你将看到 `hello, fibjs`，而访问其它地址，则会看到静态文件。

## 模块化设计

为了让服务器更复杂一些，我们可以将不同的功能模块化。我们有一组 hello 服务，完成我们定义的业务请求。这组服务的路径由主服务根据需求指定。下面这个例子中，`hello` 和 `bonjour` 都会指向 hello 的服务。

修改 `server.js` 文件，写入以下代码：

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

通过这种方式，我们可以很方便地创建出完全解耦的模块，然后使用主程序组装成我们需要的接口。这在 API 版本管理中格外方便，比如从 `/v1/hello/fibjs` 修改为 `/v2/hello/fibjs`，模块本身不需要做任何变动，仅仅在入口处修改即可。

## 处理 POST 请求

除了 GET 请求，fibjs 还可以处理 POST 请求。我们可以使用 `req.json()` 方法来解析请求体中的 JSON 数据。

修改 `server.js` 文件，写入以下代码：

```JavaScript
const http = require('http');

var svr = new http.Server(8080, (req) => {
    if (req.method === 'POST') {
        var data = req.json();
        req.response.write('Received: ' + JSON.stringify(data));
    } else {
        req.response.write('hello, world');
    }
});

svr.start();
```

运行这段代码后，你可以使用 curl 或 Postman 向服务器发送 POST 请求，并在请求体中包含 JSON 数据。服务器将返回接收到的数据。

## 使用模板引擎

fibjs 支持使用模板引擎来生成动态 HTML 页面。我们可以使用内置的 `ejs` 模块来渲染模板。

首先，安装 `ejs` 模块：

```sh
fibjs --install ejs
```

然后，修改 `server.js` 文件，写入以下代码：

```JavaScript
const http = require('http');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

var template = fs.readFile(path.join(__dirname, 'template.ejs'), 'utf8');

var svr = new http.Server(8080, (req) => {
    var html = ejs.render(template, { name: 'fibjs' });
    req.response.write(html);
});

svr.start();
```

创建一个名为 `template.ejs` 的文件，并在其中写入以下代码：

```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello, <%= name %></title>
</head>
<body>
    <h1>Hello, <%= name %></h1>
</body>
</html>
```

运行这段代码后，在浏览器中访问 `http://127.0.0.1:8080/`，你将看到页面显示 `Hello, fibjs`。

## 结论

通过本手册的学习，你已经掌握了使用 fibjs 创建简单的 HTTP 服务器、处理动态请求、支持静态文件、模块化设计、使用中间件、处理 POST 请求以及使用模板引擎的基本方法。fibjs 作为一个高效的 JavaScript 服务器端开发框架，提供了丰富的内置模块和强大的异步编程能力，使得开发者可以轻松构建高性能的网络应用。

接下来，你可以根据自己的需求，进一步探索和学习 fibjs 的更多功能和高级用法。希望本手册能帮助你快速上手 fibjs，并在实际项目中取得成功。

👉 【[美好生活从测试开始](test.md)】