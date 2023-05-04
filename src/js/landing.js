import Swiper from 'swiper';
import 'swiper/css';

console.log('Landing...')

$(window).on('load', function() {
    console.log('Load...');

    $('.statistics-blocks').slick({
        //autoplay: true,
        slidesToShow: 4,
       
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    
        
    });

    const swiper = new Swiper('.swiper', {
        loop: true,
        // spaceBetween: 30,
        slidesPerView: 4,
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