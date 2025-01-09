export default function decorate(block){
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);

    [...container.children].forEach((row,r)=>{
        
        if(r==0 || r==1 || r==2){
            console.log(row);
            console.log(row.textContent.trim())
        }
    })
}