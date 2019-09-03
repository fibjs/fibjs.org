# 域名路由

从 0.28.0 开始, `fibjs` 的 mq.Routing 对象支持 HOST 方法作为域名路由.

```javascript
const mq = require('mq')

const rt = new mq.Routing();

// 使得 routes 支持 *.fibjs.org 解析
rt.host('*.fibjs.org', ...)
// 使得 routes 支持 api.fibjs.org 解析
rt.host('api.fibjs.org', ...)
// 使得 routes 支持 www.fibjs.org, other.fibjs.org, *.fibjs.org 解析
rt.host('fibjs.org', ...)

// `rt.host(...args)` 实际上是 `rt.append('host', ...args)` 的别名
rt.append('host', 'fibjs.org', ...)
```

我们来看一些例子.

## 简单例子

### 简单的 fileHandlers

假设域名 fibjs.org 已经被绑定到我们应用所在的机器(处于测试目的, 你也可以通过在本地修改 Hosts 达到这一绑定效果), 而我们希望通过 `file.fibjs.org` 可以下载机器上 FILE_DIR 目录的文件资源,
我们可以这样做:

```javascript
const mq = require('mq')
const http = require('http')

const fileRoutes = new mq.Routing();
// 对域名 file.fibjs.org 的请求, 以 fileHandler 响应
fileRoutes.host('file.fibjs.org', http.fileHandler(FILE_DIR))
```

### 前端资源 host

典型的场景是, 编译好的前端应用可能会发布到机器上, 比如存到了 `/home/frontend/assets/` 目录

```bash
/home/frontend/assets/index.html
/home/frontend/assets/200.html
/home/frontend/assets/app.839ca9.js
/home/frontend/assets/common.537a50.js
/home/frontend/assets/chunk.d45858.js
```

而我们希望通过 festatic.fibjs.org 获得这些资源, 则可以这样写:

```javascript
fileRoutes.host('static.fibjs.org', http.fileHandlers('/home/frontend/assets/'))
```

### api 服务器

假设你的机器上存在 api 服务器, 你希望将他们统一到 `api.fibjs.org` 这个域名, 但分配不同的 path , 如:

API Server           | Usage  | Path
--------------|:-----:|-----:|
http://127.0.0.1:3001  | User Service |  /user
http://127.0.0.1:8080  | Biz1 |  /biz1
http://127.0.0.1:9007  | Biz2 | /biz2

那么你可以:

```javascript
const mq = require('mq')

const apiRoutes = new mq.Routing();

// proxyTo 是代理请求到对应 origin 的函数
apiRoutes.host('api.fibjs.org', {
    '/user': (req) => proxyTo(req, `http://127.0.0.1:3001`),
    '/biz1': (req) => proxyTo(req, `http://127.0.0.1:8080`),
    '/biz2': (req) => proxyTo(req, `http://127.0.0.1:9007`),
})
```

进一步的, 如果你希望其中的 '/biz1' 路径只接受 http POST 请求, 则可以:

```javascript
const mq = require('mq')
const http = require('http')

const apiRoutes = new mq.Routing();

apiRoutes.host('api.fibjs.org', {
    '/user': (req) => proxyTo(req, `http://127.0.0.1:3001`),
    '/biz1': http.post((req) => proxyTo(req, `http://127.0.0.1:8080`)),
    '/biz2': (req) => proxyTo(req, `http://127.0.0.1:9007`),
})
```

**注意** api.fibjs.org 必须已经绑定到当前机器

## 复杂例子

若无其它声明, 以下例子中, 存在以下函数:

```javascript
// 生成带特定 host 的请求
function getRequest({
    path = '/',
    host = 'www.fibjs.org'
}) {
    const req = new http.Request()

    req.value = path
    req.addHeader('host', host)
    return req
}

// 以 method 尝试对 routes 发起一个 header: host=host 的请求
function invokePathFromHost (path, host, method = 'GET') {
    const req = getRequest({ path, host })
    req.method = method

    mq.invoke(routes, req)

    const result = req.response.body.readAll()
    return result ? result.toString() : result
}
```

### 域名分流

```javascript
const mq = require('mq')
const http = require('http')
const assert = require('assert')

const routes = new mq.Routing();

routes.host('api.fibjs.org', [
    {
        '/user/information': req => req.response.json({name: 'xicilion'}),
    },
    req => req.response.body.rewind()
])

// routes.host 方法可以多次调用
routes.host('*.fibjs.org', [
    {
        '/': req => req.response.json({message: 'I am in root'}),
        '/index.html': req => req.response.body.write(`<html><body>hello fibjs</body></html>`),
        '/index.js': req => req.response.body.write(`console.log('hello world')`),
        '*': (req, domain) => {
            req.response.json({message: 'I am fallback'})
        }
    },
    req => req.response.body.rewind()
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

接下来,你只需要将上例中的 routes 挂载到一个 http(s)Server, 它就可以开始工作了. 如果这个 server 监听了所在机器的默认端口(一般是 80), 则一个根据域名分流不同路由的网关服务就搭建好了 —— 这意味着, 完成同样的功能, 你可以仅使用 fibjs 的 mq.Routing 而不一定非要安装 nginx/apache/tomcat/iis 等传统网关服务.