import 'common';
import 'jquery-ui';
import 'jquery.tocify';
import './docs.css';

//Executes your code when the DOM is ready.  Acts the same as $(document).ready().
$(function () {
    //Calls the tocify method on your HTML div.
    $("#toc").tocify({
        showAndHide: false,
        extendPage: false
    });

    var fixed = false;
    var _top = $("#toc").offset().top;

    $(window).scroll(function () {
        var st = $(window).scrollTop();

        if ((st > _top) !== fixed) {
            fixed = !fixed;
            if (fixed)
                $("#toc").addClass('fixed_tocify');
            else
                $("#toc").removeClass('fixed_tocify');

        }
    })
});