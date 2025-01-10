import { createAemElement } from "../../scripts/aem.js";

export default function decorate(block){
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);
    
    let sectionDiv;
    let cardParentDiv;

    const tabContentDiv = document.createElement('div');
    tabContentDiv.classList.add('tab-content', 'tab-content-number');
    tabContentDiv.setAttribute('data-number',6);

    const tabPaneDiv = createAemElement('div', ['tab-pane', 'fade', 'active', 'show',  'position-relative'], {'role':'tabpanel', 'aria-labelledby':'card-recommended-tab'}, "card-recommended");
 
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    tabContentDiv.appendChild(tabPaneDiv);
    tabPaneDiv.appendChild(rowDiv);

    [...container.children].forEach((row,r)=>{


        if(r%3==0){
            let customDiv;
            let spanText;
            let inputEle;
            let label;
            let picture;

            sectionDiv = document.createElement('div');
            sectionDiv.classList.add('col-md-6', 'col-lg-4');
    
            cardParentDiv = document.createElement('div');
            cardParentDiv.classList.add('card', 'card-equal-h', 'h-100', 'chkboxcard', 'card-border-color', 'mt-2', 'mb-3');
    
            sectionDiv.appendChild(cardParentDiv);

            const cardHeaderDiv = document.createElement('div');
            cardHeaderDiv.classList.add('card-header', 'cat-card-header');

            [...row.children].forEach((col,c)=>{
                if(c==0){
                    picture = col.querySelector('picture');
                } else{
                    customDiv = document.createElement('div');
                    customDiv.classList.add('custom-control', 'custom-checkbox');

                    const inputId = "compare_check"+r;

                    spanText = document.createElement('span');
                    spanText.classList.add('addtoCompareTxt');

                    inputEle = document.createElement('input');
                    inputEle.type = 'checkbox';
                    inputEle.classList.add('custom-control-input', 'cardSelectCheck', 'cardsLabel');
                    inputEle.id = inputId;
                    inputEle.setAttribute('value', r)

                    label = document.createElement('label');
                    label.classList.add('custom-control-label');
                    label.setAttribute('for', inputId);

                    const tagDiv = document.createElement('div');
                    tagDiv.classList.add('tag');

                    [...col.children].forEach((child,i)=>{
                        if(col.children.length==5){
                            if(i==0&&child.textContent.startsWith('tag')){
                                tagDiv.textContent = child.textContent.substring(4);
                            } else if(i==1){
                                spanText.textContent = child.textContent.trim();
                            } else if(i==2){
                                inputEle.setAttribute('data-title', child.textContent.trim());
                            } else if(i==3){
                                inputEle.setAttribute('data-page-path', child.textContent.trim());
                            } else if(i==4){
                                inputEle.setAttribute('data-product-type', child.textContent.trim());
                            }
                        } else{
                            if(i==0){
                                spanText.textContent = child.textContent.trim();
                            } else if(i==1){
                                inputEle.setAttribute('data-title', child.textContent.trim());
                            } else if(i==2){
                                inputEle.setAttribute('data-page-path', child.textContent.trim());
                            } else if(i==3){
                                inputEle.setAttribute('data-product-type', child.textContent.trim());
                            }
                        }
                    })
                    if(tagDiv.textContent.trim().length>0){
                        cardHeaderDiv.appendChild(tagDiv);
                    } 
                }
            })
            customDiv.appendChild(spanText);
            customDiv.appendChild(inputEle);
            customDiv.appendChild(label);
            cardHeaderDiv.appendChild(customDiv);
            cardHeaderDiv.appendChild(picture);
            cardParentDiv.appendChild(cardHeaderDiv);

        } else if(r%3==1){
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const h5 = document.createElement('h5');
            h5.classList.add('h5', 'mb-1', 'text-bold');

            const anchor = document.createElement('a');
            anchor.classList.add('card-title', 'text-primary');

            h5.appendChild(anchor);

            const para = document.createElement('p');
            para.classList.add('card-text', 'mt-2', 'three-lines');
            const span = document.createElement('span');
            span.classList.add('ellip');
            para.appendChild(span);

            const h6 = document.createElement('h6');
            let list;

            [...row.children].forEach((col,c)=>{
                
                    [...col.children].forEach((child,i)=>{
                        if(i==0){
                            anchor.textContent = child.textContent.trim();
                        } else if(i==1){
                            anchor.setAttribute('href', child.textContent.trim());
                        } else if(i==2){
                            span.textContent = child.textContent.trim();
                        } else if(i==3){
                            h6.textContent = child.textContent.trim();
                        } else{
                            list = col.querySelector('ul');
                            list.classList.add('list-arrow-bullet', 'pl-0', 'ml-0');
                        }
                    })
                
            })
            cardBody.appendChild(h5);
            cardBody.appendChild(para);
            cardBody.appendChild(h6);
            cardBody.appendChild(list);
            cardParentDiv.appendChild(cardBody);

        } else if(r%3==2){
            let cardFooter = document.createElement('div');
            cardFooter.classList.add('card-footer', 'border-0', 'pt-0');

            let alignItemsDiv = document.createElement('div');
            alignItemsDiv.classList.add('d-flex', 'justify-content-between', 'align-items-center');

            let anchor = document.createElement('a');
            anchor.classList.add('btn', 'py-2', 'btn-sm', 'btn-primary', 'card-btn', 'text-uppercase', 'btn-primary-option');

            let anchor2 = document.createElement('a');
            anchor2.classList.add('link_view', 'normal-text');

            [...row.children].forEach((col,c)=>{
                [...col.children].forEach((child,i)=>{
                    if(i==0){
                        anchor.href = child.textContent.trim();
                    } else if(i==1){
                        anchor.textContent = child.textContent.trim();
                    } else if(i==2){
                        anchor2.href = child.textContent.trim();
                    } else{
                        anchor2.textContent = child.textContent.trim();
                    }
                })
            })

            cardFooter.appendChild(alignItemsDiv);
            alignItemsDiv.appendChild(anchor);
            alignItemsDiv.appendChild(anchor2);
            cardParentDiv.appendChild(cardFooter)

        }

        rowDiv.appendChild(sectionDiv);
    })

    block.appendChild(tabContentDiv);
    console.log(tabContentDiv);
}