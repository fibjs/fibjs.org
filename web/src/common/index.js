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
    (function () {
        //filter IE8 and earlier which don't support the generated content
        if (typeof (window.getComputedStyle) == 'undefined') {
            return;
        }

        //get the collection of PRE elements
        var pre = document.getElementsByTagName('pre');

        //now iterate through the collection
        for (var len = pre.length, i = 0; i < len; i++) {
            //get the CODE or SAMP element inside it, 
            //or just in case there isn't one, continue to the next PRE
            var code = pre[i].getElementsByTagName('code').item(0);
            if (!code) {
                code = pre[i].getElementsByTagName('samp').item(0);
                if (!code) {
                    continue;
                }
            }

            //create a containing DIV column (but don't append it yet)
            //including aria-hidden so that ATs don't read the numbers
            var column = document.createElement('div');
            column.setAttribute('aria-hidden', 'true');

            //split the code by line-breaks to count the number of lines
            //then for each line, add an empty span inside the column
            for (var n = 0; n < code.innerHTML.split(/[\n\r]/g).length - 1; n++) {
                column.appendChild(document.createElement('span'));
            }

            //now append the populated column before the code element
            pre[i].insertBefore(column, code);

            //finally add an identifying class to the PRE to trigger the extra CSS
            pre[i].className = 'line-numbers';
        }
    })();

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