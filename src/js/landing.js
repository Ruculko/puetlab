$(window).on('load', function(){
    console.log('uwu');

    $('.features__container').slick({
        autoplay: true,
        slidesToShow: 4,
        arrows: false,

      });
});

$('#slick-next').on('click',function(evt){
    $('.features__container').slick('slickNext');
});

$('#slick-prev').on('click',function(evt){
    $('.features__container').slick('slickPrev');
});

$(document).ready(function(ext){
    console.log('Ready..');
});