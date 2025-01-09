export default function decorate(block){
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);

    [...container.children].forEach((row,r)=>{
        
        if(r==0){
            [...row.children].forEach((col,c)=>{
                if(c==0){
                    const picture = col.querySelector('picture');
                    console.log(picture);
                } else{
                    [...col.children].forEach((child,i)=>{
                        console.log(child.textContent.trim())
                    })
                }
            })
        }
    })
}