//Stickynav
$(window).on('scroll', function() {
    if($(window).scrollTop() > 0) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});

//Scroll To Top fucntionality
(function(){
    let button;
    let toggleScrollToTop = function() {
        if($('html').scrollTop() > 0 || $('body').scrollTop() >0) {
            button.fadeIn(400);
        } else {
            button.fadeOut(400);
        }
    };

    $(document).ready(function() {
        button = $(".Scroll-To-Top");

        $(window).scroll(toggleScrollToTop);

        toggleScrollToTop();

        //Click to scroll to the top

        button.on('click', function() {
            $('html').animate({
                scrollTop:0
            },900);

            $('body').animate({
                scrollTop:0
            },900);
        });
    });
})();