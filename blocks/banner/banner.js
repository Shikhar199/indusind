import { createAemElement } from "../../scripts/aem.js";

export default function decorate(block){
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);
}