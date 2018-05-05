var http = require('http');
var path = require('path');
var sync = require('./sync');

console.log("start server");
var port = process.env.FIBJS_DOC_PORT || 80;
var svr = new http.Server(port, http.fileHandler(path.join(__dirname, "../web/dist"), {}, true));
svr.run(() => {});

var disableSync = !!process.env.FIBJS_DOC_NO_SYNC
if (!disableSync) {
    sync();
}