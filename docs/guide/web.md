# High-Performance Web Application Practices

## Introduction
fibjs is a high-performance application server framework designed primarily for back-end web development. It is built on Google's V8 JavaScript engine and chooses a concurrency solution different from traditional callbacks. fibjs uses fibers to isolate the business complexity caused by asynchronous calls at the framework level, greatly reducing development difficulty and mitigating the performance problems caused by frequent asynchronous processing in user space.

fibjs places great emphasis on performance. Its built-in network I/O and HTTP modules adopt an event-driven, non-blocking I/O model, so developers can easily build highly reliable server applications. Moreover, because the underlying implementation is in C++, fibjs delivers excellent performance and can easily handle high-concurrency access, providing extremely stable and reliable services.

In addition, fibjs also supports WebSocket, a full-duplex communication protocol based on TCP. It establishes a persistent connection between the browser and the server, enabling real-time bidirectional data transmission and supporting data transmission in any format. With WebSocket, you can easily build real-time communication applications with better communication quality.

In short, fibjs emphasizes both high performance and high reliability, and provides real-time communication features such as WebSocket, making it a framework very suitable for developing high-speed web applications.

## Setting Up the Development Environment

Before starting fibjs development, we need to prepare the development environment first. This chapter describes how to install fibjs, how to use the fibjs tool to initialize a project, and how to use an IDE.

### Installing fibjs

The way to install fibjs differs slightly for different operating systems.

For Linux and macOS users, you can install fibjs with the following command:
```sh
curl -s https://fibjs.org/download/installer.sh | sh
```
If you use macOS with the Homebrew package manager, you can also install it with the following command:
```sh
brew install fibjs
```
Windows users need to download the installer from the fibjs website and follow the instructions to install it.

### Creating a New Project with fibjs --init

After installing fibjs, you can use the fibjs tool to quickly create a new project. The following command creates a basic project template:
```sh
fibjs --init
```
This command creates a new project structure in the current directory, including a package.json used to store basic project information and dependency information.

## Writing Web Applications

Web application development is currently the most common use case for fibjs. fibjs provides a series of tools and modules that help us build web applications more quickly.

### Writing an HTTP Server

- First, import the http module;
- Instantiate http.Server and listen for requests.
- The server is started through the start function.

```JavaScript
const http = require('http');

const server = new http.Server(8080, (req) => {
    req.response.write('Hello World!');
});
server.start();
```
### Parsing URL Parameters and the Request Body

Parsing URL parameters and the request body is very important and applies to various server-side applications. In fibjs, you can parse incoming URL parameters directly through req.query, while the request body is read through req.body.
```JavaScript
const http = require('http');

const server = new http.Server(8080, (req) => {
    var name = req.query.get('name');
    var msg = name ? `Hello ${name}!` : 'Hello world!';
    req.response.write(msg);
});
server.start();
```
### Implementing API Access Control

Restricting user access through APIs is a very common scenario. Below is a simple example.
```JavaScript
const http = require('http');

const server = new http.Server(8080, (req) => {
    if (req.headers.get('auth') === 'ok') {
        req.response.write('Hello World!');
    } else {
        req.response.write('Access Denied!');
    }
});
server.start();
```
### Adding Route Handling

Routing is one of the most important concepts in a web application. Routing means dispatching received requests to handlers according to certain rules. In fibjs, you can write your own routing module and bind it to an http server, then perform URL matching and corresponding processing through custom route parsing.
```JavaScript
const http = require('http');
const { Router } = require('mq');

var router = new Router();
router.get('/hello/:name', function (req, name) {
    req.response.write('hello, ' + name);
});
var svr = new http.Server(8080, router);
svr.start();
```
The example above can also be implemented with simpler syntax:
```JavaScript
const http = require('http');

var svr = new http.Server(8080, {
    '/hello/:name': function (req, name) {
        req.response.write('hello, ' + name);
    }
});
svr.start();
```

### Error Handling and Logging

