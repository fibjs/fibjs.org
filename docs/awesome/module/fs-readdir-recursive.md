# @fibjs/fs-readdir-recursive

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![appveyor build status][appveyor-image]][appveyor-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@fibjs/fs-readdir-recursive.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fibjs/fs-readdir-recursive
[travis-image]: https://img.shields.io/travis/fibjs-modules/fs-readdir-recursive.svg?style=flat-square
[travis-url]: https://travis-ci.org/fibjs-modules/fs-readdir-recursive
[appveyor-image]: https://ci.appveyor.com/api/projects/status/swxvycgm8ak7y1ky/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/ngot/fs-readdir-recursive
[codecov-image]: https://img.shields.io/codecov/c/github/fibjs-modules/fs-readdir-recursive.svg?style=flat-square
[codecov-url]: https://codecov.io/github/fibjs-modules/fs-readdir-recursive?branch=master
[david-image]: https://img.shields.io/david/fibjs-modules/fs-readdir-recursive.svg?style=flat-square
[david-url]: https://david-dm.org/fibjs-modules/fs-readdir-recursive
[snyk-image]: https://snyk.io/test/npm/@fibjs/fs-readdir-recursive/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/@fibjs/fs-readdir-recursive
[download-image]: https://img.shields.io/npm/dm/@fibjs/fs-readdir-recursive.svg?style=flat-square
[download-url]: https://npmjs.org/package/@fibjs/fs-readdir-recursive

Read a directory recursively.

## Install

```bash
$ npm i @fibjs/fs-readdir-recursive --save
```

## Usage

```js
var read = require('@fibjs/fs-readdir-recursive')
read(__dirname) === [
  'test/test.js',
  'index.js',
  'LICENSE',
  'package.json',
  'README.md'
]
```

## Questions & Suggestions

Please open an issue [here](https://github.com/fibjs-modules/fs-readdir-recursive/issues).

## License

[MIT](LICENSE)