/* Product Showcase Card block for IBL */

function createCustomElement(tagname, className) {
  const element = document.createElement(tagname);
  if (className) {
    element.className = className;
  }
  return element;
}

function decorateTabsContainer() {
  const tabsContainerDiv = createCustomElement("div", "container pt-container");
  tabsContainerDiv.innerHTML = `
    <div class="product-tab mt--150">
       <div class="card card-product popular border-0 shadow mb-4 overflow-lg-visible">
          <div class="card-body p-0">
             <div class="row row-grid align-items-center d-flex flex-row">
                <!-- 9 Product tab -->
                <div class="col-lg-12 col-md-12 col-12 pt-col m-0">
                   <!-- 3 groupe tab entire 3 swipe slide item -->
                   <div class="swiper-container gallery-thumbs-card bg-primary top-thumbs-cards-home align-items-center py-0 swiper-initialized swiper-horizontal swiper-free-mode swiper-watch-progress swiper-backface-hidden">
                      <div class="swiper-wrapper justify-content-around justify-content-around-md" id="swiper-wrapper-ed127238a2ae35a6" aria-live="polite">

                      </div>
                      <!-- Add Arrows -->
                      <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                   </div>
                   <div class="product-swiper-button-next swiper-button-white swiper-button-disabled swiper-button-lock" tabindex="-1" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-ed127238a2ae35a6" aria-disabled="true"></div>
                   <div class="product-swiper-button-prev swiper-button-white swiper-button-disabled swiper-button-lock" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-ed127238a2ae35a6" aria-disabled="true"></div>
                </div>
             </div>
          </div>
       </div>
    </div>
  `;
  return tabsContainerDiv;
};

function decorateTab(tabImgSrc, tabText, tabIndex) {
  const tab = createCustomElement("div", "swiper-slide y-yellow-rop swiper-slide-visible swiper-slide-fully-visible swiper-slide-active");
  tab.setAttribute("style", "width: 148.125px;");
  tab.setAttribute("role", "group");
  tab.setAttribute("aria-label", tabIndex + " / 8");
  tab.innerHTML = `
    <div class="swiper-nav bg-primary">
       <div class="btn-swiper-pane d-flex flex-column justify-content-around">
          <ul class="nav nav-pills product-tabs nav-fill flex-row">
             <li class="nav-item tab-link ">
                <a class="nav-link active" data-tab="personal-tab-${tabIndex}">
                   <div class="card-body text-center p-0">
                      <div class="d-flex justify-content-around">
                         <i class="bg-accounts d-flex bg-none"> <img src="${tabImgSrc}" alt="" class="img_front">
                         <img src="${tabImgSrc}" alt="" class="img_hover">
                         </i>
                      </div>
                      <div class="text-center text-normal mt-2 text-x-small text-nowrap">
                         ${tabText}
                      </div>
                   </div>
                </a>
             </li>
          </ul>
       </div>
    </div>
  `;
  return tab;
}

export default function decorate(block) {
  const outerMostDiv = createCustomElement("div", "productShowcaseCard");
  const section = createCustomElement("section", "productShowcaseCardNew slice slice-lg product-section");
  outerMostDiv.appendChild(section);

  const tabsContainerDiv = decorateTabsContainer();

  const tabIndex = 1;
  [...block.children].forEach((row) => {
    if(row.childElementCount === 2){
      // It is a tab item
      const tabText = row.children[0].querySelector("p").textContent;
      const tabImgSrc = row.children[1].querySelector("picture img").src;
      const tab = decorateTab(tabImgSrc, tabText, tabIndex);
      tabsContainerDiv.querySelector("div.swiper-wrapper").appendChild(tab);
      tabIndex = tabIndex + 1;
    }
//    else if(row.childElementCount === 5){
//      // It is card container
//      const cardImg =
//      const cardHeading
//      const cardText
//      const applyNowCTA
//      const knowMoreCTA
//    }
  });

  section.appendChild(tabsContainerDiv);
  block.replaceWith(section);
}