In fibjs, you can catch logical exceptions with try-catch blocks and log them to a log file for debugging; for fatal exceptions, you can throw them directly to the upper-level framework for handling.
```JavaScript
const console = require('console');
const http = require('http');

const server = new http.Server(8080, (req) => {
    try {
        // ...
    } catch (e) {
        console.log(e.message, e.stack);
    }
});
```
### Cross-Origin Requests

In fibjs, we can use the enableCrossOrigin method to allow cross-origin requests. Below is example code for creating an http server and allowing cross-origin requests:
```JavaScript
const http = require('http');

const server = new http.Server(8080, (req) => {
    req.response.write('Hello World!');
});

server.enableCrossOrigin(); // enable cross domain request
server.start();
```
In the example above, we created an http server on port 8080. The enableCrossOrigin() method allows cross-origin requests.

When using enableCrossOrigin to allow cross-origin requests, you can pass an allowHeaders argument to specify the cross-origin headers that are allowed to be received. By default, allowHeaders is Content-Type.

The example code is as follows:
```JavaScript
// enable "Content-Type" and "Authorization" headers in cross domain request
server.enableCrossOrigin("Content-Type, Authorization");
```
In the code above, the value of allowHeaders is "Content-Type, Authorization", which means the server allows the "Content-Type" and "Authorization" cross-origin headers. If the request contains other headers, it will be rejected by the server.

Note that when we use enableCrossOrigin to set the allowed cross-origin headers, we also need to set the corresponding request headers when sending a cross-origin request; otherwise it will likewise be rejected by the server.
## WebSocket

The WebSocket protocol is a full-duplex communication protocol based on TCP. It establishes a persistent connection between the browser and the server, enabling real-time bidirectional data transmission and supporting data transmission in any format. In fibjs, WebSocket is a global object that provides the corresponding APIs, enabling the development of both WebSocket servers and clients.

### Implementing a WebSocket Server with the Global WebSocket

On the server side, an HTTP request can be converted into a WebSocket connection through WebSocket.upgrade. When creating an http server object, you can put WebSocket.upgrade(callback) into the routing table to convert http requests into WebSocket connections.
```JavaScript
var http = require('http');

var server = new http.Server(8080, {
  '/ws': WebSocket.upgrade(function(conn, req) {
    console.log('a client connected.');

    // listening for message events
    conn.onmessage = function(evt) {
      console.log('received message: ', evt.data);
      // echo the message back to client
      conn.send('Server: ' + evt.data);
    };

    // listening for close events
    conn.onclose = function(code, reason) {
      console.log('closed.');
    };

    // listening for error events
    conn.onerror = function(err) {
      console.log(err);
    };
  })
});

server.start();
```
In the example above, we can listen for message events sent by the client and for connection close events between the server and the client. When the server receives a client message, it sends the same message back to the client. This implements simple WebSocket point-to-point communication.

### Interacting with Data Storage

When using WebSocket for communication, in addition to simply sending and receiving messages, you also need to consider persistent storage and querying of data. This is where a database comes into play; you can use the db module built into fibjs to interact with the database.

The example code is as follows:
```JavaScript
var http = require("http");
var db = require("db");

// open a mysql connection
var mysql = db.openMySQL("mysql://root:password@localhost/dbname");

var server = new http.Server(8080, {
  "/ws": WebSocket.upgrade(function(conn, req) {
    console.log("a client connected.");

    // listening for message events
    conn.onmessage = function(evt) {
      console.log("received message: ", evt.data);

      // use execute to query the data
      var rs = mysql.execute("SELECT * FROM user WHERE name=?", evt.data.toString());
      conn.send(JSON.stringify(rs));
    };

    // listening for close events
    conn.onclose = function(code, reason) {
      console.log("closed.");
    };

    // listening for error events
    conn.onerror = function(err) {
      console.log(err);
    };
  })
});

server.start();
```
In the example above, we first use the openMySQL method of the db module to create a MySQL database connection object mysql, and then, after receiving a message from the client, use the execute method to directly execute an SQL query and obtain the records that match the condition. Finally, the query result is sent back to the client through the WebSocket protocol.

