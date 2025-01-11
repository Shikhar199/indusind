import { createAemElement } from "../../scripts/aem.js";

export default function decorate(block){
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);

    const sectionDiv = createAemElement('section', ['trending_topics', 'bg-white', 'page-section', 'is-active'], {'data-component':'blade', 'data-nav-waypoint':'Blogs'}, 'mf_learn');
    const containerDiv = createAemElement('div', ['container', 'px-50px'], null, null);
    const headingDiv = createAemElement('div', ['heading', 'mb-4', 'pt-5'], null, null);

    const rowDiv = createAemElement('div', ['row'], null, null);
    const colDiv = createAemElement('div', ['col-sm-12'], null, null);
    const swiperContainerDiv = createAemElement('div', ['swiper-container', 'carrow', 'trending-topics-slider', 'py-5', 'swiper-initialized', 'swiper-horizontal', 'swiper-free-mode', 'swiper-backface-hidden'], null, null);

    sectionDiv.appendChild(containerDiv);
    containerDiv.appendChild(headingDiv);
    containerDiv.appendChild(rowDiv);
    rowDiv.appendChild(colDiv);
    colDiv.appendChild(swiperContainerDiv);


    const swiperWrapperDiv = createAemElement('div', ['swiper-wrapper'], null, 'swiper-wrapper-7a2ee8ee17749ddf');
    let swiperDiv;

    [...container.children].forEach((row,r)=>{

        if(r==0){
            const blogHeading = row.querySelector('h2');
            blogHeading.classList.add('text-bold', 'text-primary');
            headingDiv.appendChild(blogHeading);

        } else if(r%3==1){
            swiperDiv = createAemElement('div', ['swiper-slide'], {'role':'group'}, null);

            const blogTitle = row.querySelector('p').textContent.trim();
            const blogPicture = row.querySelector('picture');   
            
            const h5 = createAemElement('h5', ['my-3', 'text-bold', 'text-burgundy'], null, null);
            h5.textContent = blogTitle;

            swiperDiv.appendChild(blogPicture);
            swiperDiv.appendChild(h5);

        } else if(r%3==2){
            const blogDescription = row.querySelector('p');
            blogDescription.classList.add('card-text');
            swiperDiv.appendChild(blogDescription);

        } else if(r%3==0){
            const targetAttribute = '#bod_profile'+((r/3));
            const linkPTag = document.createElement('p');
            const linkText = row.querySelector('p').textContent.trim();
            const link = row.querySelector('a');
            link.textContent = linkText;
            link.setAttribute('data-target', targetAttribute);
            link.classList.add('link_view');
            linkPTag.appendChild(link);
            swiperDiv.appendChild(linkPTag);
        }
        if(swiperDiv){
            swiperWrapperDiv.appendChild(swiperDiv);
        }
    })
    swiperContainerDiv.appendChild(swiperWrapperDiv);

    // Create pagination

    const swiperPaginationDiv = createAemElement('div', ['swiper-pagination', 'swiper-pagination-info', 'swiper-pagination-bullets', 'swiper-pagination-horizontal'], null, null);
    const paginationBullet1 = createAemElement('span', ['swiper-pagination-bullet', 'swiper-pagination-bullet-active'], {"aria-current":"true"}, null);
    const paginationBullet2 = createAemElement('span', ['swiper-pagination-bullet'], null,null); 

    swiperPaginationDiv.appendChild(paginationBullet1);
    swiperPaginationDiv.appendChild(paginationBullet2);

    const swiperBtnNext = createAemElement('div', ['swiper-button-next'], {'tabindex':'0',  'role':'button', 'aria-label':'Next slide', 'aria-controls':'swiper-wrapper-7a2ee8ee17749ddf', 'aria-disabled':'false'}, null);
    const swiperBtnPrev = createAemElement('div', ['swiper-button-prev', 'swiper-button-disabled'], {'tabindex':'-1', 'role':'button', 'aria-label':'Previous slide', 'aria-controls':'swiper-wrapper-7a2ee8ee17749ddf', 'aria-disabled':'true'}, null);
    const swiperNotification = createAemElement('span', ['swiper-notification'], {'aria-live':'assertive', 'aria-atomic':'true'}, null);

    swiperContainerDiv.appendChild(swiperPaginationDiv);
    swiperContainerDiv.appendChild(swiperBtnNext);
    swiperContainerDiv.appendChild(swiperBtnPrev);
    swiperContainerDiv.appendChild(swiperNotification);

    console.log(sectionDiv);
    block.appendChild(sectionDiv);
}


document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        // Core parameters
        slidesPerView: 3,         // Number of slides visible at a time
        spaceBetween: 10,         // Space between slides (px)
        loop: false,               // Enable loop
        pagination: {
          el: '.swiper-pagination', // Enable pagination
          clickable: true,          // Allow clicking on pagination bullets
        },
        navigation: {
          nextEl: '.swiper-button-next', // Next button
          prevEl: '.swiper-button-prev', // Previous button
        },
        breakpoints: { // Responsive breakpoints
          340: {        // When the screen width is >= 340px
            slidesPerView: 2,
          },
          768: { // When the screen width is >= 768px
            slidesPerView: 3,
          }
        //   1024: { // When the screen width is >= 1024px
        //     slidesPerView: 3,
        //   },
        },
      });
})