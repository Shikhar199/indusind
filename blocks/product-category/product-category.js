import { createAemElement } from "../../scripts/aem.js";

export default function decorate(block){
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);
    let tabsHeadings = [];
    let breakPts = [];
    let totalDivs = container.children.length;
    let allDivs = Array.from(container.children);
    const tabPanelAllDiv = createAemElement('div', ['tab-pane', 'fade', 'position-relative'], {'role':'tabpanel', 'aria-labelledby':'card-all'}, "card-all");

    const tabContentDiv = document.createElement('div');
    tabContentDiv.classList.add('tab-content', 'tab-content-number');
    tabContentDiv.setAttribute('data-number',6);

    console.log(allDivs);
    [...container.children].forEach((row,r)=>{

        if(row.querySelector('div').children.length===1 && row.querySelector('div').firstElementChild.tagName==="P"){
            breakPts.push(r);
        }
    })
    
    for(let i=0; i<breakPts.length; i++){
        const idx = breakPts[i];
        tabsHeadings.push(allDivs[idx].querySelector('p').textContent.trim());
    }

    for(let i=0; i<breakPts.length-1; i++){
        let tabPanelDiv;
        const start = breakPts[i];
        const end = breakPts[i + 1];
        const rowDiv = createAemElement('div', ['row'], null, null);
            
        tabPanelDiv = createAemElement('div', ['tab-pane', 'fade', 'active', 'show',  'position-relative'], {'role':'tabpanel', 'aria-labelledby':'card-recommended-tab'}, "card-recommended");
        const slicedDivs = allDivs.slice(start, end); // Extract divs within the range
        const cards = createCards(slicedDivs, rowDiv, tabPanelDiv, tabPanelAllDiv);
        console.log(cards);
        tabContentDiv.appendChild(cards);
    }

    // Handle the remaining divs after the last breakpoint
    if (breakPts[breakPts.length - 1] < totalDivs) {
        let tabPanelDiv = createAemElement('div', ['tab-pane', 'fade'], {'role':'tabpanel', 'aria-labelledby':'card-tab-2'}, "card-tab-2");
        const rowDiv = createAemElement('div', ['row'], null, null);
        const slicedDivs = allDivs.slice(breakPts[breakPts.length - 1], totalDivs);
        const cards = createCards(slicedDivs, rowDiv, tabPanelDiv, tabPanelAllDiv);
        console.log(cards);
        tabContentDiv.appendChild(cards);
    }

    tabContentDiv.appendChild(tabPanelAllDiv);

    const tabContainerDiv = document.createElement('div');
    tabContainerDiv.classList.add('tabs-container');

    const tabHtml = `<ul class="nav tabs-withdot twotabsonly flex-column flex-sm-row justify-content-center mb-4" role="tablist">
        <li class="nav-item" id="recm">
            <a class="nav-link tabs-navs  mr-3 active show" id="card-recommended-tab" data-toggle="tab" href="#card-recommended" role="tab" aria-controls="card-recommended" aria-selected="true">${tabsHeadings[0]}</a>
        </li>
        <li class="nav-item" id="tab2">
            <a class="nav-link tabs-navs  ml-3 " id="card-tab2-tab" data-toggle="tab" href="#card-tab2" role="tab" aria-controls="card-recommended" aria-selected="true">${tabsHeadings[1]}</a>
        </li>  
        <li class="nav-item " id="allCards">
            <a class="nav-link tabs-navs ml-3 " id="card-all-tab" data-toggle="tab" href="#card-all" role="tab" aria-controls="card-all" aria-selected="false">All</a>
        </li>
    </ul>`

    const tabWrapper = document.createElement('div');
    tabWrapper.innerHTML = tabHtml;

    tabContainerDiv.appendChild(tabWrapper.querySelector('ul'));
    tabContainerDiv.appendChild(tabContentDiv);

    const productCategoryDiv = createAemElement('div', ['productCategoryGeneric'], null, null);

    const parentSection = createAemElement('section', ['card_select_wrap', 'bg-grey', 'product-category-section', 'is-active'], {'data-component': 'blade', 'data-category-path':'/content/indusind-corporate/en/business/accounts/current-account', 'data-alertmsg':'Maximum 3 Cards can be selected'}, null);

    const parentContainer = createAemElement('div', ['container', 'px-50px', 'bg-white', 'pt-2'], null, null);

    const headingDiv = createAemElement('div', ['heading', 'mb-4', 'text-center'], null, null);

    productCategoryDiv.appendChild(parentSection);
    parentSection.appendChild(parentContainer);
    parentContainer.appendChild(headingDiv);
    parentContainer.appendChild(tabContainerDiv);

    const scriptDiv = getScript();
    const compareModel = createCompareModel();
    productCategoryDiv.appendChild(scriptDiv);
    productCategoryDiv.appendChild(compareModel);
    block.appendChild(productCategoryDiv);
    console.log(productCategoryDiv);

    const tabLinks = document.querySelectorAll('.nav-link.tabs-navs');
    console.log(tabLinks);
    tabLinks.forEach((link) => {
        link.addEventListener('click', handleTabClick);
    });
}

