import { createAemElement } from "../../scripts/aem.js";

export default function decorate(block){
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);
    let blockTitle, picture, title, description;
    let anchor = "";
    let slideHtml;
    let parentContainerDiv = createAemElement('div', ['container', 'vid_container_mob', 'mt-4'], null, null);
    let swiperWrapper = createAemElement('div', ['swiper-wrapper'], null, "swiper-wrapper-468156e587f7a5fa");
    let rowDiv = createAemElement('div', ['row'], null, null);
    let colDiv = createAemElement('div', ['col-12', 'aos-init', 'aos-animate'], {'data-aos' :'fade-up'}, null);
    let swiperContainerDiv = createAemElement('div', ['swiper-container', 'home_mob_video_slider', 'swiper-initialized', 'swiper-horizontal', 'swiper-backface-hidden'], null, null);
    let swiperNotificationDiv = `<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>`;
    let swiperNotificationWrapperDiv = document.createElement('div');
    swiperNotificationWrapperDiv.innerHTML = swiperNotificationDiv;

    let footerHtml = `    <div class="row mb-4 justify-content-end">
       <div class="col-6">
          <div class="press-link mt-5 text-right">
             <a href="/in/en/personal/innovation.html" class="link text-primary">View All <span class="btn-inner--icon"><i class="far fa-angle-right"></i></span></a>
          </div>
       </div>
    </div>`;

    let footerHtmlWrapper = document.createElement('div');
    footerHtmlWrapper.innerHTML = footerHtml;

    let headingDiv = createAemElement('div', ['heading', 'mb-4'], null, null);

    rowDiv.appendChild(colDiv);
    colDiv.appendChild(swiperContainerDiv);
    colDiv.appendChild(swiperNotificationWrapperDiv.querySelector('.swiper-notification'));
    [...container.children].forEach((row,r)=>{
        if(r==0){
            blockTitle = row.querySelector('h4');
            blockTitle.classList.add('text-bold', 'text-primary', 'mb-0');
            headingDiv.appendChild(blockTitle);
        } else if (r==container.children.length-1){
            console.log(row.querySelector('p').textContent.trim());
        } else if(r%3==1){
            picture = row.querySelector('picture');
            title =  row.querySelector('p').textContent.trim();
        } else if(r%3==2){
            description = row.querySelector('p').textContent.trim();
        } else if(r%3==0){
            anchor="";
            if(row.querySelector('a')!==null){
                anchor = row.querySelector('a');
                anchor.classList.add('link_view', 'normal-text');
                anchor.setAttribute('target', '_blank');
            }
            slideHtml = `<div class="swiper-slide swiper-slide-next" data-swiper-slide-index="4" role="group" aria-label="5 / 5" style="width: 510px; margin-right: 30px;">
                      <!-- product card -->
                      <div class="card rounded-0 border-0">

                         <div class="post-body pb-3">

                            <figure class="position-relative">

                                ${picture}
                               <a href="https://youtu.be/P8fdNmRudUY&amp;rel=0" class="btn btn-xl btn-white btn-play btn-icon-only btn-zoom--hover rounded-circle shadow-sm position-absolute m-auto top-0 right-0 bottom-0 left-0" data-fancybox="">
                                  <span class="btn-inner--icon"><i class="fas fa-play"></i></span>
                               </a>
                            </figure>

                            <div class="card-content">
                               <h5 class="h5 my-3 text-bold">
                                  <span class="card-title text-primary mb-0">${title}</span>
                               </h5>
                               <div class="lead-paragraph">
                                  <p class="">${description} </p>
                               </div>

                               <div class="card-btns">
                                <div class="row">
                                <div class="col-6">
                               ${anchor}
                               </div>
                               <div class="col-6 text-right">
                               
                               </div>
                                </div>
                               </div>
                            </div>

                         </div>
                      </div>
                      <!-- End -->
                   </div>`;
                   let slideWrapper = document.createElement('div');
                   slideWrapper.innerHTML = slideHtml;
                   swiperWrapper.appendChild(slideWrapper.querySelector('.swiper-slide'));
        }
    })
    let paginationHtml = `<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 4" aria-current="true"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5"></span></div>`;
    let paginationWrapper = document.createElement('div');
    paginationWrapper.innerHTML = paginationHtml;
    swiperContainerDiv.appendChild(swiperWrapper);
    swiperContainerDiv.appendChild(paginationWrapper);

    parentContainerDiv.appendChild(headingDiv);
    parentContainerDiv.appendChild(rowDiv);
    parentContainerDiv.appendChild(footerHtmlWrapper.querySelector('.row'));

    console.log(parentContainerDiv);
}