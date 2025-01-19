import { createAemElement } from "../../scripts/aem.js";

export default function decorate(block){
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);

    let title;
    let swiperDiv = createAemElement('div', ['swiper-wrapper'], {'aria-live' : "off"}, 'swiper-wrapper-db85bf952d24b7df');
    [...container.children].forEach((row,r)=>{
        const slideDiv = createAemElement('div', ['swiper-slide'], null, null);
        if(r==0){
            title = row.querySelector('h4');
        } 
        else{
            const h6 = createAemElement('h6', ['mb-3'], null, null);
            const anchor = createAemElement('a', ['comment-copy'], {'href': 'javascript:;'});
            const text = row.querySelector('h6').textContent.trim();
            if(text.length>60){
                const words = text.split(' ');
                const part1 = words.slice(0,20);
                const part2 = words.slice(20);
                const tooltipSpan = `<span class="elipsis text-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="${part2}">  ...Read more</span></a></h6>`;
                anchor.appendChild(part1.join(' '));
                anchor.appendChild(tooltipSpan);
            } else{
                anchor.textContent = text;
            }
            h6.appendChild(anchor);
            const linkInfo = `<h6 class="linkinfo">
                                        <a>
                                            <small></small><span><img alt="" class="iconinfo img-saturate"></span>
                                        </a>
                                    </h6>`;
            
            slideDiv.appendChild(h6);
            slideDiv.appendChild(linkInfo);
        }
        swiperDiv.appendChild(slideDiv);
    })
    console.log(swiperDiv);
}