# @fibjs/detect-port

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![appveyor build status][appveyor-image]][appveyor-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@fibjs/detect-port.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fibjs/detect-port
[travis-image]: https://img.shields.io/travis/fibjs-modules/detect-port.svg?style=flat-square
[travis-url]: https://travis-ci.org/fibjs-modules/detect-port
[appveyor-image]: https://ci.appveyor.com/api/projects/status/34hk280r11xavawl/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/ngot/detect-port
[codecov-image]: https://img.shields.io/codecov/c/github/fibjs-modules/detect-port.svg?style=flat-square
[codecov-url]: https://codecov.io/github/fibjs-modules/detect-port?branch=master
[david-image]: https://img.shields.io/david/fibjs-modules/detect-port.svg?style=flat-square
[david-url]: https://david-dm.org/fibjs-modules/detect-port
[snyk-image]: https://snyk.io/test/npm/@fibjs/detect-port/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/@fibjs/detect-port
[download-image]: https://img.shields.io/npm/dm/@fibjs/detect-port.svg?style=flat-square
[download-url]: https://npmjs.org/package/@fibjs/detect-port

JavaScript Implementation of Port Detector

## Install

```bash
$ npm i @fibjs/detect-port --save
```

## Usage

```js
const detectPort = require('@fibjs/detect-port');
const availablePort = detectPort();
```

or

```js
const detectPort = require('@fibjs/detect-port');
const port = 3000;
const availablePort = detectPort(port);
if (availablePort === port) {
  console.log(`port ${port} is available!`);
} else {
  console.log(`port ${port} is not available! Got a random available port: ${availablePort} for you.`);
}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/fibjs-modules/detect-port/issues).

## License

[MIT](LICENSE)
