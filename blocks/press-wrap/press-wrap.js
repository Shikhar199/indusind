/* Press Wrap Block for IBL */

export default function decorate(block) {
  [...block.children].forEach((row) => {	
    //Fetch the block heading element and set its classes and attributes
    const blockHeading = document.querySelector('div.press-wrap-container h4');
    blockHeading.className = "text-bold text-primary";

    //Fetch first column data of the row
    const firstColumn = row.children[0];

    //Fetch first column's heading element and set its classes and attributes
    const firstColumnHeading = firstColumn.querySelector('h5');
    firstColumnHeading.className = "text-primary text-bold";

    //Creating outer divs of News Items
    const latestNewsDiv = document.createElement("div");
    latestNewsDiv.id = "latestnews";

    //Fetch list items and set its structure
    const newsItems = firstColumn.querySelectorAll("li");
    newsItems.forEach(newsItem => {
      const dateText = newsItem.textContent;
      const anchorElement = newsItem.querySelector("a");

      const newsContainer = `
        <div class="post border-bottom mb-3 border-primary">
          <div class="post-body pb-3">
            <div class="mb-2"><span class="post-date text-primary">${dateText}</span></div>
            <h6 class="post-title three-lines">${anchorElement}</h6>
          </div>
        </div>
      `;
      latestNewsDiv.insertAdjacentHTML("beforeend", newsContainer);
    });

    //Setup bottom CTA
    const bottomAnchorElement1 = firstColumn.querySelector("p.button-container").firstElementChild;
    bottomAnchorElement1.className = "link text-primary text-bold";
    bottomAnchorElement1.innerHTML = `
      <span class="btn-inner--icon"><i class="far fa-angle-right"></i></span>
    `;
    const pressLinkDiv = `
      <div class="press-link mt-5">
        ${bottomAnchorElement1}
      </div>
    `;

//    latestNewsDiv.insertAdjacentElement('afterend', pressLinkDiv);

    //Create Initial Structure with first column
    const outerMostStructure = document.createElement("div");
    outerMostStructure.className = "columnGrid";
    outerMostStructure.innerHTML = `
         <section class="press-wrap pt-5 pb-4 border-top border-primary">
            <div id="column-grid-" class="column-grid ">
            </div>
            <div class="container">
               <div class="heading mb-4">
                  ${blockHeading}
               </div>
               <div class="row">
                  <div class="col-12 col-sm-3">
                     <div>
                        <div class="latestarticleListing">
                           <div id="header-" class="header ">
                              <div id="article-listing-" class="article-listing ">
                                 <div class="col-md-12 mb-5 px-0 aos-init aos-animate" data-aos="fade-up">
                                    <div class="mb-2">
                                       ${firstColumnHeading}
                                    </div>
                                    ${latestNewsDiv}
                                    ${pressLinkDiv}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    `;

    //Fetch Second Columns' Data from table
    const secondColumn = row.children[1];

    //Fetch first column's heading, image, title, para and CTA and set their classes and attributes
    const secondColumnHeading = secondColumn.querySelector('h5');
    secondColumnHeading.className = "text-primary text-bold";

    const secondColumnImage = secondColumn.querySelector('picture img');
    secondColumnImage.className = "card-border-color dummy-img";
    const postTitle = secondColumn.querySelector('h4');
    postTitle.className = "post-title";
    const paraText = secondColumn.querySelector('h4').nextElementSibling.textContent;
    const bottomAnchorElement2 = secondColumn.querySelector('.button-container a');
    bottomAnchorElement2.className = "link_view"

    //Fetch Third Columns' Data from table
    const thirdColumn = row.children[2];

    //Fetch headings, image, title, para and CTA and set their classes and attributes
    const thirdColumnHeadings = thirdColumn.querySelectorAll('h5');
    thirdColumnHeadings.forEach(heading => {
      heading.className = "text-primary text-bold";
    });
    const thirdColumnHeading1 = thirdColumnHeadings[0];
    const thirdColumnHeading2 = thirdColumnHeadings[1];

    //Fetch images and set their classes and attributes
    const thirdColumnImages = thirdColumn.querySelectorAll('picture img');
    thirdColumnImages.forEach((image, i) => {
      image.className = "card-border-color";
      image.setAttribute("alt", thirdColumnHeadings[i].textContent.toLowerCase());
    });
    const image1 = thirdColumnImages[0];
    const image2 = thirdColumnImages[1];

    //Fetch title headings and set their classes and attributes
    const postTitleHeadings = thirdColumn.querySelectorAll('h4');
    postTitleHeadings.forEach(postTitleHeading => {
      postTitleHeading.className = "post-title";
    });
    const postTitleHeading1 = postTitleHeadings[0];
    const postTitleHeading2 = postTitleHeadings[1];

    //Fetch anchor elements and set their classes and attributes
    const anchorElements = thirdColumn.querySelectorAll('.button-container a');
    anchorElements.forEach(anchorElement => {
      anchorElement.className = "link_view";
      anchorElement.setAttribute("target", "_blank");
    });
    const col3AnchorElement1 = anchorElements[0];
    const col3AnchorElement2 = anchorElements[1];

    //Fetch post date's text
    const postDateText = thirdColumn.querySelector("h6").textContent;

    //Create 2nd and 3rd column's structure and add fetched data to it
    const colSm9Div = document.createElement("div");
    colSm9Div.className = "col-12 col-sm-9";
    colSm9Div.innerHTML = `
         <div>
            <div class="listOfTeasers">
               <div id="list-of-teasers-" class="list-of-teasers ">
                  <div class="row">
                     <div class="col-md-7 d-none d-md-block aos-init aos-animate" data-aos="fade-up">
                        <div class="card border-0">
                           <div class="mb-2">
                              ${secondColumnHeading}
                           </div>
                           ${secondColumnImage}
                           <div class="post mt-3 mb-3 csrbox">
                              <div class="post-body pb-3">
                                 ${postTitle}
                                 <p><span style="font-weight: normal;">${paraText}</span></p>
                                 ${bottomAnchorElement2}
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-5 d-none d-md-block aos-init aos-animate" data-aos="fade-up">
                        <div class="card border-0 mb-lg-4">
                           <div class="mb-2">
                              ${thirdColumnHeading1}
                           </div>
                           <div class="post-body pb-3">
                              ${image1}
                              ${postTitleHeading1}
                              ${col3AnchorElement1}
                           </div>
                        </div>
                        <div class="card border-0 mb-lg-4">
                           <div class="mb-2">
                              ${thirdColumnHeading2}
                           </div>
                           <div class="post-body pb-3">
                              ${image2}
                              <div class="mb-2 mt-3">
                                 <span class="post-date text-primary">${postDateText}</span>
                              </div>
                              ${postTitleHeading2}
                              ${col3AnchorElement2}
                           </div>
                        </div>
                     </div>
                     <!-- for mobile device news -->
                     <div class="col-12 d-xl-none d-lg-none d-md-none aos-init aos-animate" data-aos="fade-up">
                        <div class="swiper-js-container">
                           <div class="swiper-container product-card" data-swiper-items="auto" data-swiper-space-between="20" data-swiper-sm-items="auto" data-swiper-sm-space-between="20" data-swiper-lg-items="3" data-swiper-lg-space-between="20" data-swiper-xl-items="3" data-swiper-xl-space-between="20">
                              <div class="swiper-wrapper">
                                 <div class="swiper-slide h-100">
                                    <!-- product card -->
                                    <div class="card border-0">
                                       <div class="mb-2">
                                          ${secondColumnHeading}
                                       </div>
                                       <div class="post-body pb-3">
                                          <div class="post-body pb-3">
                                             ${secondColumnImage}
                                             ${postTitle}
                                             <h6 class="post-title five-lines ellipsis-double-line">
                                                <p><span style="font-weight: normal;">${paraText}</span></p>
                                             </h6>
                                             ${bottomAnchorElement2}
                                          </div>
                                       </div>
                                    </div>
                                    <!-- End -->
                                 </div>
                                 <div class="swiper-slide h-100">
                                    <!-- product card -->
                                    <div class="card border-0">
                                       <div class="mb-2">
                                          ${thirdColumnHeading1}
                                       </div>
                                       <div class="post-body pb-3">
                                          ${image1}
                                          ${postTitleHeading1}
                                          ${col3AnchorElement1}
                                       </div>
                                    </div>
                                    <!-- End -->
                                 </div>
                                 <div class="swiper-slide h-100">
                                    <!-- product card -->
                                    <div class="card border-0">
                                       <div class="mb-2">
                                          ${thirdColumnHeading2}
                                       </div>
                                       <div class="post-body pb-3">
                                          ${image2}
                                          <div class="mb-2 mt-3">
                                             <span class="post-date text-primary">${postDateText}</span>
                                          </div>
                                          ${postTitleHeading2}
                                          ${col3AnchorElement2}
                                       </div>
                                    </div>
                                    <!-- End -->
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- for mobile device news -->
               </div>
               <!--/End -->
            </div>
         </div>
    `;

    //Append colSm9Div after col-sm-3 in the outer structure
    outerMostStructure.querySelector('div.row').insertAdjacentElement("beforeend", colSm9Div);

    row.replaceWith(outerMostStructure);

  });
}
