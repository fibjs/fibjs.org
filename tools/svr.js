var http = require('http');
var util = require('util');
var hash = require('hash');
var io = require('io');
var path = require('path');
var sync = require('./sync');
var translate = require('./fib-translate').translate;

console.log("start server");

var port = process.env.FIBJS_DOC_PORT || 80;
var cache = new util.LruCache(1000, 60 * 60 * 1000);

var hdr = http.fileHandler(path.join(__dirname, "../web/dist"), {}, true);

function get_handler(l) {
    return [
        hdr,
        r => {
            if (r.response.firstHeader('Content-Type') == 'text/html') {
                var data = r.response.data;
                if (data) {
                    var ms = new io.MemoryStream();
                    var txt = cache.get(hash.md5(data).digest().hex(), () => {
                        var txt = translate(data.toString(), {
                            format: 'html',
                            from: 'zh-CN',
                            to: l
                        });
                        txt = txt.replace(/<\/div> <span/g, '</div><span');
                        txt = txt.replace(/en\/index.html>EN<\/a>/g, '../index.html>CN</a>');
                        return txt;
                    });

                    ms.write(txt);

                    r.response.body = ms;
                }
            }
        }
    ];
}

var svr = new http.Server(port, {
    '/en/*': get_handler('zh-TW'),
    "*": hdr
});
svr.start();

// var disableSync = !!process.env.FIBJS_DOC_NO_SYNC
// if (!disableSync) {
//     sync();
// }