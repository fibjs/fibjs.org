const http = require('http');
const path = require('path');
const sync = require('./sync');
const AcmeApp = require('fib-acme');

const hdr = http.fileHandler(path.join(__dirname, "../web/dist"), {}, true);

const app = new AcmeApp({
    config: path.join(__dirname, './acme.json'),
    domain: 'fibjs.org',
    email: 'info@tpblock.io',
    handler: hdr,
});

app.start();

const disableSync = !!process.env.FIBJS_DOC_NO_SYNC
if (!disableSync)
    sync();