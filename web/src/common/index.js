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