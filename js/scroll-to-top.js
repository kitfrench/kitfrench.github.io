jQuery(window).scroll(function() {
    if ( jQuery(this).scrollTop() > 100 ) {
        jQuery('.back-to-top').addClass('show');
    } else {
        jQuery('.back-to-top').removeClass('show');
    }
});

jQuery(".back-to-top").click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   jQuery("html, body").animate({scrollTop: 0}, 1000);
});
