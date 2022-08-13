var ssl = require('ssl');
var http = require('http');
var fs = require('fs');
var path = require('path');
var coroutine = require('coroutine');
var child_process = require('child_process');

var marked = require('marked');
var ejs = require('ejs');
var highlight = require('highlight.js');

ssl.ca.loadRootCerts();

const proxyAgent = process.env.http_proxy || process.env.https_proxy || process.env.all_proxy;
if (proxyAgent) {
    console.log('[sync] proxy detected, use proxyAgent: ' + proxyAgent);
    http.proxyAgent = proxyAgent;
}

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
    var status = releases.status || releases.statusCode;
    if (status !== 200)
        throw 'http error: ' + status + '\n   ' + u
    return releases.data;
}
var baseFolder = path.join(__dirname, '../web/dist/download');
var distFolder = path.join(__dirname, '../web/dist/dist');

process.chdir(path.join(__dirname, '..'));

try {
    fs.mkdir(distFolder);
} catch (e) {}

function sync_releases() {
    child_process.run('git', ['pull']);

    var _tmpl = ejs.compile(fs.readTextFile(path.join(baseFolder, 'tmpl.html')));

    var d = wget('https://api.github.com/repos/fibjs/fibjs/releases');

    var info = typeof d === 'string' ? JSON.parse(d) : d;

    var old_version = "";

    try {
        old_version = fs.readTextFile(path.join(distFolder, 'version.txt'));
    } catch (e) {};

    var new_version = null;
    for (var i = 0; i < info.length - 1; i++) {
        var r = info[i]
        if (!r.prerelease) {
            new_version = info[i].tag_name
            break
        }
    }

    if (!new_version)
        throw 'impossible'

    if (old_version !== new_version) {
        console.log("new version:", new_version);
        fs.writeFile(path.join(distFolder, 'version.txt'), new_version);
    }

    info.forEach(e => {
        e.html = marked(e.body || "");
        e.assets.sort((a1, a2) => {
            if (a1.name < a2.name)
                return -1;
            if (a1.name > a2.name)
                return 1;
            return 0;
        });
    });

    function gen_page() {
        info.forEach(r => {
            if (!r.prerelease) {
                function check(f, u, sz) {
                    var f1 = path.join(distFolder, r.tag_name, f);
                    if (fs.exists(f1))
                        if (sz == -1 || fs.stat(f1).size == sz)
                            return '../dist/' + r.tag_name + '/' + f;
                    return u;
                }

                r.assets.forEach(f => {
                    f.browser_download_url = check(f.name, f.browser_download_url, f.size);
                });

                r.tarball_url = check('src-' + r.tag_name + '.tar.gz', r.tarball_url, -1);
                r.zipball_url = check('src-' + r.tag_name + '.zip', r.zipball_url, -1);

                var txt = _tmpl({
                    info: [r],
                    file_name: r.tag_name
                });

                var fname = path.join(baseFolder, r.tag_name + '.html');
                if (!fs.exists(fname) || txt !== fs.readTextFile(fname)) {
                    fs.writeTextFile(fname, txt);
                    console.log(fname, 'updated.');
                }
            }
        });

        var file_name;
        info.some(r => {
            if (!r.prerelease) {
                file_name = r.tag_name;
                return true;
            }
        })
        var txt = _tmpl({
            info: info,
            file_name: file_name
        });

        var fname = path.join(baseFolder, 'index.html');
        if (!fs.exists(fname) || txt !== fs.readTextFile(fname)) {
            fs.writeTextFile(fname, txt);
            console.log(fname, 'updated.');
        }
    }

    gen_page();

    info.forEach(r => {
        if (!r.prerelease) {
            var new_file = false;

            try {
                fs.mkdir(path.join(distFolder, r.tag_name));
            } catch (e) {}

            function download(f, u, sz) {
                f = path.join(distFolder, r.tag_name, f);
                if (fs.exists(f))
                    if (sz === -1 || fs.stat(f).size == sz)
                        return;

                if (!new_file) {
                    new_file = true;
                    console.log('----------', r.tag_name, '--------------');
                }

                console.log(u);
                var d = wget(u);

                if (sz !== -1 && d.length != sz)
                    throw 'size error: ' + u;

                fs.writeFile(f, d);

                gen_page();
            }

            r.assets.forEach(f => {
                download(f.name, f.browser_download_url, f.size);
            });

            download('src-' + r.tag_name + '.tar.gz', r.tarball_url, -1);
            download('src-' + r.tag_name + '.zip', r.zipball_url, -1);
        }
    });
}

module.exports = () => {
    console.log("start sync");
    while (true) {
        coroutine.start(sync_releases).join();
        coroutine.sleep(100000);
    }
}