import 'styles/index.less';

if ((!document.addEventListener)) {
    require('console-polyfill');
    require('html5shiv');
    require('es5-shim');
    require('./respond');
}

import 'jquery';
import 'bootstrap';
import './ie10-viewport';

var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?90aebbd2b5f574be23bf8fb84c1edf91";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();