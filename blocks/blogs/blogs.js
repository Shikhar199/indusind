import { createAemElement } from "../../scripts/aem.js";

export default function decorate(block){
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);

    const sectionDiv = createAemElement('div', ['trending_topics', 'bg-white', 'page-section', 'is-active'], {'data-component':'blade', 'data-nav-waypoint':'Blogs'}, 'mf_learn');
    const containerDiv = createAemElement('div', ['container', 'px-50px'], null, null);
    const headingDiv = createAemElement('div', ['heading', 'mb-4', 'pt-5'], null, null);

    const rowDiv = createAemElement('div', ['row'], null, null);
    const colDiv = createAemElement('div', ['col-sm-12'], null, null);
    const swiperContainerDiv = createAemElement('div', ['swiper-container', 'carrow', 'trending-topics-slider', 'py-5', 'swiper-initialized', 'swiper-horizontal', 'swiper-free-mode', 'swiper-backface-hidden'], null, null);

    sectionDiv.appendChild(containerDiv);
    container.appendChild(headingDiv);
    containerDiv.appendChild(rowDiv);
    rowDiv.appendChild(colDiv);
    colDiv.appendChild(swiperContainerDiv);

    const swiperWrapperDiv = createAemElement('div', ['swiper-wrapper'], null, 'swiper-wrapper-7a2ee8ee17749ddf');
    let swiperDiv;

    [...container.children].forEach((row,r)=>{

        if(r==0){
            const blogHeading = row.querySelector('h2');
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
            const targetAttribute = '#bod_profile'+((r%3)-1);
            const linkPTag = document.createElement('p');
            const linkText = row.querySelector('p').textContent.trim();
            const link = row.querySelector('a');
            link.textContent = linkText;
            link.setAttribute('data-target', targetAttribute);
            link.classList.add('link_view');
            linkPTag.appendChild(link);
            swiperDiv.appendChild(linkPTag);
        }
        swiperWrapperDiv.appendChild(swiperDiv);
    })
    swiperContainerDiv.appendChild(swiperWrapperDiv);
    console.log(sectionDiv);
    block.appendChild(sectionDiv);
}