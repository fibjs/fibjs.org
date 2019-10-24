var http = require('http');
var util = require('util');
var hash = require('hash');
var io = require('io');
var path = require('path');
var sync = require('./sync');
var trans = require('./fib-translate');

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
                    var txt = cache.get(hash.md5(data).digest().hex() + "_" + l, () => {
                        var txt = data.toString();

                        txt = txt.replace(/<div class=dropdown-menu>( *<a href=[^>]+>[^<]+<\/a>)*/g, (s) => {
                            return s.replace(/href=/g, 'href=../');
                        })

                        var re = /<pre>.*?<\/pre>/sg;
                        var codes = [];
                        var r;

                        while (r = re.exec(txt))
                            codes.push(r[0]);

                        txt = trans.translate(txt, {
                            format: 'html',
                            from: 'zh-CN',
                            to: l
                        });

                        var pre_no = 0;
                        txt = txt.replace(re, s => codes[pre_no++]);

                        return txt;
                    });

                    ms.write(txt);

                    r.response.body = ms;
                }
            }
        }
    ];
}

var r = {};

for (var l in trans.langs)
    r[`/${l}/*`] = get_handler(l);
r['*'] = hdr;

var svr = new http.Server(port, r);
svr.start();

var disableSync = !!process.env.FIBJS_DOC_NO_SYNC
if (!disableSync) {
    sync();
}