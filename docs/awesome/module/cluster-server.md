# @fibjs/cluster-server

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![appveyor build status][appveyor-image]][appveyor-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@fibjs/cluster-server.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fibjs/cluster-server
[travis-image]: https://img.shields.io/travis/fibjs-modules/cluster-server.svg?style=flat-square
[travis-url]: https://travis-ci.org/fibjs-modules/cluster-server
[appveyor-image]: https://ci.appveyor.com/api/projects/status/50xpe6gjlnlqnaxj/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/ngot/cluster-server
[codecov-image]: https://img.shields.io/codecov/c/github/fibjs-modules/cluster-server.svg?style=flat-square
[codecov-url]: https://codecov.io/github/fibjs-modules/cluster-server?branch=master
[david-image]: https://img.shields.io/david/fibjs-modules/cluster-server.svg?style=flat-square
[david-url]: https://david-dm.org/fibjs-modules/cluster-server
[snyk-image]: https://snyk.io/test/npm/@fibjs/cluster-server/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/@fibjs/cluster-server
[download-image]: https://img.shields.io/npm/dm/@fibjs/cluster-server.svg?style=flat-square
[download-url]: https://npmjs.org/package/@fibjs/cluster-server

Start a multi-thread server to take advantage of multi-core systems.

## Install

```bash
$ npm i @fibjs/cluster-server --save
```

## Usage

server.js :

```js
const Cluster = require('@fibjs/C-server');
const path = require('path');

const server = new Cluster({
  port: 8000,// server port,default to 8000
  worker: path.join(__dirname, 'worker.js'), // full path to worker 
  numbers: 4,// default to cpu numbers
});

server.run(); // start server asynchronously
// server.close(); // close server
```

worker.js :

```js
module.exports = req => {
  req.response.write('Hello, World!');
};
```

then you can start server:

```bash
  fibjs server.js
```

## Questions & Suggestions

Please open an issue [here](https://github.com/fibjs-modules/cluster-server/issues).

## License

[MIT](LICENSE)