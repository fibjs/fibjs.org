import 'common';
import 'jquery-ui';
import 'jquery.tocify';
import 'social-share.js/src/js/social-share';
import './docs.css';

//Executes your code when the DOM is ready.  Acts the same as $(document).ready().
$(function () {
    var _toc = $("#toc");

    //Calls the tocify method on your HTML div.
    _toc.tocify({
        showAndHide: false,
        extendPage: false,
        hashGenerator: function (text, element) {
            return text.replace(/\s+/g, '-');
        }
    });

    var _content = $(".content");
    var _window = $(window);
    var _document = $(document);

    var fixed = false;
    var _height = _toc.height() + 50;
    var _top = _toc.offset().top;
    var t_top = -1;

    function to(t) {
        t = Math.floor(t);
        if (t_top !== t) {
            t_top = t;
            _toc.css('top', t + 'px');
        }
    }

    function _sync() {
        var _scroll_top = _window.scrollTop();
        var w_height = _window.height();
        var c_height = _content.height();

        if ((_scroll_top > _top) !== fixed) {
            fixed = !fixed;
            if (fixed)
                _toc.addClass('fixed_tocify');
            else
                _toc.removeClass('fixed_tocify');
        }

        if (fixed) {
            if (_height < w_height)
                to(0);
            else
                to(-((_scroll_top - _top) / (c_height - w_height) * (_height - w_height)));
        }
    }

    function _sync1() {
        _height = _toc.height() + 50;
        _top = _toc.offset().top;
        _sync();
    }

    _sync();

    _window.resize(_sync1);
    _window.scroll(_sync);
});