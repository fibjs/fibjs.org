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

function get_file(u) {
    var releases = http.get(u);
    if (releases.status !== 200)
        throw 'http error: ' + releases.status + '\n   ' + u
    return releases.data;
}
var _tmpl = ejs.compile(fs.readTextFile('../web/dist/download/tmpl.html'));

var d = get_file('https://api.github.com/repos/fibjs/fibjs/releases');

var info = JSON.parse(d.toString());

info.forEach(e => {
    e.html = marked(e.body);
});

var html = _tmpl({
    info: info
});

fs.writeFile('../web/dist/download/index.html', html);