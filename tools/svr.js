var http = require('http');
var path = require('path');
var sync = require('./sync');

console.log("start server");
var svr = new http.Server(80, http.fileHandler(path.join(__dirname, "../web/dist"), {}, true));
svr.run(() => {});
sync();