/* Breadcrumb block for IBL */

export default function decorate(block) {
  [...block.children].forEach((row) => {	
	  const rowContent = row.children[0];

    const breadCrumbSection = document.createElement("section");
    breadCrumbSection.className = "breadCrumbsWrap breadcrumb_wrap bg-grey";

    breadCrumbSection.innerHTML = `
      <div class="container bg-white mt--60 px-50px">
        <div class="bredcrumbs">
           <ol class="breadcrumb mb-0 px-0">

           </ol>
        </div>
      </div>
    `;

    const crumbsContainer = breadCrumbSection.querySelector("ol.breadcrumb");

    const crumbs = rowContent.querySelectorAll("li");
    crumbs.forEach(crumb => {
      // Setup last crumb
      if (crumb.querySelector("a") != null && crumb.nextElementSibling != null) {
        crumb.className = "breadcrumb-item";
        crumbsContainer.appendChild(crumb);
      }
      else if (crumb.querySelector("a") === null && crumb.nextElementSibling != null) {
        crumb.className = "breadcrumb-item";
        const anchorElement = document.createElement("a");
        anchorElement.textContent = crumb.textContent;
        crumb.textContent = "";
        crumb.appendChild(anchorElement);
        crumbsContainer.appendChild(crumb);
      }
      else if (crumb.nextElementSibling === null) {
        crumb.className = "breadcrumb-item active";
        crumb.setAttribute("aria-current", "page");
        crumbsContainer.appendChild(crumb);
      }
    });

	  row.replaceWith(breadCrumbSection);
  });
}
