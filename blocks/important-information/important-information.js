import { createAemElement } from "../../scripts/aem.js";

export default function decorate(block){
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);

    const sectionDiv = createAemElement('div', ['imp-info-wrap', 'pt-5', 'pb-5', 'border-top', 'border-primary'], null, null);
    const containerDiv = createAemElement('div', ['container', 'overflow-hidden'], null, null);
    const headingDiv = createAemElement('div', ['heading', 'mb-4'], null, null);

    sectionDiv.appendChild(containerDiv);
    containerDiv.appendChild(headingDiv);

    let title;

    const rowDiv = createAemElement('div', ['row'], null, null);
    const colDiv = createAemElement('div', ['col-sm-12'], null, null);
    const swiperContainerDiv = createAemElement('div', ['swiper-container', 'carrow', 'important-info-slider', 'swiper-initialized', 'swiper-horizontal'], null, null);
    rowDiv.appendChild(colDiv);
    colDiv.appendChild(swiperContainerDiv);

    containerDiv.appendChild(rowDiv);

    let swiperDiv = createAemElement('div', ['swiper-wrapper'], {'aria-live' : "off"}, 'swiper-wrapper-db85bf952d24b7df');
    [...container.children].forEach((row,r)=>{
        const slideDiv = createAemElement('div', ['swiper-slide'], null, null);
        if(r==0){
            title = row.querySelector('h4');
            title.classList.add('text-bold', 'text-primary');
            headingDiv.appendChild(title);
        } 
        else{
            const h6 = createAemElement('h6', ['mb-3'], null, null);
            const anchor = createAemElement('a', ['comment-copy'], {'href': 'javascript:;'}, null);
            const text = row.querySelector('h6').textContent.trim();
            if(text.length>150){
                const words = text.split(' ');
                const part1 = words.slice(0,20);
                const part2 = words.slice(20);
                const tooltipSpan = `<span class="elipsis text-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="${part2}">  ...Read more</span></a></h6>`;
                const tooltipWrapper = document.createElement('div');
                tooltipWrapper.innerHTML = tooltipSpan;
                anchor.appendChild(document.createTextNode(part1.join(' ')));
                anchor.appendChild(tooltipWrapper.querySelector('span'));
            } else{
                anchor.textContent = text;
            }
            h6.appendChild(anchor);
            const linkInfo = `<h6 class="linkinfo">
                                        <a>
                                            <small></small><span><img alt="" class="iconinfo img-saturate"></span>
                                        </a>
                                    </h6>`;
            const linkInfoWrapper = document.createElement('div');
            linkInfoWrapper.innerHTML = linkInfo;
            
            slideDiv.appendChild(h6);
            slideDiv.appendChild(linkInfoWrapper.querySelector('h6'));
            swiperDiv.appendChild(slideDiv);
        }
    })
    const paginationDiv = createPaginationDiv();
    swiperContainerDiv.appendChild(swiperDiv);
    swiperContainerDiv.appendChild(paginationDiv);

    console.log(sectionDiv);
}

function createPaginationDiv(){
    const paginationHtml = `<div class="swiper-pagination swiper-pagination-info swiper-pagination-bullets swiper-pagination-horizontal">
                                <span class="swiper-pagination-bullet swiper-pagination-bullet-active" aria-current="true"></span>
                            </div>
                            <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-3ca1081122fdaac1d" aria-disabled="false"></div>
                            <div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-3ca1081122fdaac1d" aria-disabled="false"></div>
                            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>`;
    const paginationWrapperDiv = document.createElement('div');
    paginationWrapperDiv.innerHTML = paginationHtml;
    return document.createRange().createContextualFragment(paginationHtml);
}