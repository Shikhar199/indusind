/* Custom Page Nav block for IBL */

export default function decorate(block) {
  [...block.children].forEach((row) => {	
    const list = row.children[0];

    const ulItem1 = list.querySelector("ul");
    ulItem1.className = "nav-list ui-carousel ui-carousel--active";
    ulItem1.setAttribute("data-hook", "nav-list");

    const listItems = list.querySelectorAll("li"); //Can be appended later
    listItems.forEach(navItem => {
      navItem.className = "ui-carousel-item";
      const dataLayerText = navItem.textContent.toLowerCase();

      //Create anchor element with required attributes
      const anchorElement = document.createElement("a");
      anchorElement.setAttribute("data-hook", "nav-item");
      anchorElement.setAttribute("data-layer-event", "site-interaction");
      anchorElement.setAttribute("data-layer-category", "in-page-menu");
      anchorElement.setAttribute("data-layer-location", "product-page");
      anchorElement.setAttribute("data-layer-type", "text");
      anchorElement.setAttribute("data-layer-text", dataLayerText);
      anchorElement.textContent = navItem.textContent;
      navItem.textContent = "";

      navItem.appendChild(anchorElement);
    });

    //Creating inner divs of first ul
    const uiCarouselViewportDiv = document.createElement("div");
    uiCarouselViewportDiv.className = "ui-carousel-viewport";

    const uiCarouselPaneDiv = document.createElement("div");
    uiCarouselPaneDiv.className = "ui-carousel-pane";

    listItems.forEach(listItem => uiCarouselPaneDiv.appendChild(listItem));
    uiCarouselViewportDiv.appendChild(uiCarouselPaneDiv);
    ulItem1.appendChild(uiCarouselViewportDiv);

    const ctaList = row.children[1];
    const ulItem2 = ctaList.querySelectorAll("ul");  //Can be appended later
    ulItem2.className = "nav-cta -horizontal ml-auto";
    const ctaItems = ctaList.querySelectorAll("li");
    ctaItems.forEach(cta => {
      const ctaAnchorElement = cta.querySelector("a");
      ctaAnchorElement.className = "btn btn-primary-option text-white mb-0 radioyes";
    });

    //Creating outer elements of list items
    const navOutlineDiv = document.createElement("div");
    navOutlineDiv.className = "nav-outline";
    navOutlineDiv.setAttribute("data-hook","nav");

    const containerDiv = document.createElement("div");
    containerDiv.className = "container px-50px bg-white";

    const navElement = document.createElement("nav");
    navElement.className = "nav--horizontal d-flex";

    navElement.appendChild(ulItem1);
    navElement.appendChild(ulItem2);
    containerDiv.appendChild(navElement);
    navOutlineDiv.appendChild(containerDiv);

    row.replaceWith(navOutlineDiv);

  });
}