Note that in real-world development, you need to handle exceptions properly and ensure data security.

In summary, with the db module we can interact with the database easily and conveniently; combined with the WebSocket protocol, this enables real-time, high-performance web applications.

### Implementing WebSocket Client-Server Communication

On the client side, you can connect to a WebSocket server by creating a WebSocket instance and specifying the URL, and then send messages to the server.
```JavaScript
// create a WebSocket object and connect to ws://localhost:8080/ws
var conn = new WebSocket('ws://localhost:8080/ws');

// listening for open events
conn.onopen = function() {
  conn.send('hello');
}

// listening for message events
conn.onmessage = function(evt) {
  console.log('received message:', evt.data);
}

// listening for close events
conn.onclose = function(code, reason) {
  console.log('closed.');
}

// listening for error events
conn.onerror = function(err) {
  console.log(err);
}
```
In the client code above, we create a WebSocket instance and specify its URL; once the connection is established, we can send messages to the server. When the server receives a client message, it sends the same message back to the client. This implements simple WebSocket point-to-point communication.

### Advantages and Use Cases of WebSocket

The WebSocket protocol has a typical bidirectional communication model, allowing the server to proactively push data to the client. It is often used for scenarios that require high real-time responsiveness, such as chat and online games. Compared with other transport protocols, the WebSocket protocol has the following advantages:

• High real-time responsiveness, supporting bidirectional communication
• Simple protocol specification, easy to use
• Able to handle a large number of concurrent connections
• Supports long connections, reducing the time consumed by network transmission

The most common use cases for WebSocket include web chat, competitive gaming, online playback, and instant messaging.

In summary, with the WebSocket support module, implementation is very simple, and developers can quickly build their own web applications.

## Unit Testing

### Test Frameworks and Testing Methods

In the software development process, testing is a very important phase, and unit testing is an important part of it. Unit testing can effectively verify whether the code meets the design and requirements, and avoid errors introduced when the code is modified. Generally, the principle of unit testing is to test every function and method to ensure that the input and output of every function and method are correct.

A test framework is a code library used to write, run, and verify test cases; it provides functions such as managing, running, and reporting test cases. In JavaScript and Node.js, popular unit testing frameworks include Mocha, Jest, and Jasmine. In fibjs, we also have our own test framework, namely the test module.

In the unit testing process, the commonly used testing methods include black-box testing and white-box testing.

Black-box testing is a testing method that considers only the input and output of a function, not the internal implementation details of the function. Black-box testing is based on requirements analysis and design specifications; through the analysis and execution of test cases, it determines whether the program has logic errors, boundary errors, security issues, and so on. Its advantage is that the testing process is simple and the results are reliable; its disadvantage is that testing cannot cover all program paths.

White-box testing is a testing method that considers the internal implementation details of a function, including conditional statements, loop statements, recursion, and code coverage. Through these tests, problems that may exist in the interaction between shared data and code can be found. The advantage of white-box testing is that it can cover all program paths; its disadvantage is that the testing process is relatively complicated and the test results are affected by the environment and the implementation approach.

### Writing Test Cases with the test Module

In fibjs, we can use the test module to write test cases for a web server. Below is a simple example:
```JavaScript
var test = require('test');
test.setup();

var http = require('http');

describe('Web server test', () => {
    it('should return hello world', () => {
        var r = http.get('http://localhost:8080/hello');
        assert.equal(r.statusCode, 200);
        assert.equal(r.text(), 'Hello World');
    });
});

test.run();
```
In this example, we use the describe and it functions to define the test suite and test cases respectively, and use assert functions for assertion verification.

Inside the describe function, we can define multiple it functions to test different scenarios. In each it function, we can use the http.get function to simulate an HTTP GET request, obtain the response, and perform assertion verification with assertTrue, assertEqual, and so on.

By writing test cases, you can effectively test the correctness of functions and modules, ensure product quality, and also improve code maintainability.

## Hot Update

