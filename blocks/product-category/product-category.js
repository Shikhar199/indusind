import { createAemElement } from "../../scripts/aem.js";

export default function decorate(block){
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);
    let cardType;

    [...container.children].forEach((row,r)=>{
        let img,tag;
        let cardTitle, accountType, compareText;
        let pagePath;
        let cardHtml;
        let cardId = "compare_check"+(r+1);
        if(row.querySelector('div').children.length===1 && row.querySelector('div').firstElementChild.tagName==="P"){
            cardType = row.querySelector('div').firstElementChild.textContent.trim();
        }

        if(r%3==1 && row.querySelectorAll('div').length>1){
        // if(r==1){
            img = row.querySelector('picture').outerHTML;
            let ptags = row.lastElementChild.querySelectorAll('p');
            if(ptags.length===4){
                console.log("Inside IF");
                console.log(ptags);
                tag = ptags[0].textContent.trim().substring(4);
                compareText = ptags[1].textContent.trim();
                cardTitle = ptags[2].querySelector('a').textContent.trim();
                pagePath = ptags[2].querySelector('a').getAttribute('href').substring(24);
                accountType = ptags[3].textContent.trim();
            } else if(ptags.length===3){
                console.log("Inside else");
                console.log(ptags);
                compareText = ptags[0].textContent.trim();
                cardTitle = ptags[1].querySelector('a').textContent.trim();
                pagePath = ptags[1].querySelector('a').getAttribute('href').substring(24);
                accountType = ptags[2].textContent.trim();
            }
        }

        // if(row.querySelector('div').children.length!==1 && row.querySelector('div').firstElementChild.tagName!=="P"){
        if(r!==0 && r%3==0 && row.querySelectorAll('div').length>1){
            console.log(img);
            console.log(tag);
            console.log(cardTitle)
            console.log(accountType) 
            console.log(compareText);
            console.log(pagePath);
            cardHtml = `<div class="col-md-6 col-lg-4">
                <div class="card card-equal-h h-100 chkboxcard card-border-color mt-2 mb-3">
                <div class="card-header cat-card-header">
                           
                <div class="custom-control custom-checkbox">
                    <span class="addtoCompareTxt">${compareText}</span>
                    <input type="checkbox" class="custom-control-input cardSelectCheck cardsLabel" data-title="${cardTitle}" data-thumbnail="/content/dam/indusind-platform-images/banner-images/indus-select-current-business/Indus-Business_One_Tile.webp" data-page-path="/in/en/business/accounts/current-account/indus-one-business-account.html" data-product-type="${accountType}" id="${cardId}" value="${r+1}">
                    <label class="custom-control-label" for="${cardId}"></label>
                </div>
                ${img}
                </div>
                <div class="card-body">
                    <h5 class=" h5 mb-1 text-bold">
                        <a href="/in/en/business/accounts/current-account/indus-one-business-account.html" class="card-title text-primary">Indus One Business Account</a>
                    </h5>
                    <p class="card-text mt-2 three-lines"><span class="ellip">Indus One Business account revolutionize the way you manage business finances. Whether you <span class="ellip-line">are a start-up or an established business, our flexible banking solutions are designed with dynamic approach that evolves alongside your business needs. </span></span></p>
                    <h6>Key Features and Benefits</h6>
                    <ul class="list-arrow-bullet pl-0 ml-0">
                        <li>Zero non-maintenance charges.</li>
                        <li>Experience flexibility with 5 tiers benefits to meet evolving business needs.</li>
                        <li>Higher Cash and Non-Cash Transactions.</li>
                        <li>Lower Charges on Trade &amp; Forex, POS and CMS services.</li>

                    </ul>
                </div>
                <div class="card-footer border-0 pt-0">
                    <div class="d-flex justify-content-between align-items-center">
                        <a href="https://www.indusind.com/in/en/personal/customer-enquiry.html?product=indus-one-business-account&amp;utm_source=IBL&amp;utm_medium=website&amp;utm_campaign=Apply-Now" class="btn py-2 btn-sm btn-primary card-btn text-uppercase  btn-primary-option">
                        Apply Now</a> 
                        <a href="/in/en/business/accounts/current-account/indus-one-business-account.html" class="link_view normal-text">Know More </a>
                    </div>
                </div>
            </div>
        </div>`;

        console.log(cardHtml);
        }
    })

    // const productCategoryDiv = createAemElement('div', ['productCategoryGeneric'], null, null);

    // const parentSection = createAemElement('section', ['card_select_wrap', 'bg-grey', 'product-category-section', 'is-active'], {'data-component': 'blade', 'data-category-path':'/content/indusind-corporate/en/business/accounts/current-account', 'data-alertmsg':'Maximum 3 Cards can be selected'}, null);

    // const parentContainer = createAemElement('div', ['container', 'px-50px', 'bg-white', 'pt-2'], null, null);

    // const headingDiv = createAemElement('div', ['heading', 'mb-4', 'text-center'], null, null);

    // productCategoryDiv.appendChild(parentSection);
    // parentSection.appendChild(parentContainer);
    // parentContainer.appendChild(headingDiv);

    // const tabContainerDiv = document.createElement('div');
    // tabContainerDiv.classList.add('tabs-container');

    // const unorderedList = createAemElement('ul', ['nav', 'tabs-withdot', 'twotabsonly', 'flex-column', 'flex-sm-row', 'justify-content-center', 'mb-4'], {'role':'tablist'}, null);

    // const li1 = document.createElement('li');
    // li1.classList.add('nav-item');
    // li1.setAttribute('id','recm');
    // const a1 = createAemElement('a', ['nav-link', 'tabs-navs', 'mr-3', 'active', 'show'], {'data-toggle':'tab', 'href': '#card-recommended', 'role': 'tab', 'aria-controls': 'card-recommended', 'aria-selected':'true'}, "card-recommended-tab");
    // a1.textContent = "Recommended";
    // li1.appendChild(a1);

    // const li2 = document.createElement('li');
    // li2.classList.add('nav-item');
    // li2.setAttribute('id','tab2');
    // const a2 = createAemElement('a', ['nav-link', 'tabs-navs', 'ml-3'], {'data-toggle':'tab', 'href': '#card-tab2', 'role': 'tab', 'aria-controls': 'card-recommended', 'aria-selected':'true'}, "card-tab2-tab");
    // a2.textContent = "Digital";
    // li2.appendChild(a2);

    // const li3 = document.createElement('li');
    // li3.classList.add('nav-item');
    // li3.setAttribute('id','allCards');
    // const a3 = createAemElement('a', ['nav-link', 'tabs-navs', 'ml-3'], {'data-toggle':'tab', 'href': '#card-all', 'role': 'tab', 'aria-controls': 'card-all', 'aria-selected':'false'}, "card-all-tab");
    // a3.textContent = "All";
    // li3.appendChild(a3);

    // unorderedList.appendChild(li1);
    // unorderedList.appendChild(li2);
    // unorderedList.appendChild(li3);

    // tabContainerDiv.appendChild(unorderedList);

    // let sectionDiv;
    // let cardParentDiv;

    // const tabContentDiv = document.createElement('div');
    // tabContentDiv.classList.add('tab-content', 'tab-content-number');
    // tabContentDiv.setAttribute('data-number',6);

    // const tabPaneDiv = createAemElement('div', ['tab-pane', 'fade', 'active', 'show',  'position-relative'], {'role':'tabpanel', 'aria-labelledby':'card-recommended-tab'}, "card-recommended");
 
    // const rowDiv = document.createElement('div');
    // rowDiv.classList.add('row');

    // tabContentDiv.appendChild(tabPaneDiv);
    // tabPaneDiv.appendChild(rowDiv);

    // [...container.children].forEach((row,r)=>{


    //     if(r%3==0){
    //         let customDiv;
    //         let spanText;
    //         let inputEle;
    //         let label;
    //         let picture;

    //         sectionDiv = document.createElement('div');
    //         sectionDiv.classList.add('col-md-6', 'col-lg-4');
    
    //         cardParentDiv = document.createElement('div');
    //         cardParentDiv.classList.add('card', 'card-equal-h', 'h-100', 'chkboxcard', 'card-border-color', 'mt-2', 'mb-3');
    
    //         sectionDiv.appendChild(cardParentDiv);

    //         const cardHeaderDiv = document.createElement('div');
    //         cardHeaderDiv.classList.add('card-header', 'cat-card-header');

    //         [...row.children].forEach((col,c)=>{
    //             if(c==0){
    //                 picture = col.querySelector('picture');
    //             } else{
    //                 customDiv = document.createElement('div');
    //                 customDiv.classList.add('custom-control', 'custom-checkbox');

    //                 const inputId = "compare_check"+(r+1);

    //                 spanText = document.createElement('span');
    //                 spanText.classList.add('addtoCompareTxt');

    //                 inputEle = document.createElement('input');
    //                 inputEle.type = 'checkbox';
    //                 inputEle.classList.add('custom-control-input', 'cardSelectCheck', 'cardsLabel');
    //                 inputEle.id = inputId;
    //                 inputEle.setAttribute('value', r+1)

    //                 label = document.createElement('label');
    //                 label.classList.add('custom-control-label');
    //                 label.setAttribute('for', inputId);

    //                 const tagDiv = document.createElement('div');
    //                 tagDiv.classList.add('tag');

    //                 [...col.children].forEach((child,i)=>{
    //                     if(col.children.length==5){
    //                         if(i==0&&child.textContent.startsWith('tag')){
    //                             tagDiv.textContent = child.textContent.substring(4);
    //                         } else if(i==1){
    //                             spanText.textContent = child.textContent.trim();
    //                         } else if(i==2){
    //                             inputEle.setAttribute('data-title', child.textContent.trim());
    //                         } else if(i==3){
    //                             inputEle.setAttribute('data-page-path', child.textContent.trim());
    //                         } else if(i==4){
    //                             inputEle.setAttribute('data-product-type', child.textContent.trim());
    //                         }
    //                     } else{
    //                         if(i==0){
    //                             spanText.textContent = child.textContent.trim();
    //                         } else if(i==1){
    //                             inputEle.setAttribute('data-title', child.textContent.trim());
    //                         } else if(i==2){
    //                             inputEle.setAttribute('data-page-path', child.textContent.trim());
    //                         } else if(i==3){
    //                             inputEle.setAttribute('data-product-type', child.textContent.trim());
    //                         }
    //                     }
    //                 })
    //                 if(tagDiv.textContent.trim().length>0){
    //                     cardHeaderDiv.appendChild(tagDiv);
    //                 } 
    //             }
    //         })
    //         customDiv.appendChild(spanText);
    //         customDiv.appendChild(inputEle);
    //         customDiv.appendChild(label);
    //         cardHeaderDiv.appendChild(customDiv);
    //         cardHeaderDiv.appendChild(picture);
    //         cardParentDiv.appendChild(cardHeaderDiv);

    //     } else if(r%3==1){
    //         const cardBody = document.createElement('div');
    //         cardBody.classList.add('card-body');

    //         const h5 = document.createElement('h5');
    //         h5.classList.add('h5', 'mb-1', 'text-bold');

    //         const anchor = document.createElement('a');
    //         anchor.classList.add('card-title', 'text-primary');

    //         h5.appendChild(anchor);

    //         const para = document.createElement('p');
    //         para.classList.add('card-text', 'mt-2', 'three-lines');
    //         const span = document.createElement('span');
    //         span.classList.add('ellip');
    //         para.appendChild(span);

    //         const h6 = document.createElement('h6');
    //         let list;

    //         [...row.children].forEach((col,c)=>{
                
    //                 [...col.children].forEach((child,i)=>{
    //                     if(i==0){
    //                         anchor.textContent = child.textContent.trim();
    //                     } else if(i==1){
    //                         anchor.setAttribute('href', child.textContent.trim());
    //                     } else if(i==2){
    //                         span.textContent = child.textContent.trim();
    //                     } else if(i==3){
    //                         h6.textContent = child.textContent.trim();
    //                     } else{
    //                         list = col.querySelector('ul');
    //                         list.classList.add('list-arrow-bullet', 'pl-0', 'ml-0');
    //                     }
    //                 })
                
    //         })
    //         cardBody.appendChild(h5);
    //         cardBody.appendChild(para);
    //         cardBody.appendChild(h6);
    //         cardBody.appendChild(list);
    //         cardParentDiv.appendChild(cardBody);

    //     } else if(r%3==2){
    //         let cardFooter = document.createElement('div');
    //         cardFooter.classList.add('card-footer', 'border-0', 'pt-0');

    //         let alignItemsDiv = document.createElement('div');
    //         alignItemsDiv.classList.add('d-flex', 'justify-content-between', 'align-items-center');

    //         let anchor = document.createElement('a');
    //         anchor.classList.add('btn', 'py-2', 'btn-sm', 'btn-primary', 'card-btn', 'text-uppercase', 'btn-primary-option');

    //         let anchor2 = document.createElement('a');
    //         anchor2.classList.add('link_view', 'normal-text');

    //         [...row.children].forEach((col,c)=>{
    //             [...col.children].forEach((child,i)=>{
    //                 if(i==0){
    //                     anchor.href = child.textContent.trim();
    //                 } else if(i==1){
    //                     anchor.textContent = child.textContent.trim();
    //                 } else if(i==2){
    //                     anchor2.href = child.textContent.trim();
    //                 } else{
    //                     anchor2.textContent = child.textContent.trim();
    //                 }
    //             })
    //         })

    //         cardFooter.appendChild(alignItemsDiv);
    //         alignItemsDiv.appendChild(anchor);
    //         alignItemsDiv.appendChild(anchor2);
    //         cardParentDiv.appendChild(cardFooter)

    //     }

    //     rowDiv.appendChild(sectionDiv);
    // })

    // tabContainerDiv.appendChild(tabContentDiv);
    // parentContainer.appendChild(tabContainerDiv);
    // const scriptDiv = getScript();
    // const compareModel = createCompareModel();
    // productCategoryDiv.appendChild(scriptDiv);
    // productCategoryDiv.appendChild(compareModel);
    // block.appendChild(productCategoryDiv);
    // console.log(productCategoryDiv);
}


