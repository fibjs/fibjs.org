# @fibjs/mkdirp

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![appveyor build status][appveyor-image]][appveyor-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@fibjs/mkdirp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fibjs/mkdirp
[travis-image]: https://img.shields.io/travis/fibjs-modules/mkdirp.svg?style=flat-square
[travis-url]: https://travis-ci.org/fibjs-modules/mkdirp
[appveyor-image]: https://ci.appveyor.com/api/projects/status/089mm0c0xa9g2moo/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/ngot/mkdirp
[codecov-image]: https://img.shields.io/codecov/c/github/fibjs-modules/mkdirp.svg?style=flat-square
[codecov-url]: https://codecov.io/github/fibjs-modules/mkdirp?branch=master
[david-image]: https://img.shields.io/david/fibjs-modules/mkdirp.svg?style=flat-square
[david-url]: https://david-dm.org/fibjs-modules/mkdirp
[snyk-image]: https://snyk.io/test/npm/@fibjs/mkdirp/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/@fibjs/mkdirp
[download-image]: https://img.shields.io/npm/dm/@fibjs/mkdirp.svg?style=flat-square
[download-url]: https://npmjs.org/package/@fibjs/mkdirp

Like `mkdir -p`, but in fibjs!

## Install

```bash
$ npm i @fibjs/mkdirp --save
```

## Usage

```js
const mkdirp = require('@fibjs/mkdirp');

try{
	mkdirp('/tmp/a/c/d')
} catch(err) {
	console.error(err)
}

```

then /tmp/a/c/d has beed created.

## API

- mkdirp(dir, opts)

asynchronously create a new directory and any necessary subdirectories at `dir`
with octal permission string `opts.mode`. If `opts` is a non-object, it will be
treated as the `opts.mode`.

If `opts.mode` isn't specified, it defaults to `0777 & (~process.umask())`.

Returns the first directory that had to be created, if any.

You can optionally pass in an alternate `fs` implementation by passing in
`opts.fs`. Your implementation should have `opts.fs.mkdir(path, mode)` and
`opts.fs.stat(path)`.

## Questions & Suggestions

Please open an issue [here](https://github.com/fibjs-modules/mkdirp/issues).

## License

[MIT](LICENSE)