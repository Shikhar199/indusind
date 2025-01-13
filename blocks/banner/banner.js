import { createAemElement } from "../../scripts/aem.js";

export default function decorate(block){
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);

    const section = createAemElement('section', ['swiper-container', 'main-slider', 'swiper-fade', 'swiper-initialized', 'swiper-horizontal', 'swiper-watch-progress', 'swiper-backface-hidden', 'aos-init', 'aos-animate'], {'data-aos':'zoom-out'}, 'carouselSection');
    const mainDiv = createAemElement('div', ['swiper-wrapper'], {'aria-live':'off'}, 'mainDivBan');

    section.appendChild(mainDiv);

    [...container.children].forEach((row,r)=>{
        const picture = row.querySelector('picture');
        const anchor = row.querySelector('a');
        const anchorHref = anchor.getAttribute('href');

        const sliderDiv = createAemElement('div', ['swiper-slide', 'spotlight', 'lozad-picture', 'swiper-slide-prev'], {'data-spotlight':'fullscreen', 'data-bgcolor':'#ffffff', 'role':'group'}, null);

        const atag = createAemElement('a', ['d-block', 'banner-block'], null, null);
        atag.setAttribute('href', anchorHref);

        const containerDiv = createAemElement('div', ['container'], null, null);
        const holderDiv = createAemElement('div', ['spotlight-holder'], null, null);

        const maskContainer = getMaskContentDiv();

        sliderDiv.appendChild(atag);
        atag.appendChild(containerDiv);
        containerDiv.appendChild(holderDiv);
        holderDiv.appendChild(picture);
        holderDiv.appendChild(maskContainer);

        mainDiv.appendChild(sliderDiv);
    })

    const swiperPaginationDiv = createAemElement('div', ['swiper-pagination', 'swiper-pagination-main', 'swiper-pagination-white', 'container', 'm-auto', 'left-0', 'right-0', 'bottom-sm-5', 'bottom-lg-7', 'text-right', 'swiper-pagination-clickable', 'swiper-pagination-bullets', 'swiper-pagination-horizontal'], null, null);
    const bulletSpan1 = createAemElement('span', ['swiper-pagination-bullet'], {'tabindex':'0', 'role':'button', 'aria-label':'Go to slide 1'}, null);
    const bulletSpan2 = createAemElement('span', ['swiper-pagination-bullet'], {'tabindex':'0', 'role':'button', 'aria-label':'Go to slide 2'}, null);
    const bulletSpan3 = createAemElement('span', ['swiper-pagination-bullet', 'swiper-pagination-bullet-active'], {'tabindex':'0', 'role':'button', 'aria-label':'Go to slide 3', 'aria-current':'true'}, null);

    swiperPaginationDiv.appendChild(bulletSpan1);
    swiperPaginationDiv.appendChild(bulletSpan2);
    swiperPaginationDiv.appendChild(bulletSpan3);

    const notificationSpan = createAemElement('span', ['swiper-notification'], {'aria-live':'assertive', 'aria-atomic':'true'}, null);

    section.appendChild(swiperPaginationDiv);
    section.appendChild(notificationSpan);

    console.log(section);
    block.appendChild(section);

    // setTimeout(adjustSlidesWidth,3000);

    // window.addEventListener("resize", adjustSlidesWidth);

    window.addEventListener("resize", adjustSlidesWidth);

    callBannerSwipper();
}

