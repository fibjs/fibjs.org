var process = require("process");
var http = require("http");
var db = require("db");
var mq = require("mq");
var Pool = require("fib-pool");
var config = require("./config");

global.dbs = Pool(function () {
    return db.open(config.db);
}, 4);

function loadServer() {
    var route = new mq.Routing();
    route.append(require("./site"));

    return new http.Server(8888, route);
}

if (argv[2] == 'test') {
    loadServer().run(function () {});
    require('./test')();
} else if (argv[2] == 'dev') {
    process.start("webpack", [
        "--progress",
        "--colors",
        "--watch"
    ]);

    process.start("open", [
        "http://127.0.0.1:8888/"
    ]);

    loadServer().run();
} else {
    process.start("open", [
        "http://127.0.0.1:8888/"
    ]);

    loadServer().run();
}

global.dbs.clear();