const handleTabClick = (event) => {
    // Get the clicked tab link
    const clickedTab = event.target;
    const targetId = clickedTab.getAttribute('href').replace('#', '');
    console.log(targetId);
    // Select all tab content divs
    const tabContents = document.querySelectorAll('.tab-content > div');
    
    // tabContents.forEach((tabContent) => {
    //     // Check if the tabContent's ID matches the clicked tab's target ID
    //     if (tabContent.id === targetId) {
    //         // Add active, show, and position-relative classes
    //         tabContent.classList.add('active', 'show', 'position-relative');
    //     } else {
    //         // Remove these classes from non-target tab contents
    //         tabContent.classList.remove('active', 'show', 'position-relative');
    //     }
    // });

    //     // Ensure only the clicked tab link is active
    //     tabLinks.forEach((link) => {
    //         if (link === clickedTab) {
    //             link.classList.add('active', 'show');
    //         } else {
    //             link.classList.remove('active', 'show');
    //         }
    //     });

}

function createCards(divs, rowDiv, tabPanelDiv, tabPanelAllDiv){
    console.log("Divs hi Divs");
    console.log(divs);
    let cardType, typeIdx;
    let img,tag;
    let cardTitle, accountType, compareText;
    let pagePath, ptagText;
    let cardHtml, cardId;
    let cardBodyTitleTag, cardh6Title, unorderedList;
    let applyNowLink, knowMoreLink;
    let id = 1;
    let wrapper;
    cardId = "compare_check"+id;

    for(let i=0; i< divs.length; i++){
        if(i==0){
            cardType = divs[i].querySelector('p').textContent.trim();
        }
        else if(i%3===1){
            console.log(divs[i]);
            img = divs[i].querySelector('picture').outerHTML;
            let ptags = divs[i].querySelectorAll('p');
            if(ptags.length===4){
                console.log("Inside IF");
                console.log(ptags);
                tag = ptags[0].textContent.trim().substring(4);
                compareText = ptags[1].textContent.trim();
                cardTitle = ptags[2].querySelector('a').textContent.trim();
                pagePath = ptags[2].querySelector('a').getAttribute('href').substring(25);
                accountType = ptags[3].textContent.trim();
            } else if(ptags.length===3){
                console.log("Inside else");
                console.log(ptags);
                compareText = ptags[0].textContent.trim();
                cardTitle = ptags[1].querySelector('a').textContent.trim();
                pagePath = ptags[1].querySelector('a').getAttribute('href').substring(25);
                accountType = ptags[2].textContent.trim();
            }
            id++;
        } 
        else if(i%3===2){
            cardBodyTitleTag = divs[i].querySelector('h5');
            cardBodyTitleTag.classList.add('h5', 'mb-1', 'text-bold');
            cardBodyTitleTag.querySelector('a').classList.add('card-title', 'text-primary');
            ptagText = divs[i].querySelector('p').textContent.trim();
            cardh6Title = divs[i].querySelector('h6');
            unorderedList = divs[i].querySelector('ul');
            unorderedList.classList.add('list-arrow-bullet', 'pl-0', 'ml-0');
        }
        else if(i%3==0){
            let footerLinks = divs[i].querySelectorAll('p');
            applyNowLink = footerLinks[0].querySelector('a');
            knowMoreLink = footerLinks[1].querySelector('a');
            applyNowLink.classList.add('btn', 'py-2', 'btn-sm', 'btn-primary', 'card-btn', 'text-uppercase', 'btn-primary-option');
            knowMoreLink.classList.add('link_view', 'normal-text');
            cardHtml = `<div class="col-md-6 col-lg-4" data-cardType="${cardType} all">
                            <div class="card card-equal-h h-100 chkboxcard card-border-color mt-2 mb-3">
                            <div class="card-header cat-card-header">
               
                                <div class="custom-control custom-checkbox">
                                    <span class="addtoCompareTxt">${compareText}</span>
                                    <input type="checkbox" class="custom-control-input cardSelectCheck cardsLabel" data-title="${cardTitle}" data-thumbnail="/content/dam/indusind-platform-images/banner-images/indus-select-current-business/Indus-Business_One_Tile.webp" data-page-path="/in/en/business/accounts/current-account/indus-one-business-account.html" data-product-type="${accountType}" id="${cardId}" value="${id}">
                                    <label class="custom-control-label" for="${cardId}"></label>
                                </div>
                                ${img}
                            </div>
                            <div class="card-body">
                                ${cardBodyTitleTag.outerHTML}
                                <p class="card-text mt-2 three-lines"><span class="ellip">${ptagText}</span></span></p>
                                ${cardh6Title.outerHTML}
                                ${unorderedList.outerHTML}
                            </div>
                            <div class="card-footer border-0 pt-0">
                                <div class="d-flex justify-content-between align-items-center">
                                    ${applyNowLink.outerHTML}
                                    ${knowMoreLink.outerHTML}
                                </div>
                            </div>
                        </div>
                    </div>`;

                if(tag!==null){
                    let tagWrapper = document.createElement('div');
                    let tagHtml = `<div class="tag">${tag}</div>`;
                    tagWrapper.innerHTML = tagHtml;
                    let tagElement = tagWrapper.querySelector('.tag');   
                    // cardHtml.innerHTML = tagHtml + cardHtml.innerHTML; 
                    // cardHeader.insertBefore(tagHtml, cardHeader.firstElementChild); 
                    wrapper = document.createElement('div');
                    wrapper.innerHTML = cardHtml;
                
                    // Locate the card-header element
                    const cardHeader = wrapper.querySelector('.card-header');
                    if (cardHeader) {
                        // Add the tagElement as the first child of card-header
                        cardHeader.insertBefore(tagElement, cardHeader.firstChild);
                    }
                }
            let rowElement = wrapper.querySelector('.col-md-6');    
            console.log(rowElement);
            rowDiv.appendChild(rowElement);
            console.log(rowDiv);
            tabPanelDiv.appendChild(rowDiv);
            tabPanelAllDiv.appendChild(rowElement.cloneNode(true));
            // tabPanelAllDiv.appendChild(rowDiv);        
        }
    }
    return tabPanelDiv;
}