function getMaskContentDiv(){
    // Create the main container div
    const mainContainer = document.createElement("div");
    mainContainer.className = "container py-space d-flex mask-content-cover";

    // Create the inner col div
    const colDiv = document.createElement("div");
    colDiv.className = "col";

    // Create the inner row div
    const rowDiv = document.createElement("div");
    rowDiv.className = "row justify-content-end";

    // Create the column div
    const colInnerDiv = document.createElement("div");
    colInnerDiv.className = "col-12 col-md-12 col-lg-7 col-xl-6 text-left";

    // Create the first unordered list
    const ul1 = document.createElement("ul");
    ul1.className = "list-inline";

    // Create the first list item
    const li1 = document.createElement("li");
    li1.className = "list-inline-item text-black blockquote aos-init aos-animate";
    li1.setAttribute("data-aos", "fade-up");
    li1.setAttribute("data-aos-duration", "2015");

    // Append the list item to the first unordered list
    ul1.appendChild(li1);

    // Create the second unordered list
    const ul2 = document.createElement("ul");
    ul2.className = "list-inline d-flex flex-row mb-sm-2 mb-lg-0";

    // Create the second list item
    const li2 = document.createElement("li");
    li2.className = "list-inline-item text-white blockquote aos-init aos-animate";
    li2.setAttribute("data-aos", "fade-up");
    li2.setAttribute("data-aos-duration", "2015");

    // Append the second list item to the second unordered list
    ul2.appendChild(li2);

    // Create the span element
    const span = document.createElement("span");
    span.className = "clearfix";

    // Append the lists and span to the column div
    colInnerDiv.appendChild(ul1);
    colInnerDiv.appendChild(ul2);
    colInnerDiv.appendChild(span);

    // Append the column div to the row div
    rowDiv.appendChild(colInnerDiv);

    // Append the row div to the col div
    colDiv.appendChild(rowDiv);

    // Append the col div to the main container
    mainContainer.appendChild(colDiv);

    return mainContainer;

}

function adjustSlidesWidth(){

    console.log("Adjusting width");
    const swiperWrapper = document.querySelector("#mainDivBan"); // Select the swiper-wrapper
    const swiperSlides = document.querySelectorAll("#mainDivBan .swiper-slide");

    if (swiperWrapper && swiperSlides.length > 0) {
        // Get the computed width of the swiper-wrapper
        const wrapperWidth = swiperWrapper.clientWidth;

        // Set the width of each swiper-slide to match the swiper-wrapper
        swiperSlides.forEach((slide) => {
            element.style.setProperty("width", "100%", "important");
        });

        console.log("Swiper slides resized to wrapper width:", wrapperWidth);
    } else {
        console.error("Swiper-wrapper or slides not found!");
    }
}

function callBannerSwipper(){
    console.log("Inside swiper slider function.........");
    // const swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 1, // Number of slides to show
    //     // spaceBetween: 50, // Space between slides (optional)
    //     autoplay: {
    //       delay: 10000, // Delay in milliseconds
    //       disableOnInteraction: false, // Keep autoplay active after user interaction
    //     },
        
    //     loop: false, // Enables infinite scrolling
    //     // speed: 2000,
    //     effect: 'fade', // Optional: Adds a fade effect instead of sliding
    //     fadeEffect: {
    //         crossFade: true, // Smooth fade transition
    //     },
    //     // pagination: {
    //         // el: '.swiper-pagination-main', // Use your existing pagination element
    //         // clickable: true, // Allow pagination bullets to be clickable
    //         // renderBullet: function (index, className) {
    //         //   return `<span class="${className}" role="button" aria-label="Go to slide ${index + 1}"></span>`;
    //         // },
    //     // },
    //     // navigation: {
    //     //   nextEl: '.swiper-button-next',
    //     //   prevEl: '.swiper-button-prev',
    //     // },
    // });

    // var swiper = new Swiper('.swiper-container', {
    //     spaceBetween: 30,
    //     // effect: "fade",
    //     autoplay: {
    //         delay: 2000, // Delay in milliseconds
    //         disableOnInteraction: true, // Keep autoplay active after user interaction
    //     },
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //     pagination: {
    //       el: ".swiper-pagination-main",
    //       clickable: true,
    //     },
    // });

    // var swiper = new Swiper('.swiper-container', {
    //     spaceBetween: 30,
    //     effect: 'fade', // Enable fade effect
    //     fadeEffect: {
    //       crossFade: true, // Smooth fade transitions
    //     },
    //     // autoplay: {
    //     //   delay: 2000, // Delay in milliseconds
    //     //   disableOnInteraction: false, // Keep autoplay active after user interaction
    //     // },
    //     loop: true, // Enable loop for continuous autoplay
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //     pagination: {
    //       el: '.swiper-pagination-main',
    //       clickable: true,
    //     },
    //   })

            
                // Execute on window resize

}