// function getScript(){
//     // Create a script element
//     const scriptElement = document.createElement("script");

//     // Set attributes for the script element
//     scriptElement.id = "modal-cards-template";
//     scriptElement.type = "text/x-handlebars-template";

//     // Add the content of the Handlebars template
//     scriptElement.innerHTML = `
//     {{#each objects}}
//     <div class="col-md-6 col-6 col-lg-3">
//         <div class="card border-0">
//             <a class="close cardclose" href="#">
//                 <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
//                     <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
//                 </svg>
//             </a>
//             <figure>
//                 <img src="{{thumbnail}}" class="rounded" alt="">
//             </figure>
//             <h5>{{title}}</h5>
//         </div>
//     </div>
//     {{/each}}
//     <div class="col-md-6 col-6 col-lg-3 d-lg-flex d-md-none d-none" id="addCard">
//         <div class="card h-100 border-0">
//             <a class="add_card_btn" href="javascript://" class="w-100 h-100 text-center">Click on product checkbox above to compare</a>
//         </div>
//     </div>
//     <div class="col-md-12 col-lg-3 text-center">
//         <div class="card d-inline-flex h-100 border-0 justify-content-center" id="compareNow">
//             <a href="/content/indusind-corporate/en/business/accounts/product-compare-current-account.html" class="btn btn-primary w-auto">Compare</a>
//         </div>
//     </div>
//     `;

//     return scriptElement;

// }

// function createCompareModel(){
//     // Create the main container div
//     const compareModal = document.createElement("div");
//     compareModal.className = "compare_modal w-100";

//     // Create the inner container div
//     const container = document.createElement("div");
//     container.className = "container position-relative";

//     // Create the close button
//     const closeButton = document.createElement("a");
//     closeButton.className = "close";
//     closeButton.id = "mainClose";
//     closeButton.href = "#";

//     // Create the SVG inside the close button
//     const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
//     svg.setAttribute("version", "1");
//     svg.setAttribute("viewBox", "0 0 24 24");
//     svg.style.width = "40px";
//     svg.style.height = "40px";

//     // Create the path for the SVG
//     const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     path.setAttribute("d", "M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z");

//     // Append the path to the SVG
//     svg.appendChild(path);

//     // Append the SVG to the close button
//     closeButton.appendChild(svg);

//     // Create the row div
//     const row = document.createElement("div");
//     row.className = "row popCards";

//     // Append the close button and row to the container
//     container.appendChild(closeButton);
//     container.appendChild(row);

//     // Append the container to the main modal div
//     compareModal.appendChild(container);

//     return compareModal;

// }