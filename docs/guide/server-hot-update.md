# 服务端模块热更新

`fibjs` 的 http server 是常驻内存的独立服务器程序，这意味着有版本更新的时候往往需要重启服务程序。

假设有以下服务程序:
- `web.js` http handler
- `app.js` 应用入口

```javascript
// web.js
var _ver = new Date();

module.exports = function (r) {
  r.response.write("Hello, new word @ " + _ver);
}
```

```javascript
// app.js
var http = require("http");
var vm = require("vm");
var coroutine = require("coroutine");
var webServer = require("./web");

var svr = new http.Server(8080, webServer);

svr.start();
```

在 `app.js` 直接引用 `web.js`， 当每次更新应用的时候，都必须重启 `app.js`，有没有办法可以在更新代码的同时，让 `app.js` 自动加载最新的 `web.js` 呢？

我们可以通过 fibjs 的原生 [SandBox](../manual/object/ifs/SandBox.md) 模块来实现平滑的热更新。对 `app.js` 做一些更改:

```javascript
// app.js
var http = require("http");
var vm = require("vm");
var coroutine = require("coroutine");
// var webServer = require("./web");

function new_web() {
    return new vm.SandBox({
        mq: require("mq")
    }).require("./web.js", __dirname);
}

// 每 1s 重新载入一遍 ./web.js 文件以更新 srv 的 handler
coroutine.start(function() {
    while (true) {
        coroutine.sleep(1000);
        svr.handler = new_web();
    }
})

var svr = new http.Server(8080, new_web());

svr.start();
```

`app.js` 中启动了一个循环，每隔 1s 重新 `require` 一次 `web.js` 中的内容生成安全的模块，用于为 `svr` 重新挂载 `handler`。当 `web.js`中的内容需要更新的时候，只需替换该文件，即可实现服务端程序的平滑更新。

👉 【[域名路由](host-routes.md)】