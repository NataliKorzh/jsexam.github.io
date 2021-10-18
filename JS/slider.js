$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    appendDots: $('.slider_dots'),

});


$('.news__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<img class="slick-prev" src="Images/left_arrow.png" alt="Left">',
    nextArrow: '<img class="slick-next" src="Images/right_arrow.png" alt="Right">',
});
