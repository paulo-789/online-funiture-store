// first slider
$('.slider-one')
.not(".slick-initialized")
.slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
    prevArrow:".site-slider.slider-btn.prev",
    nextArrow:".site-slider.slider-btn.next",
});
//second-slider
(function($){
    ("use strict");

    $(".set-bg").each(function (){
        var bg = $(this).data("setbg")
        $(this).css("background-image","url(" + bg + ")");
    });
    $(".image-popup").magnificPopup({
        type: "image",
    }); 
})(jQuery);
 