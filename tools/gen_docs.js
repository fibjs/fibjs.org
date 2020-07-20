var fs = require('fs');
var path = require('path');

var fibjsFolderBase = process.env.FIBJS_FOLDER || '';

if (!fibjsFolderBase && console.readLine)
    fibjsFolderBase = console.readLine('provide fibjs source directory: ')

if (!fibjsFolderBase || !fs.exists(fibjsFolderBase))
    throw new Error('set env FIBJS_FOLDER firstly!')

var parser = require(path.resolve(fibjsFolderBase, './tools/util/parser'));
var gen_docs = require(path.resolve(fibjsFolderBase, './tools/util/gen_docs'));

var baseFolder = path.join(fibjsFolderBase, "./idl/zh-cn");
var docsFolderBase = path.join(__dirname, '../');

var defs = parser(baseFolder);
gen_docs(defs, path.join(docsFolderBase, './docs/manual'));

process.chdir(docsFolderBase);
process.run('npm', ['run', 'build']);