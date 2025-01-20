import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

function createCustomElement(tagname, className) {
  const element = document.createElement(tagname);
  if (className) {
    element.classList.add(className);
  }
  return element;
}

function decorateFooterLinks(footerLinksContainer) {
  console.log(footerLinksContainer);
}

function decorateOfficeDetails(officeDetailsContainer) {
  console.log(officeDetailsContainer);
}

function decorateFooterBottom(footerBottomContainer) {
  console.log(footerBottomContainer);
}

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';

  const footerLinksContainer = block.children[0];
  const officeDetailsContainer = block.children[1];
  const footerBottomContainer = block.children[2];

  //const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';

  decorateFooterLinks(footerLinksContainer);
  decorateOfficeDetails(officeDetailsContainer);
  decorateFooterBottom(footerBottomContainer);
  const footer = document.createElement('div');
//  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
}
