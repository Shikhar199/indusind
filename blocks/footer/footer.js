// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';

// /**
//  * loads and decorates the footer
//  * @param {Element} block The footer block element
//  */
// export default async function decorate(block) {
//   // load footer as fragment
//   const footerMeta = getMetadata('footer');
//   const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
//   const fragment = await loadFragment(footerPath);

//   // decorate footer DOM
//   block.textContent = '';
//   const footer = document.createElement('div');
//   while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

//   block.append(footer);
// }
import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

function createCustomElement(tagname, className) {
  const element = document.createElement(tagname);
  if (className) {
    element.className = className;
  }
  return element;
}

function decorateFooterLinks(footerLinksContainer) {
  console.log(footerLinksContainer);

  const containerDiv = createCustomElement("div", "container");
  const rowDiv = createCustomElement("div", "row");

  // Create columns
  [...footerLinksContainer.children].forEach((column, i) => {
    if (i < 5) {
      const columnDiv = createCustomElement("div", "col-lg col-md-12");
      const div2 = document.createElement("div");
      const listOfLinksDiv = createCustomElement("div", "list-of-links");
      listOfLinksDiv.id = "list-of-links-";

      const sourceDiv = column.querySelector("h6").parentElement;
      [...sourceDiv.children].forEach(child => listOfLinksDiv.append(child));

      //Set h6 elements' structure and attributes
      const h6Elements = listOfLinksDiv.querySelectorAll("h6");
      h6Elements.forEach(h6 => {
        h6.className = 'heading mb-lg-1 mb-0 border-bottom';
        h6.removeAttribute('id');
        if (h6.querySelector('a')) {
          // Do Nothing
        }
        else {
          const h6Span = createCustomElement("span", "device-drop-footer");

          const h6Text = h6.textContent;
          h6Span.textContent = h6Text;
          h6.textContent = "";
          const dataTargetValue = "#footer-" + h6Text.replace(/\s+/g, '-') + "-drop";

          h6Span.setAttribute("data-toggle", "collapse");
          h6Span.setAttribute("data-target", dataTargetValue);
          h6Span.setAttribute("aria-expanded", "true");
          h6Span.setAttribute("aria-controls", "otherproduct");

          h6.appendChild(h6Span);
        }
      });

      // Set ul elements' structure and attributes
      const ulElements = listOfLinksDiv.querySelectorAll("ul");
      ulElements.forEach(ul => {
        ul.className = "list-unstyled mb-lg-2 mb-0 mt-1 collapse show";
        const previousSpan = ul.previousElementSibling.querySelector('span');

        // Set the id of the <ul> to the modified textContent of the previous <span>
        if (previousSpan && previousSpan.tagName === 'SPAN') {
          ul.id = "footer-" + previousSpan.textContent.replace(/\s+/g, '-') + "-drop";
        }

        // Fetch all li items and set attributes
        const anchorListElements = ul.querySelectorAll("a");
        anchorListElements.forEach(a => {
          a.classList.add("deeplink");
          a.setAttribute("target", "_blank");
        });
      });

      div2.appendChild(listOfLinksDiv);
      columnDiv.appendChild(div2);
      rowDiv.appendChild(columnDiv);
    }
    else if (i === 5) {
      //Decorate 6th column
      const columnDiv = createCustomElement("div", "col-lg-3 col-md-12 ml-lg-auto ml-md-auto pt-lg-0 pt-3");

      //Decorate Email Subscription section
      const emailInputContainerDiv = document.createElement("div");
      emailInputContainerDiv.innerHTML = `
        <div class="newupdate mb-4">
          <input type="text" name="emailinput" placeholder="Enter E-mail for Update" class="rounded-left">
          <button class="btn btn-primary rounded-right subscribenewsletter recaptchadiv" data-sitekey="6LfFPr4UAAAAAMM_MFKk-QkT8aViwrHLRHGXmUfR" data-toggle="modal" data-target="#subscribenewsletter">Submit</button>
        </div>
      `;

      //Decorate Social Media section
      const socialLinksContainerDiv = document.createElement("div");
      const socialLinksDiv = createCustomElement("div", "social-links");
      socialLinksDiv.id = "social-links-";

      const sourceDiv = column.querySelector("h6").parentElement;
      const emailH5 = sourceDiv.querySelector("h5");
      //Replace the existing h5 with the Email Subscription section created above

      [...sourceDiv.children].forEach(child => socialLinksDiv.append(child));
      const socialMediaHeading = socialLinksDiv.querySelector("h6");
      socialMediaHeading.className = "heading mb-0 heading-follow";
      socialMediaHeading.id = "";

      const socialMediaList = socialLinksDiv.querySelector("ul");
      socialMediaList.className = "social";

      const socialMediaAnchorList = socialMediaList.querySelectorAll("a");
      socialMediaAnchorList.forEach(a => {
        a.setAttribute("target", "_blank");
      });

      const disclaimerPara = socialLinksDiv.querySelector("p");
      disclaimerPara.setAttribute('style', 'font-size: 12px; line-height: 14px;');

      // Decorate DICGC Icon and QR below

      // Append elements to create structure
      socialLinksDiv.appendChild(sourceDiv);
      socialLinksContainerDiv.appendChild(socialLinksDiv);

      columnDiv.appendChild(emailInputContainerDiv);
      columnDiv.appendChild(socialLinksContainerDiv);
      rowDiv.appendChild(columnDiv);

      console.log(rowDiv);

    }
  });

  containerDiv.appendChild(rowDiv);
  return containerDiv;
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

  let main;
  if(footerPath && footerPath.startsWith('/')){
      const resp = await fetch(`${footerPath}.plain.html`);
      if(resp.ok){
          main = document.createElement('main');
          main.innerHTML = await resp.text();
          console.log(main.innerHTML);
      }
      
  }
  console.log(main);
  console.log(main.querySelector('.footer').children[0]);
  console.log(main.querySelector('.footer').children[1]);
  console.log(main.querySelector('.footer').children[2]);
  const footerLinksContainer = main.querySelector('.footer').children[0];
  const officeDetailsContainer = main.querySelector('.footer').children[1];
  const footerBottomContainer = main.querySelector('.footer').children[2];

  //const fragment = await loadFragment(footerPath); //Commented because going in infinite loop

  // decorate footer DOM
//  block.textContent = ''; Commented because function running 2 times!

  //Create outermost footer element
  const footerDiv = createCustomElement("footer", "footer bg-primary pt-lg-4 pt-md-0 pt-sm-0 d-print-none");
  const containerDiv = decorateFooterLinks(footerLinksContainer);
  console.log(containerDiv);
  footerDiv.appendChild(containerDiv);

  decorateOfficeDetails(officeDetailsContainer);
  decorateFooterBottom(footerBottomContainer);

  const footer = document.createElement('div');
//  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);
  block.textContent = '';
  block.append(footerDiv);
}