function getScript(){
    // Create a script element
    const scriptElement = document.createElement("script");

    // Set attributes for the script element
    scriptElement.id = "modal-cards-template";
    scriptElement.type = "text/x-handlebars-template";

    // Add the content of the Handlebars template
    scriptElement.innerHTML = `
    {{#each objects}}
    <div class="col-md-6 col-6 col-lg-3">
        <div class="card border-0">
            <a class="close cardclose" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
                    <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
                </svg>
            </a>
            <figure>
                <img src="{{thumbnail}}" class="rounded" alt="">
            </figure>
            <h5>{{title}}</h5>
        </div>
    </div>
    {{/each}}
    <div class="col-md-6 col-6 col-lg-3 d-lg-flex d-md-none d-none" id="addCard">
        <div class="card h-100 border-0">
            <a class="add_card_btn" href="javascript://" class="w-100 h-100 text-center">Click on product checkbox above to compare</a>
        </div>
    </div>
    <div class="col-md-12 col-lg-3 text-center">
        <div class="card d-inline-flex h-100 border-0 justify-content-center" id="compareNow">
            <a href="/content/indusind-corporate/en/business/accounts/product-compare-current-account.html" class="btn btn-primary w-auto">Compare</a>
        </div>
    </div>
    `;

    return scriptElement;

}

function createCompareModel(){
    // Create the main container div
    const compareModal = document.createElement("div");
    compareModal.className = "compare_modal w-100";

    // Create the inner container div
    const container = document.createElement("div");
    container.className = "container position-relative";

    // Create the close button
    const closeButton = document.createElement("a");
    closeButton.className = "close";
    closeButton.id = "mainClose";
    closeButton.href = "#";

    // Create the SVG inside the close button
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("version", "1");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.style.width = "40px";
    svg.style.height = "40px";

    // Create the path for the SVG
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z");

    // Append the path to the SVG
    svg.appendChild(path);

    // Append the SVG to the close button
    closeButton.appendChild(svg);

    // Create the row div
    const row = document.createElement("div");
    row.className = "row popCards";

    // Append the close button and row to the container
    container.appendChild(closeButton);
    container.appendChild(row);

    // Append the container to the main modal div
    compareModal.appendChild(container);

    return compareModal;

}