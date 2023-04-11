console.log('Landing...')

$(window).on('load', function() {
    console.log('Load...');

    $('.statistics-blocks').slick({
        //autoplay: true,
        slidesToShow: 4,
        arrows: false,
    });
});

$('#slick-next').on('click', function(evt) {
    $('.statistics-blocks').slick('slickNext');
});

$('#slick-prev').on('click', function(evt) {
    $('.statistics-blocks').slick('slickPrev');
});

$(document).ready(function(evt) {
    console.log('Ready...');
});

