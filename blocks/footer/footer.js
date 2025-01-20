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
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  [...block.children].forEach((row) => {
    const footerLinksContainer = row.children[1];
    const officeDetailsContainer = row.children[2];
    const footerBottomContainer = row.children[3];
  });

  decorateFooterLinks(footerLinksContainer);
  decorateOfficeDetails(officeDetailsContainer);
  decorateFooterBottom(footerBottomContainer);
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
}
