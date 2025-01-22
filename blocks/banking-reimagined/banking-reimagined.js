import { createAemElement } from "../../scripts/aem.js";

export default function decorate(block){
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);
    let blockTitle, picture, title, description;
    let anchor = "";
    let slideHtml;
    const homeVideoParentDiv = createAemElement('div', ['homeVideo'], null, null);
    const parentSection = createAemElement('section', ['home_video_component'], {"data-component":"blade"}, null);
    let parentContainerDiv = createAemElement('div', ['container', 'vid_container_mob', 'mt-4'], null, null);
    let swiperWrapper = createAemElement('div', ['swiper-wrapper'], null, "swiper-wrapper-468156e587f7a5fa");
    let rowDiv = createAemElement('div', ['row'], null, null);
    let colDiv = createAemElement('div', ['col-12', 'aos-init', 'aos-animate'], {'data-aos' :'fade-up'}, null);
    let swiperContainerDiv = createAemElement('div', ['swiper-container', 'home_mob_video_slider', 'swiper-initialized', 'swiper-horizontal', 'swiper-backface-hidden'], null, null);
    let swiperNotificationDiv = `<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>`;
    let swiperNotificationWrapperDiv = document.createElement('div');
    swiperNotificationWrapperDiv.innerHTML = swiperNotificationDiv;

    let headingDiv = createAemElement('div', ['heading', 'mb-4'], null, null);
    let footerTitle="";

    rowDiv.appendChild(colDiv);
    colDiv.appendChild(swiperContainerDiv);
    colDiv.appendChild(swiperNotificationWrapperDiv.querySelector('.swiper-notification'));

    [...container.children].forEach((row,r)=>{

        if(r==0){
            blockTitle = row.querySelector('h4');
            blockTitle.classList.add('text-bold', 'text-primary', 'mb-0');
            headingDiv.appendChild(blockTitle);
        } else if (r==container.children.length-1){
            footerTitle = row.querySelector('p').textContent.trim();
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

                                ${picture.outerHTML}
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

    let footerHtml = `    <div class="row mb-4 justify-content-end">
    <div class="col-6">
       <div class="press-link mt-5 text-right">
          <a href="/in/en/personal/innovation.html" class="link text-primary">${footerTitle}<span class="btn-inner--icon"><i class="far fa-angle-right"></i></span></a>
       </div>
    </div>
 </div>`;

    const modalHtml = getModalVideo();
    const videoCards = getVideoCards();
    const scriptTags = getScriptTags();

    let footerHtmlWrapper = document.createElement('div');
    footerHtmlWrapper.innerHTML = footerHtml;

    parentContainerDiv.appendChild(headingDiv);
    parentContainerDiv.appendChild(rowDiv);
    parentContainerDiv.appendChild(footerHtmlWrapper.querySelector('.row'));

    parentSection.appendChild(videoCards);
    parentSection.appendChild(modalHtml);
    parentSection.appendChild(parentContainerDiv);

    homeVideoParentDiv.appendChild(parentSection);
    // homeVideoParentDiv.appendChild(scriptTags);
    homeVideoParentDiv.innerHTML += scriptTags;
    block.appendChild(homeVideoParentDiv);

    console.log(homeVideoParentDiv);

    func();

    callSwiper();
}

function getModalVideo(){
    const modalHtml =  `<div class="modal modal-fluid fade modal_video" id="modal_video" tabindex="-1" role="dialog" aria-labelledby="modal_1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
               
                        <a href="#" class="close" data-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24" style="
                            width: 40px;
                            height: 40px;
                        "><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path></svg></a>
               
                <div class="modal-body">
    
                        <iframe id="ytplayer_vid" width="100%" height="630" src="https://www.youtube.com/embed/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
    
                </div>
            </div>
        </div>
    </div>`;
    const modalWrapper = document.createElement('div');
    modalWrapper.innerHTML = modalHtml;
    return modalWrapper.querySelector('.modal');
}

function getVideoCards(){
    const videocomponentHtml = `<div class="vid_container_desktop">
    
             <div id="LZ" class="LZ">
    
                <div><svg xmlns="http://www.w3.org/2000/svg" *="" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol viewBox="0
                         0 24 24" id="arrow-left" xmlns="http://www.w3.org/2000/svg"><path d="M7.818
                          11.01h12.185c.55 0 .997.443.997.99 0 .547-.447.99-.997.99H7.818l4.851
                          4.819a.986.986 0 0 1 0 1.4 1.002 1.002 0 0 1-1.41 0L4 12l7.259-7.21a1.002
                          1.002 0 0 1 1.41 0 .986.986 0 0 1 0 1.401L7.82 11.01z"></path></symbol><symbol viewBox="0 0 24 24" id="arrow-right" xmlns="http://www.w3.org/2000/svg"><path d="M17.182 11.01H4.997A.994.994 0 0 0 4 12c0 .547.447.99.997.99h12.185l-4.852
                          4.82a.986.986 0 0 0 0 1.4 1 1 0 0 0 1.41 0L21 12l-7.259-7.21a1.002 1.002 0 0
                          0-1.41 0 .986.986 0 0 0 0 1.401l4.85 4.818z"></path></symbol>
                          <symbol viewBox="0 0 60 60" id="circle" xmlns="http://www.w3.org/2000/svg"><circle fill="transparent" cx="30" cy="30" r="29"></circle></symbol><symbol viewBox="0 0 24 24" id="close" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M2.808 19.778l16.97-16.97 1.414 1.414-16.97
                           16.97z"></path><path d="M4.222 2.808l16.97 16.97-1.414 1.414-16.97-16.97z"></path></g></symbol><symbol viewBox="0 0
                         24 24" id="play" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18.752 12.832l-9.197 6.132A1 1 0 0 1 8 18.13V5.87a1 1 0 0 1
                          1.555-.833l9.197 6.132a1 1 0 0 1 0 1.664z"></path></symbol></svg></div>
             </div>
             <section class="names-collection js-floating-title-box js-cards-slider shsiv js-should-scroll-into-viewport scrolled_into_viewport" data-cards-type="normal">
                <div class="container">
                   <div class="heading mb-5 mt-bankre">
                      <h4 class="text-bold text-primary">Banking. Reimagined.</h4>
                   </div>
                </div>
                <div class="floating-layer-2 js-floating-layer">
                   <div class="cards js-cards" style="width: 767px;">
    
                      <div class="arr back2first js-back2first" style="display: none;">
                         <svg class="icon">
                            <use xlink:href="#arrow-right"></use>
                         </svg>
                      </div>
                      
                         <div class="card smaller js-card active expand open" vimeo-id="eIbW6vu3RMI" style="width: 360px; height: 253px; transform: translateX(128px);">
                            <div class="visual js-visual with-video" style="width: 360px; height: 253px;">
                               <div class="img">
                                  <video style="width: 100%; height: auto" class="youtubeVideo" data-link="https://www.youtube.com/watch?v=eIbW6vu3RMI" preload="metadata" muted="" loop="" poster="/content/dam/indusind-platform-images/home/desktop-img/Salary-AC.jpg">
                                     <source src="https://www.youtube.com/watch?v=eIbW6vu3RMI" type="video/mp4">
                                  </video>
    
                               </div>
                               <div class="arrow js-arrow">
                                  <svg class="circle-border">
                                     <use xlink:href="#circle"></use>
                                  </svg>
                                  <svg class="play">
                                     <use xlink:href="#play"></use>
                                  </svg>
                                  <svg class="arr">
                                     <use xlink:href="#arrow-right"></use>
                                  </svg>
                               </div>
                            </div>
    
                            <div class="content js-content" style="width: 360px; height: 253px;">
                               <div class="content-box">
    
                                  <div class="title">
                                     <h5 class="h5 mb-2 text-bold text-primary"> Make INDIE your Salary Account </h5>
                                  </div>
    
    
    
                                  <p class="text">Say goodbye to your boring salary account &amp; upgrade to a better way to bank with INDIE by IndusInd Bank. Enjoy better savings, better returns, better rewards program, better financial security, and much more.
                                  </p>
                                  <div class="row align-items-center mt-3">
                                     <div class="col-12">
                                        <a href="https://savings.indie.indusind.com/mobile?utm_source=IndusIndWeb&amp;utm_medium=home_page&amp;utm_campaign=video-section" class="btn py-2 px-3 btn-sm btn-outline-light text-uppercase mr-3">Open INDIE Savings Account</a>
                                        
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      
                         <div class="card smaller js-card" vimeo-id="NudF1K0FSKE" style="width: 360px; height: 253px; transform: translateX(925px);">
                            <div class="visual js-visual with-video" style="width: 360px; height: 253px;">
                               <div class="img">
                                  <video style="width: 100%; height: auto" class="youtubeVideo" data-link="https://www.youtube.com/watch?v=NudF1K0FSKE" preload="metadata" muted="" loop="" poster="/content/dam/indusind-platform-images/home/desktop-img/Website-thumbnail-Image-Updated.jpg">
                                     <source src="https://www.youtube.com/watch?v=NudF1K0FSKE" type="video/mp4">
                                  </video>
    
                               </div>
                               <div class="arrow js-arrow">
                                  <svg class="circle-border">
                                     <use xlink:href="#circle"></use>
                                  </svg>
                                  <svg class="play">
                                     <use xlink:href="#play"></use>
                                  </svg>
                                  <svg class="arr">
                                     <use xlink:href="#arrow-right"></use>
                                  </svg>
                               </div>
                            </div>
    
                            <div class="content js-content" style="width: 360px; height: 253px;">
                               <div class="content-box">
    
                                  <div class="title">
                                     <h5 class="h5 mb-2 text-bold text-primary"> Savings Account ho toh aisa! </h5>
                                  </div>
    
    
    
                                  <p class="text">With a bouquet of innovative features and exciting offers, we assure you of a journey that will always be smooth, convenient and rewarding. Come experience a Savings account like no other!
                                  </p>
                                  <div class="row align-items-center mt-3">
                                     <div class="col-12">
                                        
                                        <a href="https://myaccount.indusind.com/savingsaccount/index.aspx?utm_code=z_mktgcamp&amp;utm_source=website&amp;utm_medium=Sid-Video&amp;utm_campaign=SavingsAccountHoTohAisa" class="btn py-2 px-3 btn-sm btn-outline-light text-uppercase">Apply Now</a>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      
                         <div class="card smaller js-card" vimeo-id="8QIyqBf091w" style="width: 360px; height: 253px; transform: translateX(1362px);">
                            <div class="visual js-visual with-video" style="width: 360px; height: 253px;">
                               <div class="img">
                                  <video style="width: 100%; height: auto" class="youtubeVideo" data-link="https://www.youtube.com/watch?v=8QIyqBf091w&amp;rel=0" preload="metadata" muted="" loop="" poster="/content/dam/indusind-platform-images/home/desktop-img/indusDirect-hm.jpg">
                                     <source src="https://www.youtube.com/watch?v=8QIyqBf091w&amp;rel=0" type="video/mp4">
                                  </video>
    
                               </div>
                               <div class="arrow js-arrow">
                                  <svg class="circle-border">
                                     <use xlink:href="#circle"></use>
                                  </svg>
                                  <svg class="play">
                                     <use xlink:href="#play"></use>
                                  </svg>
                                  <svg class="arr">
                                     <use xlink:href="#arrow-right"></use>
                                  </svg>
                               </div>
                            </div>
    
                            <div class="content js-content" style="width: 360px; height: 253px;">
                               <div class="content-box">
    
                                  <div class="title">
                                     <h5 class="h5 mb-2 text-bold text-primary"> #Corporate Banking </h5>
                                  </div>
    
    
    
                                  <p class="text">Manage your balances, authorise your payments, and even view your trade transactions on the go with IndusDirect our Corporate Mobile Banking App.
                                  </p>
                                  <div class="row align-items-center mt-3">
                                     <div class="col-12">
                                        
                                        
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      
                         <div class="card smaller js-card" vimeo-id="yneR1sXOCYs" style="width: 360px; height: 253px; transform: translateX(1799px);">
                            <div class="visual js-visual with-video" style="width: 360px; height: 253px;">
                               <div class="img">
                                  <video style="width: 100%; height: auto" class="youtubeVideo" data-link="https://www.youtube.com/watch?v=yneR1sXOCYs" preload="metadata" muted="" loop="" poster="/content/dam/indusind-platform-images/home/desktop-img/video_thumb03.jpg">
                                     <source src="https://www.youtube.com/watch?v=yneR1sXOCYs" type="video/mp4">
                                  </video>
    
                               </div>
                               <div class="arrow js-arrow">
                                  <svg class="circle-border">
                                     <use xlink:href="#circle"></use>
                                  </svg>
                                  <svg class="play">
                                     <use xlink:href="#play"></use>
                                  </svg>
                                  <svg class="arr">
                                     <use xlink:href="#arrow-right"></use>
                                  </svg>
                               </div>
                            </div>
    
                            <div class="content js-content" style="width: 360px; height: 253px;">
                               <div class="content-box">
    
                                  <div class="title">
                                     <h5 class="h5 mb-2 text-bold text-primary"> #PushTheButton </h5>
                                  </div>
    
    
    
                                  <p class="text">Choose from EMIs, reward points or credit without hassles. Presenting India’s first interactive credit card with buttons, IndusInd Bank Nexxt Credit Card.
                                  </p>
                                  <div class="row align-items-center mt-3">
                                     <div class="col-12">
                                        
                                        <a href="https://induseasycredit.indusind.com/customer/credit-card/new-lead?utm_source=nextt&amp;utm_medium=hpcarousal&amp;utm_campaign=CC-Microsite&amp;gclid=1&amp;utm_content=13" class="btn py-2 px-3 btn-sm btn-outline-light text-uppercase">Apply Now</a>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      
                         <div class="card smaller js-card" vimeo-id="P8fdNmRudUY" style="width: 360px; height: 253px; transform: translateX(2236px);">
                            <div class="visual js-visual with-video" style="width: 360px; height: 253px;">
                               <div class="img">
                                  <video style="width: 100%; height: auto" class="youtubeVideo" data-link="https://youtu.be/P8fdNmRudUY&amp;rel=0" preload="metadata" muted="" loop="" poster="/content/dam/indusind-platform-images/home/desktop-img/Finish-Line-02-hm-pg-640x360px.jpg">
                                     <source src="https://youtu.be/P8fdNmRudUY&amp;rel=0" type="video/mp4">
                                  </video>
    
                               </div>
                               <div class="arrow js-arrow">
                                  <svg class="circle-border">
                                     <use xlink:href="#circle"></use>
                                  </svg>
                                  <svg class="play">
                                     <use xlink:href="#play"></use>
                                  </svg>
                                  <svg class="arr">
                                     <use xlink:href="#arrow-right"></use>
                                  </svg>
                               </div>
                            </div>
    
                            <div class="content js-content" style="width: 360px; height: 253px;">
                               <div class="content-box">
    
                                  <div class="title">
                                     <h5 class="h5 mb-2 text-bold text-primary"> #Finish Line </h5>
                                  </div>
    
    
    
                                  <p class="text">Watch the most bankable moments in Indian sporting history with Saurav Ghosal in the Finish Line presented by IndusInd Bank 
                                  </p>
                                  <div class="row align-items-center mt-3">
                                     <div class="col-12">
                                        <a href="https://www.indusind.com/in/en/personal/disclaimer-finish-line-webseries.html?utm_source=ifs&amp;utm_medium=banner&amp;utm_campaign=BaselineVentures" class="btn py-2 px-3 btn-sm btn-outline-light text-uppercase mr-3">Know more</a>
                                        
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      
    
                   </div>
                   <ul class="dots js-dots">
                      <li class="dot one active">
                         <div class="bullet"></div>
                         <div class="number d-none">1</div>
                         <svg class="circle-border  d-none">
                            <use xlink:href="#circle"></use>
                         </svg>
                         <svg class="circle-timer js-circle-timer  d-none" style="stroke-dashoffset: 190px;">
                            <use xlink:href="#circle"></use>
                         </svg>
                      </li>
    
                   
                      <li class="dot ">
                         <div class="bullet"></div>
                         <div class="number d-none">2</div>
                         <svg class="circle-border  d-none">
                            <use xlink:href="#circle"></use>
                         </svg>
                         <svg class="circle-timer js-circle-timer  d-none">
                            <use xlink:href="#circle"></use>
                         </svg>
                      </li>
    
                   
                      <li class="dot ">
                         <div class="bullet"></div>
                         <div class="number d-none">3</div>
                         <svg class="circle-border  d-none">
                            <use xlink:href="#circle"></use>
                         </svg>
                         <svg class="circle-timer js-circle-timer  d-none">
                            <use xlink:href="#circle"></use>
                         </svg>
                      </li>
    
                   
                      <li class="dot ">
                         <div class="bullet"></div>
                         <div class="number d-none">4</div>
                         <svg class="circle-border  d-none">
                            <use xlink:href="#circle"></use>
                         </svg>
                         <svg class="circle-timer js-circle-timer  d-none">
                            <use xlink:href="#circle"></use>
                         </svg>
                      </li>
    
                   
                      <li class="dot ">
                         <div class="bullet"></div>
                         <div class="number d-none">5</div>
                         <svg class="circle-border  d-none">
                            <use xlink:href="#circle"></use>
                         </svg>
                         <svg class="circle-timer js-circle-timer  d-none">
                            <use xlink:href="#circle"></use>
                         </svg>
                      </li>
    
                   </ul>
                </div>
    
                <div class="text-center">
                   <a href="/in/en/personal/innovation.html" class="link_view normal-text">View All</a>
                </div>
    
             </section>
          </div>`;

    const videoCardWrapper = document.createElement('div');
    videoCardWrapper.innerHTML = videocomponentHtml;
    return videoCardWrapper.querySelector('.vid_container_desktop');
}

function getScriptTags(){
    const scriptHtml = `<script type="application/ld+json">
    { "@context": "http://schema.org/",
      "@type": "VideoObject",
      
      "name": "Make INDIE your Salary Account",
      "description": "Say goodbye to your boring salary account &amp; upgrade to a better way to bank with INDIE by IndusInd Bank. Enjoy better savings, better returns, better rewards program, better financial security, and much more.",
      "thumbnailUrl": "https://www.indusind.com/content/dam/indusind-platform-images/home/desktop-img/Salary-AC.jpg",
      "uploadDate": "2023-11-17",
      "duration": "PT80S",
      "embedUrl": "https://www.youtube.com/watch?v=eIbW6vu3RMI",
      "interactionCount": ""
    }</script>
    
    <script type="application/ld+json">
    { "@context": "http://schema.org/",
      "@type": "VideoObject",
      
      "name": "Savings Account ho toh aisa!",
      "description": "With a bouquet of innovative features and exciting offers, we assure you of a journey that will always be smooth, convenient and rewarding. Come experience a Savings account like no other!",
      "thumbnailUrl": "https://www.indusind.com/content/dam/indusind-platform-images/home/desktop-img/Website-thumbnail-Image-Updated.jpg",
      "uploadDate": "2023-02-28",
      "duration": "PT90S",
      "embedUrl": "https://www.youtube.com/watch?v=NudF1K0FSKE",
      "interactionCount": ""
    }</script>
    
    <script type="application/ld+json">
    { "@context": "http://schema.org/",
      "@type": "VideoObject",
      
      "name": "#Corporate Banking",
      "description": "Manage your balances, authorise your payments, and even view your trade transactions on the go with IndusDirect our Corporate Mobile Banking App.",
      "thumbnailUrl": "https://www.indusind.com/content/dam/indusind-platform-images/home/desktop-img/indusDirect-hm.jpg",
      "uploadDate": "2020-05-01",
      "duration": "PT38S",
      "embedUrl": "https://www.youtube.com/watch?v=8QIyqBf091w&amp;rel=0",
      "interactionCount": "421"
    }</script>
    
    <script type="application/ld+json">
    { "@context": "http://schema.org/",
      "@type": "VideoObject",
      
      "name": "#PushTheButton",
      "description": "Choose from EMIs, reward points or credit without hassles. Presenting India’s first interactive credit card with buttons, IndusInd Bank Nexxt Credit Card.",
      "thumbnailUrl": "https://www.indusind.com/content/dam/indusind-platform-images/home/desktop-img/video_thumb03.jpg",
      "uploadDate": "2018-11-13",
      "duration": "PT1M19S",
      "embedUrl": "https://www.youtube.com/watch?v=yneR1sXOCYs",
      "interactionCount": "400495"
    }</script>
    
    <script type="application/ld+json">
    { "@context": "http://schema.org/",
      "@type": "VideoObject",
      
      "name": "#Finish Line",
      "description": "Watch the most bankable moments in Indian sporting history with Saurav Ghosal in the Finish Line presented by IndusInd Bank ",
      "thumbnailUrl": "https://www.indusind.com/content/dam/indusind-platform-images/home/desktop-img/Finish-Line-02-hm-pg-640x360px.jpg",
      "uploadDate": "2020-08-28",
      "duration": "PT30S",
      "embedUrl": "https://youtu.be/P8fdNmRudUY&amp;rel=0",
      "interactionCount": "197"
    }</script>`;
    // const scriptWrapper = document.createElement('div');
    // scriptWrapper.innerHTML = scriptHtml;
    // return scriptWrapper.outerHTML;
    return scriptHtml;
}

function callSwiper(){
    console.log("Inside Banking carousel");
    var home_mob_video_slider = new Swiper('.home_mob_video_slider',{
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 1200,
    });
    
}

function func(e, t, n) {
    "use strict";
    var i = e("jquery")
      , o = e("../lib/MinimalClass")
      , r = e("./Dots")
      , s = e("./CardsCard")
      , a = e("./PxLine");
    t.exports = o.extend({
        __className: "CardsSlider",
        create: function() {
            var e = this;
            this.busy = !1,
            this.isUserInteracted = !1,
            this.autotimer_active = !1,
            this.user_interaction_timeout_timer = !1,
            this.current_item_locked = !1,
            this.cards_type = this.element.attr("data-cards-type"),
            this.cards = [],
            this.cards_order = [],
            this.cards_order_prev = [],
            this.cards_order_next = [],
            this.dots = !1,
            this.autotimer_active = !1,
            this.user_interaction_timeout_timer = !1,
            this.scrolled_into_viewport = !0,
            this.pos = -1,
            this.width = 0,
            this.height = 0,
            this.initial_position_x = 0,
            this.active_position_x = 0,
            this.centered = !1,
            this.carouseled = !1,
            this.card_min_width = 360,
            this.card_max_width = 480,
            this.min_screen_width = 1024,
            this.max_screen_width = 1920;
            var t = this.element.find(".js-px-line");
            t.length && new a({
                element: t,
                _prc_source: this.element
            }),
            this.cards_element = this.element.find(".js-cards"),
            this.cards_element.length && (this.scrolled_into_viewport = !this.element.hasClass("js-should-scroll-into-viewport"),
            this.cards_element.find(".js-card").each(function(t, n) {
                e.cards.push(new s({
                    _id: t,
                    element: n,
                    delegate: e
                }))
            }),
            this.dots_element = this.element.find(".js-dots"),
            this.dots_element.length && (this.dots = new r({
                element: this.dots_element,
                delegate: e,
                _onChange: function(t, n, i) {
                    e.switch_card(t, n, i)
                }
            })),
            this.back2first = this.cards_element.find(".js-back2first"),
            this.back2first.length && this.back2first.click(function(t) {
                e.userInteracted(),
                e.switch_card(e.dots.with_zero ? -1 : 0)
            })),
            window.app.add_resize(this),
            window.app.add_scroll(this)
        },
        next: function() {
            var e = this.pos + 1;
            e >= this.cards.length && (e = 0),
            this.switch_card(e, !0)
        },
        prev: function() {
            var e = this.pos - 1;
            e < 0 && (e = this.cards.length - 1),
            this.switch_card(e, !1)
        },
        switch_card: function(e, t, n, i) {
            return n && this.userInteracted(),
            !this.busy && this.pos != e && (void 0 === i && (i = !0),
            void 0 === t && (t = 0),
            e >= 0 ? this.element.find(".js-hide-text").addClass("hide") : this.element.find(".js-hide-text").removeClass("hide"),
            this.pos >= 0 && this.cards[this.pos].close(),
            this.dots.activate(e),
            this.repos(e, i),
            !0)
        },
        enableTimer: function(e) {
            this.dots && "function" == typeof this.dots.enableTimer && this.dots.enableTimer(e)
        },
        userInteracted: function() {
            if (!this.current_item_locked) {
                this.isUserInteracted = !0,
                this.stopTimer();
                var e = this;
                this.clearUserInteractionTimeout(),
                this.user_interaction_timeout_timer = setTimeout(function() {
                    e.isUserInteracted = !1,
                    e.startTimer()
                }, 5e3)
            }
        },
        clearUserInteractionTimeout: function() {
            this.user_interaction_timeout_timer && (clearTimeout(this.user_interaction_timeout_timer),
            this.user_interaction_timeout_timer = null)
        },
        scroll: function(e, t) {
            if (!this.scrolled_into_viewport) {
                var n = this.cards_element[0].getBoundingClientRect();
                window.app.wh - (n.top + n.height) > 0 && (this.element.addClass("scrolled_into_viewport"),
                this.scrolled_into_viewport = !0)
            }
            if (!this.current_item_locked) {
                var i = this.calc_element_scroll_prc(this.element[0]);
                i >= .4 && i <= .9 ? this.isUserInteracted || this.startTimer() : (this.clearUserInteractionTimeout(),
                this.isUserInteracted = !1,
                this.pauseTimer())
            }
        },
        startTimer: function() {
            this.autotimer_active || (this.enableTimer(!0),
            this.autotimer_active = !0)
        },
        pauseTimer: function() {
            this.autotimer_active && (this.enableTimer(!1),
            this.autotimer_active = !1)
        },
        stopTimer: function() {
            this.enableTimer(!1),
            this.autotimer_active = !1
        },
        lock_current_item: function(e) {
            e ? (this.current_item_locked = !0,
            this.stopTimer(),
            this.clearUserInteractionTimeout()) : (this.current_item_locked = !1,
            this.userInteracted())
        },
        recalc: function() {
            var e = i(window).width()
              , t = this.cards_element.height()
              , n = Math.round(e / 12 * 2)
              , o = Math.round(e * (e <= this.max_screen_width ? .1 : .05))
              , r = this.card_max_width - this.card_min_width
              , s = Math.min(1, (e - this.min_screen_width) / (this.max_screen_width - this.min_screen_width))
              , a = Math.max(this.card_min_width, Math.min(this.card_max_width, Math.round(this.card_min_width + r * s)))
              , l = Math.round(e - .66 * a)
              , c = (this.cards.length + 1) * (a + o)
              , u = e >= c
              , h = !u && e < c - (a + o + (a - (l - o)));
            this.card_width = a,
            this.card_padding = o,
            this.initial_position_x = l,
            this.active_position_x = n,
            this.carouseled != h && this.reorder(this.pos),
            this.centered = u,
            this.carouseled = h,
            this.width = e,
            this.height = t
        },
        resize: function(e, t) {
            this.recalc(),
            this.cards_element.css({
                width: this.width
            });
            var n = this;
            i(this.cards).each(function(e, t) {
                t.resize(n.card_width, n.height)
            }),
            this.repos(this.pos, !1),
            this.inited || (this.inited = !0,
            this.dots.with_zero || this.switch_card(0, null, null, !1))
        },
        reorder: function(e) {
            var t;
            for (this.cards_order = [],
            this.cards_order_prev = [],
            this.cards_order_next = [],
            t = 0; t < this.cards.length; t++)
                e > t ? this.cards_order_prev.push(t) : e < t && this.cards_order_next.push(t);
            for (this.cards_order_prev.reverse(),
            this.carouseled,
            t = 0; t < this.cards_order_prev.length; t++)
                this.cards_order.push(this.cards_order_prev[t]);
            for (e >= 0 && this.cards_order.push(e),
            t = 0; t < this.cards_order_next.length; t++)
                this.cards_order.push(this.cards_order_next[t])
        },
        repos: function(e, t) {
            var n = this
              , o = 0
              , r = this.card_width + this.card_padding;
            if (e < 0 && !t)
                o = this.initial_position_x,
                i(this.cards).each(function(e, t) {
                    t.setpos(o),
                    o += r
                }),
                this.pos = e;
            else {
                if (this.reorder(e),
                e >= this.cards.length - 1 ? this.back2first.css({
                    display: "block"
                }) : this.back2first.css({
                    display: "none"
                }),
                this.busy)
                    return;
                this.busy = !0;
                var s, a, l, c = t ? function(t) {
                    n.pos = e,
                    n.busy = !1
                }
                : null;
                for (o = this.active_position_x - r,
                s = 0; s < this.cards_order_prev.length; s++)
                    l = this.cards_order_prev[s],
                    (a = this.cards[l]).set_previous(!0),
                    a.deactivate(),
                    a.setpos(o, t),
                    o -= r;
                for (e >= 0 ? this.cards[e].activate(this.active_position_x, t, c) : setTimeout(c, 1e3),
                o = this.active_position_x + r + this.card_width,
                s = 0; s < this.cards_order_next.length; s++)
                    l = this.cards_order_next[s],
                    (a = this.cards[l]).set_previous(!1),
                    a.deactivate(),
                    a.setpos(o, t),
                    o += r;
                t || (n.pos = e,
                n.busy = !1)
            }
        }
    })
}
