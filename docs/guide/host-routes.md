# Host Routing

Starting from 0.28.0, the mq.Routing object of `fibjs` supports the HOST method for host routing.

```javascript
const mq = require('mq')

const rt = new mq.Routing();

// support *.fibjs.org in Routing
rt.host('*.fibjs.org', ...)
// support api.fibjs.org in Routing
rt.host('api.fibjs.org', ...)
// support fibjs.org in Routing
rt.host('fibjs.org', ...)

rt.append('host', 'fibjs.org', ...)
```

Let's look at some examples.

## Simple Examples

### Simple fileHandlers

Assume the domain fibjs.org has already been bound to the machine where our application runs (for testing purposes, you can also achieve this binding by modifying the local hosts file), and we want to download the file resources in the FILE_DIR directory on the machine through `file.fibjs.org`.
We can do it like this:

```javascript
const mq = require('mq')
const http = require('http')

const fileRoutes = new mq.Routing();
// support file.fibjs.org in Routing
fileRoutes.host('file.fibjs.org', http.fileHandler(FILE_DIR))
```

### Front-end Asset Host

A typical scenario is that a compiled front-end application may be published to the machine, for example stored in the `/home/frontend/assets/` directory

```bash
/home/frontend/assets/index.html
/home/frontend/assets/200.html
/home/frontend/assets/app.839ca9.js
/home/frontend/assets/common.537a50.js
/home/frontend/assets/chunk.d45858.js
```

If we want to serve these assets through festatic.fibjs.org, we can write:

```javascript
fileRoutes.host('festatic.fibjs.org', http.fileHandler('/home/frontend/assets/'))
```

### API Server

Assume there are API servers on your machine and you want to unify them under the `api.fibjs.org` host while assigning different paths, such as:

API Server           | Usage  | Path
--------------|:-----:|-----:|
http://127.0.0.1:3001  | User Service |  /user
http://127.0.0.1:8080  | Biz1 |  /biz1
http://127.0.0.1:9007  | Biz2 | /biz2

Then you can do:

```javascript
const mq = require('mq')

const apiRoutes = new mq.Routing();

// proxyTo is the function that proxies requests to the corresponding origin
apiRoutes.host('api.fibjs.org', {
    '/user': (req) => proxyTo(req, `http://127.0.0.1:3001`),
    '/biz1': (req) => proxyTo(req, `http://127.0.0.1:8080`),
    '/biz2': (req) => proxyTo(req, `http://127.0.0.1:9007`),
})
```

Furthermore, if you want the '/biz1' path to accept only HTTP POST requests, you can do:

```javascript
const mq = require('mq')

const apiRoutes = new mq.Routing();

apiRoutes.host('api.fibjs.org', {
    '/user': (req) => proxyTo(req, `http://127.0.0.1:3001`),
    '/biz1': apiRoutes.post((req) => proxyTo(req, `http://127.0.0.1:8080`)),
    '/biz2': (req) => proxyTo(req, `http://127.0.0.1:9007`),
})
```

**Note** api.fibjs.org must already be bound to the current machine

## Complex Examples

Unless otherwise stated, the following examples use the following functions:

```javascript
// generate a request with a specific host
function getRequest({
    path = '/',
    host = 'www.fibjs.org'
}) {
    const req = new http.Request()

    req.value = path
    req.appendHeader('host', host)
    return req
}

// try to send a request with header host=host to routes using method
function invokePathFromHost (path, host, method = 'GET') {
    const req = getRequest({ path, host })
    req.method = method

    mq.invoke(routes, req)

    const body = req.response.body
    if (!body) return null
    body.rewind()
    const result = body.readAll()
    return result ? result.toString() : result
}
```

### Host-based Routing

```javascript
const mq = require('mq')
const http = require('http')
const assert = require('assert')

const routes = new mq.Routing();

routes.host('api.fibjs.org', [
    {
        '/user/information': req => req.response.json({name: 'xicilion'}),
    },
    req => { const body = req.response.body; if (body) body.rewind() }
])

// the routes.host method can be called multiple times
routes.host('*.fibjs.org', [
    {
        '/': req => req.response.json({message: 'I am in root'}),
        '/index.html': req => { req.response.write(`<html><body>hello fibjs</body></html>`) },
        '/index.js': req => { req.response.write(`console.log('hello world')`) },
        '*': (req, domain) => {
            req.response.json({message: 'I am fallback'})
        }
    },
    req => { const body = req.response.body; if (body) body.rewind() }
])

assert.equal( invokePathFromHost('/', 'www.fibjs.org'), `{"message":"I am in root"}` )
assert.equal( invokePathFromHost('/index.html', 'static.fibjs.org'), `<html><body>hello fibjs</body></html>` )
assert.equal( invokePathFromHost('/index.js', 'static.fibjs.org'), `console.log('hello world')` )
assert.equal( invokePathFromHost('/user/information', 'api.fibjs.org'), JSON.stringify({name: 'xicilion'}) )

try {
    invokePathFromHost('/', 'fibjs.org')
} catch (error) {
    assert.equal(error, 'Error: Routing: unknown routing: fibjs.org')
}
```

Next, you just need to mount the routes from the example above onto an http(s) Server, and it can start working. If this server listens on the machine's default port (usually 80), then a gateway service that routes traffic to different routes based on the host is ready — this means that to achieve the same functionality, you can just use fibjs's mq.Routing without necessarily installing traditional gateway services such as nginx/apache/tomcat/iis.

👉 [fibjs Desktop Application Development Guide](gui.md)
