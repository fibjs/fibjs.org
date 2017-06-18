var ssl = require('ssl');
var http = require('http');
var fs = require('fs');
var path = require('path');

var marked = require('./modules/marked');
var ejs = require('./modules/ejs');
var highlight = require('./modules/highlight.js');

ssl.ca.loadRootCerts();

marked.setOptions({
    highlight: function (code, lang) {
        if (lang)
            try {
                return highlight.highlight(lang, code).value;
            } catch (e) {}

        return highlight.highlightAuto(code).value;
    }
});

function wget(u) {
    var releases = http.get(u);
    if (releases.status !== 200)
        throw 'http error: ' + releases.status + '\n   ' + u
    return releases.data;
}
var baseFolder = path.join(__dirname, '../web/dist/download');
var _tmpl = ejs.compile(fs.readTextFile(path.join(baseFolder, 'tmpl.html')));

var d = wget('https://api.github.com/repos/fibjs/fibjs/releases');

var info = JSON.parse(d.toString());

info.forEach(e => {
    e.html = marked(e.body);
});

function gen_page() {
    info.forEach(r => {
        var ne_file = false;

        function check(f, u, sz) {
            var f1 = path.join(baseFolder, 'dist', r.tag_name, f);
            if (fs.exists(f1))
                if (sz == -1 || fs.stat(f1).size == sz)
                    return 'dist/' + r.tag_name + '/' + f;
            return u;
        }

        r.assets.forEach(f => {
            f.browser_download_url = check(f.name, f.browser_download_url, f.size);
        });

        r.tarball_url = check('src-' + r.tag_name + '.tar.gz', r.tarball_url, -1);
        r.zipball_url = check('src-' + r.tag_name + '.zip', r.zipball_url, -1);
    });

    fs.writeFile(path.join(baseFolder, 'index.html'), _tmpl({
        info: info
    }));
}

gen_page();

try {
    fs.mkdir(path.join(baseFolder, 'dist'));
} catch (e) {}

info.forEach(r => {
    var ne_file = false;

    try {
        fs.mkdir(path.join(baseFolder, 'dist', r.tag_name));
    } catch (e) {}

    function download(f, u, sz) {
        f = path.join(baseFolder, 'dist', r.tag_name, f);
        if (fs.exists(f))
            if (sz === -1 || fs.stat(f).size == sz)
                return;

        console.log(u);
        var d = wget(u);

        if (sz !== -1 && d.length != sz)
            throw 'size error: ' + u;

        fs.writeFile(f, d);

        gen_page();
    }

    console.log('----------', r.tag_name, '--------------');

    r.assets.forEach(f => {
        download(f.name, f.browser_download_url, f.size);
    });

    download('src-' + r.tag_name + '.tar.gz', r.tarball_url, -1);
    download('src-' + r.tag_name + '.zip', r.zipball_url, -1);
});