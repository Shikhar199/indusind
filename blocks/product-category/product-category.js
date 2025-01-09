import { createAemElement } from "../../scripts/aem";

export default function decorate(block){
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);

    [...container.children].forEach((row,r)=>{
        
        if(r==0){
            let customDiv;
            let spanText;
            let inputEle;
            let label;
            [...row.children].forEach((col,c)=>{
                if(c==0){
                    const picture = col.querySelector('picture');
                    console.log(picture);
                } else{
                    customDiv = document.createElement('div');
                    customDiv.classList.add('custom-control', 'custom-checkbox');

                    const inputId = "compare_check"+row;

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

                    [...col.children].forEach((child,i)=>{
                        if(i==0){
                            spanText.textContent = child.textContent.trim();
                        } else if(i==1){
                            inputEle.setAttribute('data-title', child.textContent.trim());
                        } else if(i==2){
                            inputEle.setAttribute('data-page-path', child.textContent.trim());
                        } else if(i==3){
                            inputEle.setAttribute('data-thumbnail', child.textContent.trim());
                        }
                    })
                }
            })
            customDiv.appendChild(spanText);
            customDiv.appendChild(inputEle);
            customDiv.appendChild(label);
            console.log(customDiv);

        } else if(r==1){
            const cardBody = document.createElementNS('div');
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
                        list = child.querySelector('ul');
                    }
                })
            })
            cardBody.appendChild(h5);
            cardBody.appendChild(para);
            cardBody.appendChild(h6);
            cardBody.appendChild(list);
            console.log(cardBody);

        } else if(r==2){
            let cardFooter = document.createElement('div');
            cardFooter.classList.add('card-footer', 'border-0', 'pt-0');

            let alignItemsDiv = document.createElement('div');
            alignItemsDiv.classList('d-flex', 'justify-content-between', 'align-items-center');

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
            console.log(cardFooter);
        }
    })
}