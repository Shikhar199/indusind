/* Custom Page Nav block for IBL */

//Jumplink code for page nav block
document.addEventListener('click', function (event) {
    // Code to remove existing is-active classes
    if (event.target.tagName === 'A') {
        // Find all elements with the "is-active" class
        const activeElements = document.querySelectorAll('li.is-active');

        // Remove the "is-active" class from each element
        activeElements.forEach(element => {
                element.classList.remove('is-active');
        });
    }

    // Check if the clicked element is an <a> with a "data-layer-text" attribute
    if (event.target.tagName === 'A' && event.target.hasAttribute('data-layer-text')) {
        const layerTextValue = event.target.getAttribute('data-layer-text');
        //Add is-active class to the parent of clicked element
        event.target.parentElement.classList.add("is-active");

        // Find the element with the matching "data-nav-waypoint" attribute
        const targetElement = document.querySelector(`[data-nav-waypoint="${layerTextValue}"]`);

        if (targetElement) {
            // Prevent the default link behavior
            event.preventDefault();

            // Scroll to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start'     // Scroll to the top of the target element
            });
        }
    }
});

//Code to fetch data from document and create the HTML structure
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
      anchorElement.setAttribute("href", "");
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
    const ulItem2 = ctaList.querySelector("ul");  //Can be appended later
    ulItem2.className = "nav-cta -horizontal ml-auto";
    const ctaItems = ctaList.querySelectorAll("li");
    ctaItems.forEach(cta => {
      const ctaAnchorElement = cta.querySelector("a");
      ctaAnchorElement.className = "btn btn-primary-option text-white mb-0 radioyes";
    });

    //Creating outer elements of list items
    const navSection = document.createElement("section");
    navSection.className = "nav_section";

    const componentPageNav = document.createElement("div");
    componentPageNav.className = "component-page-nav is-active is-sticky";
    componentPageNav.setAttribute("data-component", "page-nav");

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
    componentPageNav.appendChild(navOutlineDiv);
    navSection.appendChild(componentPageNav);

    row.replaceWith(navSection);

  });
}
