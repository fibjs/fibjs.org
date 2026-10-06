# Server-side Module Hot Update

The `fibjs` http server is a standalone server program that resides in memory, which means it often needs to be restarted when there is a version update.

Assume we have the following server programs:
- `web.js` http handler
- `app.js` application entry point

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

Since `app.js` directly requires `web.js`, every time the application is updated, `app.js` must be restarted. Is there a way to let `app.js` automatically load the latest `web.js` while the code is updated?

We can achieve smooth hot updates with the native [SandBox](../manual/object/ifs/SandBox.md) module in fibjs. Make some changes to `app.js`:

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

// update svr.handler every 1 second.
coroutine.start(function() {
    while (true) {
        coroutine.sleep(1000);
        svr.handler = new_web();
    }
})

var svr = new http.Server(8080, new_web());

svr.start();
```

In `app.js`, a loop is started that re-requires the contents of `web.js` every 1 second to create a sandboxed module, which is used to remount the `handler` for `svr`. When the contents of `web.js` need to be updated, you only need to replace that file to achieve a smooth update of the server program.

👉 [High-Performance Web Application Practices](web.md)
