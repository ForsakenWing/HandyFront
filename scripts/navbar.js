// cache the element
var $navBar = $('.nav');
// find original navigation bar position
var navPos = $navBar.offset().top;

// on scroll
$(window).scroll(function() {

    // get scroll position from top of the page
    var scrollPos = $(this).scrollTop();

    // check if scroll position is >= the nav position
    if (scrollPos >= navPos) {
        $navBar.addClass('fixed');
    } else {
        $navBar.removeClass('fixed');
    }

});