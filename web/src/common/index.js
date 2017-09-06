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

    docsearch({
        apiKey: '4907dc32fc5c4822bb92029ef59843a7',
        indexName: 'fibjs',
        inputSelector: '.searchbox',
        debug: false
    });
});

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-101423781-1', 'auto');
ga('send', 'pageview');