$(window).on('scroll', function() {
    if($(window).scrollTop() > 0) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});