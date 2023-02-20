// $('.orts-slider').flickity({
//     // options
//     cellAlign: 'left',
//     contain: true
//   });

var mainSlider = new Swiper(".orts-slider", {
    spaceBetween: 30,
    pagination: {
        el: '.main-slider-pagination',
        clickable: true,
        },
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter: true,
    //     }
});


const bannerCount = document.querySelectorAll('.orts-banner .swiper-wrapper .orts-banner-item').length;

if(bannerCount > 1) {
    var banner = new Swiper(".orts-banner", {
    spaceBetween: 30,
    pagination: {
        el: ".banner-pagination",
        clickable: true
        },
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter: true,
    //     }
});

}


