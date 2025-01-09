export default function decorate(block){
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);

    [...container.children].forEach((row,r)=>{
        
        if(r==0){
            [...row.children].forEach((col,c)=>{
                const picture = col.textContent.trim();
                console.log(picture);
                [...col.children].forEach((child,i)=>{
                    console.log(child.textContent.trim())
                })
            })
        }
    })
}