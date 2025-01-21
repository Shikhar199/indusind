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
      emailH5.remove();
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

      // Decorate Icons Container
      const iconsContainerDiv = document.createElement("div");
      const indusMultiDiv = createCustomElement("div", "indus-multi-footer");
      iconsContainerDiv.appendChild(indusMultiDiv);
      const pTags = socialLinksDiv.querySelectorAll("p");
      pTags.forEach((p, i) => {
        if (i === 0) {
          const disclaimerPara = p;
          disclaimerPara.setAttribute('style', 'font-size: 12px; line-height: 14px;');
        }
        else if (i === 1) {
          const iconsPara1 = p;
          const iconImg = iconsPara1.querySelector("picture img");
          const imgSrc = iconImg.src;
          const imgAlt = iconImg.alt;
          const paraText = iconsPara1.textContent.trim();

          indusMultiDiv.innerHTML = `
            <div class="icons">
              <a>
              <img src="${imgSrc}" alt="${imgAlt}">
              </a>
              <p></p>
              <p>${paraText}</p>
              <p></p>
            </div>
          `;
          p.remove();
        }
        else if (i === 2) {
          const iconsPara2 = p;
          const iconImg = iconsPara2.querySelector("picture img");
          const imgSrc = iconImg.src;
          const imgAlt = iconImg.alt;
          const paraText = iconsPara2.textContent.trim();
          const iconsDiv2 = createCustomElement("div", "icons");

          iconsDiv2.innerHTML = `
            <a>
              <img src="${imgSrc}" alt="${imgAlt}">
            </a>
            <p></p>
            <p>${paraText}</p>
            <p></p>
          `;
          indusMultiDiv.appendChild(iconsDiv2);
          p.remove();
        }
      });

      // Append elements to create structure
      socialLinksDiv.appendChild(sourceDiv);
      socialLinksContainerDiv.appendChild(socialLinksDiv);

      columnDiv.appendChild(emailInputContainerDiv);
      columnDiv.appendChild(socialLinksContainerDiv);
      columnDiv.appendChild(iconsContainerDiv);
      rowDiv.appendChild(columnDiv);

      console.log(rowDiv);
    }
  });

  containerDiv.appendChild(rowDiv);
  return containerDiv;
}

function decorateOfficeDetails(officeDetailsContainer) {
  console.log(officeDetailsContainer);

  const officeDetailsDiv = createCustomElement("div", "regoff-wrap pt-lg-4 pt-md-4 pt-sm-3 pb-4");
  const iconImg = officeDetailsContainer.querySelector("picture img");
  const iconImgSrc = iconImg.src;
  const iconImgAlt = iconImg.alt;
  officeDetailsContainer.querySelector("p:has(picture)").remove();
  const pElements = officeDetailsContainer.querySelectorAll("p");

  officeDetailsDiv.innerHTML = `
    <div class="container text-center">
       <div class="row">
          <div class="col-sm-12 pl-lg-0 pl-md-4 pl-sm-5 pr-lg-0 pr-md-4 pr-sm-5">
             <p style="text-align: center;" class="paraContainer">
             </p>
          </div>
       </div>
    </div>
    <div class="bull-icon-footer">
       <img src="${iconImgSrc}" alt="${iconImgAlt}">
    </div>
  `;
  pElements.forEach(p => {
    officeDetailsDiv.querySelector("p.paraContainer").appendChild(p);
  });
  console.log("officeDetailsDiv: ");
  console.log(officeDetailsDiv);
  return officeDetailsDiv;
}

function decorateFooterBottom(footerBottomContainer) {
  console.log(footerBottomContainer);
  const anchorElements = footerBottomContainer.querySelectorAll("a");
  anchorElements.forEach(a => {
    a.className = "text-white";
    a.setAttribute("target", "_blank");
  });

  const bottomLinksDiv = createCustomElement("div", "bottom-links-footer pt-2 pb-4");

  // Fetch copyright text
  const divElements = footerBottomContainer.querySelectorAll('div[data-align="center"]');
  const secondDiv = divElements[1]; // Access the second <div>

  // Get the <p> element inside the second <div> and fetch its textContent
  const copyrightText = secondDiv.querySelector('p').textContent;

  bottomLinksDiv.innerHTML = `
    <div class="container">
       <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
             <div class="restxt text-lg-left text-center mb-lg-0 mb-2">

             </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12 copy-footer text-lg-right text-center">
             ${copyrightText}
          </div>
       </div>
    </div>
  `;
  const firstDiv = divElements[0];
  const firstDivInnerHTML = firstDiv.innerHTML;
  bottomLinksDiv.querySelector("div.restxt").innerHTML = firstDivInnerHTML;

  return bottomLinksDiv;
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

  //const fragment = await loadFragment(footerPath); //Commented because going in infinite loop

  // decorate footer DOM
//  block.textContent = ''; Commented because function running 2 times!

  //Create outermost footer element
  const footerDiv = createCustomElement("footer", "footer bg-primary pt-lg-4 pt-md-0 pt-sm-0 d-print-none");
  const linksContainer = decorateFooterLinks(footerLinksContainer);
  footerDiv.appendChild(linksContainer);

  const officeDetails = decorateOfficeDetails(officeDetailsContainer);
  footerDiv.appendChild(officeDetails);

  const footerBottom = decorateFooterBottom(footerBottomContainer);
  footerDiv.appendChild(footerBottom);

  // Decorate Scroll to top button
  const scrollTopBtn = createCustomElement("a", "scroll_btn show");
  scrollTopBtn.href = "#";
  scrollTopBtn.title = "Go to top";
  footerDiv.appendChild(scrollTopBtn);

  const footer = document.createElement('div');
//  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);
  block.textContent = '';
  block.append(footerDiv);
}
