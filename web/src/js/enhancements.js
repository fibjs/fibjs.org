// Enhanced interactions for fibjs.org

(function ($) {
    'use strict';

    // Smooth scroll for all anchor links
    $('a[href^="#"]').on('click', function (e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800, 'swing');
        }
    });

    // Back to top button with smooth animation
    var $backToTop = $('#back-to-top, .back-to-top');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $backToTop.fadeIn(300);
        } else {
            $backToTop.fadeOut(300);
        }
    });

    $backToTop.on('click', function (e) {
        e.preventDefault();
        if ($(this).tooltip) {
            $(this).tooltip('hide');
        }
        $('html, body').animate({
            scrollTop: 0
        }, 300, 'swing');
        return false;
    });

    // Add scrolled class to navbar on scroll
    var $navbar = $('.navbar-default');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $navbar.addClass('scrolled');
        } else {
            $navbar.removeClass('scrolled');
        }
    });

    // Animate elements on scroll
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScrollAnimation() {
        $('.home-tips, .home-os').each(function () {
            if (isElementInViewport(this)) {
                $(this).addClass('animate-in');
            }
        });
    }

    // Add animation class on scroll
    $(window).on('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check

    // Copy code to clipboard functionality
    $('pre code').each(function () {
        var $code = $(this);
        var $pre = $code.parent();
        var $wrapper = $pre.closest('.code-wrapper');
        var $target = $wrapper.length ? $wrapper : $pre;

        if (!$target.find('.copy-button').length) {
            var $copyBtn = $('<button class="copy-button" title="Copy code">📋</button>');

            if (!$wrapper.length) {
                $pre.css('position', 'relative');
            }

            $target.append($copyBtn);

            $copyBtn.on('click', function (e) {
                e.preventDefault();
                var code = $code.text();

                // Create temporary textarea to copy text
                var $temp = $('<textarea>');
                $('body').append($temp);
                $temp.val(code).select();
                document.execCommand('copy');
                $temp.remove();

                // Show feedback
                var originalText = $copyBtn.text();
                $copyBtn.text('✓ Copied!').addClass('copied');
                setTimeout(function () {
                    $copyBtn.text(originalText).removeClass('copied');
                }, 2000);
            });
        }
    });

    // Enhanced search box interaction
    $('.searchbox').on('focus', function () {
        $(this).parent().addClass('search-focused');
    }).on('blur', function () {
        $(this).parent().removeClass('search-focused');
    });

    // Add fade-in animation for content
    $('.content img').each(function () {
        var $img = $(this);
        $img.on('load', function () {
            $img.addClass('loaded');
        });
        if (this.complete) {
            $img.addClass('loaded');
        }
    });

    // Improve table responsiveness
    $('.content table').each(function () {
        if (!$(this).parent().hasClass('table-responsive')) {
            $(this).wrap('<div class="table-responsive"></div>');
        }
    });

    // Add external link indicators
    $('.content a[href^="http"]').not('[href*="' + window.location.hostname + '"]').each(function () {
        $(this).attr('target', '_blank').attr('rel', 'noopener noreferrer');
        if (!$(this).find('.external-icon').length) {
            $(this).append(' <span class="external-icon">↗</span>');
        }
    });

})(jQuery);
