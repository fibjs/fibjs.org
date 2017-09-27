# @fibjs/rmdirr

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![appveyor build status][appveyor-image]][appveyor-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@fibjs/rmdirr.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fibjs/rmdirr
[travis-image]: https://img.shields.io/travis/fibjs-modules/rmdirr.svg?style=flat-square
[travis-url]: https://travis-ci.org/fibjs-modules/rmdirr
[appveyor-image]: https://ci.appveyor.com/api/projects/status/3yoaos4qnax1n2bs/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/ngot/rmdirr
[codecov-image]: https://img.shields.io/codecov/c/github/fibjs-modules/rmdirr.svg?style=flat-square
[codecov-url]: https://codecov.io/github/fibjs-modules/rmdirr?branch=master
[david-image]: https://img.shields.io/david/fibjs-modules/rmdirr.svg?style=flat-square
[david-url]: https://david-dm.org/fibjs-modules/rmdirr
[snyk-image]: https://snyk.io/test/npm/@fibjs/rmdirr/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/@fibjs/rmdirr
[download-image]: https://img.shields.io/npm/dm/@fibjs/rmdirr.svg?style=flat-square
[download-url]: https://npmjs.org/package/@fibjs/rmdirr

remove all files and directories like rmdir -rf in fibjs.

## Install

```bash
$ npm i @fibjs/rmdirr --save
```

## Usage

```js
const rmdirr = require('@fibjs/rmdirr');

try{
	rmdirr('/tmp/a/c/d/e');
} catch(err) {
	console.error(err);
}

```

## Questions & Suggestions

Please open an issue [here](https://github.com/fibjs-modules/rmdirr/issues).

## License

[MIT](LICENSE)