var http = require('http');
var path = require('path');
var sync = require('./sync');

var port = process.env.FIBJS_DOC_PORT || 80;
console.log(`start server at ${port}`);

var hdr = http.fileHandler(path.join(__dirname, "../web/dist"), {}, true);

var svr = new http.Server(port, hdr);
svr.start();

var disableSync = !!process.env.FIBJS_DOC_NO_SYNC
if (!disableSync)
    sync();