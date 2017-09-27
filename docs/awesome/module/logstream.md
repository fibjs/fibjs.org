# @fibjs/logstream

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![appveyor build status][appveyor-image]][appveyor-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@fibjs/logstream.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fibjs/logstream
[travis-image]: https://img.shields.io/travis/fibjs-modules/logstream.svg?style=flat-square
[travis-url]: https://travis-ci.org/fibjs-modules/logstream
[appveyor-image]: https://ci.appveyor.com/api/projects/status/dcv9kcjdwbqjs35x/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/ngot/logstream
[codecov-image]: https://img.shields.io/codecov/c/github/fibjs-modules/logstream.svg?style=flat-square
[codecov-url]: https://codecov.io/github/fibjs-modules/logstream?branch=master
[david-image]: https://img.shields.io/david/fibjs-modules/logstream.svg?style=flat-square
[david-url]: https://david-dm.org/fibjs-modules/logstream
[snyk-image]: https://snyk.io/test/npm/@fibjs/logstream/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/@fibjs/logstream
[download-image]: https://img.shields.io/npm/dm/@fibjs/logstream.svg?style=flat-square
[download-url]: https://npmjs.org/package/@fibjs/logstream

wrap a file stream as a extremely high performance log stream.

## Install

```bash
$ npm i @fibjs/logstream --save
```

## Usage

```js
const fs = require('fs');
const LogStream = require('@fibjs/logstream');

const fd = fs.open('path to log file', 'w');
const bf = new LogStream(fd);
bf.writeText('some log');
bf.writeLine('new line log');
bf.end();// close the log stream.
```

## Questions & Suggestions

Please open an issue [here](https://github.com/fibjs-modules/logstream/issues).

## License

[MIT](LICENSE)