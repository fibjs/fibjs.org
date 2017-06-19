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

if (self != top)
    top.location = location.href;

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

});

var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?90aebbd2b5f574be23bf8fb84c1edf91";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();