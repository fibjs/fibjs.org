import 'styles/index.less';
import '@fortawesome/fontawesome-free/css/all.css';

import 'jquery';
import 'bootstrap';

if (self != top)
    top.location = location.href;

$(document).ready(function () {
    docsearch({
        apiKey: '4907dc32fc5c4822bb92029ef59843a7',
        indexName: 'fibjs',
        inputSelector: '.searchbox',
        debug: false
    });
});