import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

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
//  [...block.children].forEach((row, i) => {
//      if (i === 0) {
//        footerLinksContainer = row;
//      } else if (i === 1) {
//        officeDetailsContainer = row;
//      }
//      else if (i === 2) {
//        footerBottomContainer = row;
//      }
//  });

  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';

  decorateFooterLinks(footerLinksContainer);
  decorateOfficeDetails(officeDetailsContainer);
  decorateFooterBottom(footerBottomContainer);
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
}
