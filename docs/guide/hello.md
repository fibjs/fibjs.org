# Hello World

## Introduction

fibjs is an efficient server-side JavaScript development framework designed for high-concurrency and high-performance applications. Built on the V8 engine, it provides a rich set of built-in modules and powerful asynchronous programming capabilities, so developers can easily build high-performance network applications. This manual will take you from scratch, step by step, through creating a simple "Hello World" application with fibjs and gradually extending it to more complex functionality.

## Your First fibjs Program

We start with the simplest "Hello World" program. Create a file named `main.js` and write the following code in it:

```JavaScript
console.log('hello, world');
```

After saving the file, enter the following command on the command line to run this code:

```sh
fibjs main.js
```

You will see `hello, world` printed to the console.

## Creating a Simple HTTP Server

fibjs has a powerful built-in HTTP server module, which makes it very convenient to create a web server. Next, we will create a simple HTTP server that returns "hello, world".

Create a file named `server.js` and write the following code in it:

```JavaScript
const http = require('http');

var svr = new http.Server(8080, (req) => {
    req.response.write('hello, world');
});

svr.start();
```

After running this code, visit `http://127.0.0.1:8080/` in a browser and you will see the page display `hello, world`.

## Responding Dynamically to Requests

The server above returns `hello, world` no matter what address you enter. Next, let's make it a bit smarter and return different content based on the request path.

Modify the `server.js` file and write the following code:

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

After running this code, enter `http://127.0.0.1:8080/fibjs` in the browser's address bar and you will see the page display `hello, fibjs`. When you change the content in the address bar, the server's output changes accordingly.

## Serving Static Files

Next, let's make the server do a bit more: we want it to support static file browsing while also outputting `hello, world`. We set the address that responds with `hello, fibjs` to `/hello/fibjs`.

Modify the `server.js` file and write the following code:

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

You need to create a directory named `web` and put some files in it, for example, download a copy of the fibjs documentation and put it there as a test.

After running this code, visit `http://127.0.0.1:8080/hello/fibjs` and you will see `hello, fibjs`; visiting any other address will show static files.

## Modular Design

To make the server a bit more complex, we can modularize different features. We have a group of hello services that handle the business requests we define. The paths for this group of services are assigned by the main service as needed. In the example below, both `hello` and `bonjour` point to the hello service.

Modify the `server.js` file and write the following code:

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

In this way, we can easily create fully decoupled modules and then use the main program to assemble them into the interfaces we need. This is especially convenient for API version management: for example, when changing from `/v1/hello/fibjs` to `/v2/hello/fibjs`, the module itself needs no changes at all; you only modify the entry point.

## Handling POST Requests

Besides GET requests, fibjs can also handle POST requests. We can use the `req.json()` method to parse the JSON data in the request body.

Modify the `server.js` file and write the following code:

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

After running this code, you can use curl or Postman to send a POST request to the server with JSON data in the request body. The server will return the data it received.

## Using a Template Engine

fibjs supports using template engines to generate dynamic HTML pages. We can use the built-in `ejs` module to render templates.

First, install the `ejs` module:

```sh
fibjs --install ejs
```

Then modify the `server.js` file and write the following code:

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

Create a file named `template.ejs` and write the following code in it:

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

After running this code, visit `http://127.0.0.1:8080/` in a browser and you will see the page display `Hello, fibjs`.

## Conclusion

Through this manual, you have learned the basics of creating a simple HTTP server with fibjs, handling dynamic requests, serving static files, modular design, using middleware, handling POST requests, and using a template engine. As an efficient server-side JavaScript development framework, fibjs provides a rich set of built-in modules and powerful asynchronous programming capabilities, so developers can easily build high-performance network applications.

Next, you can further explore and learn more features and advanced usage of fibjs according to your needs. We hope this manual helps you get started with fibjs quickly and succeed in your actual projects.

👉 [A Good Life Starts with Testing](test.md)
