document.addEventListener("DOMContentLoaded", function () {

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: "fade", // Fade effect
    fadeEffect: {
        crossFade: true // Ensures smooth transition between slides
    },
    autoplay: {
        delay: 2000, // Delay in milliseconds
        disableOnInteraction: true, // Keep autoplay active after user interaction
    },
    slidesPerView: 1, // Fix the typo; it should be slidesPerView
// speed: 1000, // Transition speed
    navigation: {
        nextEl: ".swiper-button-next", // Navigation button for next slide
        prevEl: ".swiper-button-prev", // Navigation button for previous slide
    },
    pagination: {
        el: ".swiper-pagination-main", // Pagination bullets container
        clickable: true, // Makes pagination bullets clickable
    },
})

})