Hot update means updating server-side code without stopping the service. During program development, code adjustments and new feature additions are often needed for rapid iteration. With hot update, you can use new code without stopping the service, completing iteration work more efficiently.

In fibjs, we can use the SandBox module to implement smooth hot updates. The SandBox module can provide a secure execution environment and simulate features such as global variables. The specific implementation can refer to the following steps:

- Load the code file that needs to be updated (for example, web.js).
- Through SandBox, create a new secure module, load web.js in that module, and generate a secure module. Re-mount the handler of the running service through the generated secure module.
- The server continues to process previous requests, while new requests will be mounted on the new handler.

Below is example code that uses the SandBox module to implement smooth hot update:
```JavaScript
const fs = require('fs');
const http = require('http');
const { SandBox } = require('vm');

let FILE_PATH = './web.js';
let handler = new SandBox().require(FILE_PATH).handler;

const server = new http.Server(8080, handler);

server.start();

fs.watch(FILE_PATH, (event, filename) => {
  handler = new SandBox().require(FILE_PATH).handler;
  server.handler = handler;
  console.log(`[${new Date().toLocaleString()}] server reloaded.`);
});
```
In this code, we first load the code in web.js once at program startup, then create a SandBox instance and load the code in that instance. After that, we create an HTTP Server and use the methods in handler to process requests.

In the code, we use fs.watch to monitor changes to the web.js file. Once the file changes, we reload the code and update the implementation in handler.

## Performance Optimization

During development, we often have to face performance issues. Optimizing code and improving performance is one of the essential skills for developers. In fibjs, we can use the CPU Profiler to help us analyze the running state of the program and optimize the code.

In fibjs, you only need to start fibjs with the command-line argument --prof to enable the CPU Profiler (the default interval is 1000ms). If you need higher-precision analysis logs, you can use the --prof-interval argument to set the log interval. For example:
```sh
$ fibjs --prof test.js   # start the CPU Profiler, with the default interval of 1000ms
$ fibjs --prof --prof-interval=10ms test.js # start the CPU Profiler, with an interval of 10000us (i.e. 10ms)
```
After fibjs finishes running, it generates a directory named after the source file in the current directory; this directory contains a log file and some auxiliary files. The default name of the log file is fibjs-xxxx.log, where xxxx is a timestamp. You can use the --log option to specify the log file name. At this point, you can use `--prof-process` to process the generated log:
```sh
fibjs --prof-process fibjs-xxxx.log prof.svg
```
When it finishes running, open prof.svg in a browser to view the flame graph for this log:
![prof](./imgs/prof.svg)
You can click to view the full-size image. In the full-size image, you can use the mouse to inspect more detailed information: [prof.svg](./imgs/prof.svg).

In the generated flame graph, each colored block represents a recorded point; the longer the block, the more times it was recorded. Each row represents a level of the call stack; the more rows there are, the deeper the call stack. The call stack is laid out upside down: the lower the block, the earlier the function.

There are two categories of block colors: red and blue. In the fibjs profiler, red represents JavaScript execution, and blue represents I/O operations or native execution. Depending on the problem you need to solve, the areas you need to focus on will differ. For example, if you need to solve the problem of excessively high CPU usage, you should focus on the red blocks; while if your application has low CPU usage but responds slowly, you should focus on the blue blocks. The larger the block near the top, the more important it is to focus on and optimize.

We can try to adjust functions that consume a lot of CPU resources, implement I/O asynchronously, or optimize the code as we write it.

## Deployment

To run our project in a production environment, we need to compile and deploy it. Here we describe how to use a package.json file to configure compilation and deployment.

In a project, we can use package.json to manage project dependencies and configure compilation and deployment. Take a simple example package.json:
```JavaScript
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "fib-pool": "^1.0.0"
  }
}
```
When we need to compile and deploy the project, we only need to enter the project directory in a terminal and run the following command:
```sh
fibjs --install
```
This command automatically installs the modules that the project depends on. After that, we can start the project with the following command:
```sh
fibjs app.js
```

👉 [Host Routing](host-routes.md)
