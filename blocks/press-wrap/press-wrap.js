/* Press Wrap Block for IBL */

export default function decorate(block) {
  [...block.children].forEach((row) => {
    //Fetch the block heading element and set its classes and attributes
    const blockHeading = document.querySelector('div.press-wrap-container h4').textContent;

    //Fetch first column data of the row
    const firstColumn = row.children[0];

    //Fetch first column's heading element and set its classes and attributes
    const firstColumnHeading = firstColumn.querySelector('h5').textContent;

    //Creating outer divs of News Items
    const latestNewsDiv = document.createElement("div");
    latestNewsDiv.id = "latestnews";

    //Fetch list items and set its structure
    const newsItems = firstColumn.querySelectorAll("li");
    newsItems.forEach(newsItem => {
      const newsContainer = document.createElement("div");
      newsContainer.className = "post border-bottom mb-3 border-primary";

      const postBodyDiv = document.createElement("div");
      postBodyDiv.className = "post-body pb-3";

      const mb2Div = document.createElement("div");
      mb2Div.className = "mb-2";

      const postDateSpan = document.createElement("span");
      postDateSpan.className = "post-date text-primary";

      const anchorElement = newsItem.querySelector("a");

      const h6 = document.createElement("h6");
      h6.className = "post-title three-lines";
      h6.appendChild(anchorElement);

      const dateText = newsItem.textContent;
      postDateSpan.textContent = dateText;

      mb2Div.appendChild(postDateSpan);
      postBodyDiv.appendChild(mb2Div);
      postBodyDiv.appendChild(h6);
      newsContainer.appendChild(postBodyDiv);

      latestNewsDiv.appendChild(newsContainer);
    });

    //Setup bottom CTA
    const bottomAnchorElement1 = firstColumn.querySelector("p.button-container").firstElementChild;
    bottomAnchorElement1.className = "link text-primary text-bold";
    bottomAnchorElement1.innerHTML = `
      <span class="btn-inner--icon"><i class="far fa-angle-right"></i></span>
    `;
    const pressLinkDiv = document.createElement("div");
    pressLinkDiv.className = "press-link mt-5";
    pressLinkDiv.appendChild(bottomAnchorElement1);

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
                  <h4 class="text-bold text-primary">${blockHeading}</h4>
               </div>
               <div class="row">
                  <div class="col-12 col-sm-3">
                     <div>
                        <div class="latestarticleListing">
                           <div id="header-" class="header ">
                              <div id="article-listing-" class="article-listing ">
                                 <div class="col-md-12 mb-5 px-0 aos-init aos-animate" data-aos="fade-up">
                                    <div class="mb-2">
                                       <h5 class="text-primary text-bold">${firstColumnHeading}</h5>
                                    </div>
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
    const mb2Div = outerMostStructure.querySelector("div.mb-2");
    mb2Div.insertAdjacentElement("beforeend", latestNewsDiv);
    mb2Div.insertAdjacentElement("beforeend", pressLinkDiv);

    //Fetch Second Columns' Data from table
    const secondColumn = row.children[1];

    //Fetch first column's heading, image, title, para and CTA and set their classes and attributes
    const secondColumnHeading = secondColumn.querySelector('h5').textContent;

    const secondColumnImage = secondColumn.querySelector('picture img').src;
    const postTitle = secondColumn.querySelector('h4').textContent;
    const paraText = secondColumn.querySelector('h4').nextElementSibling.textContent;
    const bottomAnchorElement2 = secondColumn.querySelector('.button-container a');
    const bottomAnchorElement2Href = bottomAnchorElement2.getAttribute("href");
    const bottomAnchorElement2Text = bottomAnchorElement2.textContent;

    //Fetch Third Columns' Data from table
    const thirdColumn = row.children[2];

    //Fetch headings, image, title, para and CTA and set their classes and attributes
    const thirdColumnHeadings = thirdColumn.querySelectorAll('h5');
    const thirdColumnHeading1 = thirdColumnHeadings[0].textContent;
    const thirdColumnHeading2 = thirdColumnHeadings[1].textContent;

    //Fetch images and set their classes and attributes
    const thirdColumnImages = thirdColumn.querySelectorAll('picture img');
    const image1Src = thirdColumnImages[0].src;
    const image2Src = thirdColumnImages[1].src;
    const image1Alt = thirdColumnHeading1.toLowerCase();
    const image2Alt = thirdColumnHeading2.toLowerCase();

    //Fetch title headings and set their classes and attributes
    const postTitleHeadings = thirdColumn.querySelectorAll('h4');
    const postTitleHeading1 = postTitleHeadings[0].textContent;
    const postTitleHeading2 = postTitleHeadings[1].textContent;

    //Fetch anchor elements and set their classes and attributes
    const anchorElements = thirdColumn.querySelectorAll('.button-container a');
    const col3AnchorElement1Href = anchorElements[0].getAttribute("href");
    const col3AnchorElement2Href = anchorElements[1].getAttribute("href");
    const col3AnchorElement1Text = anchorElements[0].textContent;
    const col3AnchorElement2Text = anchorElements[1].textContent;

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
                              <h5 class="text-primary text-bold">${secondColumnHeading}</h5>
                           </div>
                           <img class="card-border-color dummy-img" src="${secondColumnImage}" loading="lazy">
                           <div class="post mt-3 mb-3 csrbox">
                              <div class="post-body pb-3">
                                 <h4 class="post-title">${postTitle}</h4>
                                 <p><span style="font-weight: normal;">${paraText}</span></p>
                                 <a href="${bottomAnchorElement2Href}" class="link_view">${bottomAnchorElement2Text}</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-5 d-none d-md-block aos-init aos-animate" data-aos="fade-up">
                        <div class="card border-0 mb-lg-4">
                           <div class="mb-2">
                              <h5 class="text-primary text-bold">${thirdColumnHeading1}</h5>
                           </div>
                           <div class="post-body pb-3">
                              <img class="card-border-color" alt="${image1Alt}" src="${image1Src}">
                              <h4 class="post-title">${postTitleHeading1}</h4>
                              <a href="${col3AnchorElement1Href}" class="link_view" target="_blank">${col3AnchorElement1Text}</a>
                           </div>
                        </div>
                        <div class="card border-0 mb-lg-4">
                           <div class="mb-2">
                              <h5 class="text-primary text-bold">${thirdColumnHeading2}</h5>
                           </div>
                           <div class="post-body pb-3">
                              <img class="card-border-color" alt="${image2Alt}" src="${image2Src}">
                              <div class="mb-2 mt-3">
                                 <span class="post-date text-primary">${postDateText}</span>
                              </div>
                              <h4 class="post-title">${postTitleHeading2}</h4>
                              <a href="${col3AnchorElement2Href}" class="link_view" target="_blank">${col3AnchorElement2Text}</a>
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
                                          <h5 class="text-primary text-bold">${secondColumnHeading}</h5>
                                       </div>
                                       <div class="post-body pb-3">
                                          <div class="post-body pb-3">
                                             <img class="card-border-color" src="${secondColumnImage}" loading="lazy">
                                             <h4 class="post-title">${postTitle}</h4>
                                             <h6 class="post-title five-lines ellipsis-double-line">
                                                <p><span style="font-weight: normal;">${paraText}</span></p>
                                             </h6>
                                             <a href="${col3AnchorElement1Href}" class="link_view">${bottomAnchorElement2Text}</a>
                                          </div>
                                       </div>
                                    </div>
                                    <!-- End -->
                                 </div>
                                 <div class="swiper-slide h-100">
                                    <!-- product card -->
                                    <div class="card border-0">
                                       <div class="mb-2">
                                          <h5 class="text-primary text-bold">${thirdColumnHeading1}</h5>
                                       </div>
                                       <div class="post-body pb-3">
                                          <img class="card-border-color" alt="${image1Alt}" src="${image1Src}">
                                          <h4 class="post-title">${postTitleHeading1}</h4>
                                          <a href="${col3AnchorElement1Href}" class="link_view" target="_blank">${col3AnchorElement1Text}</a>
                                       </div>
                                    </div>
                                    <!-- End -->
                                 </div>
                                 <div class="swiper-slide h-100">
                                    <!-- product card -->
                                    <div class="card border-0">
                                       <div class="mb-2">
                                          <h5 class="text-primary text-bold">${thirdColumnHeading2}</h5>
                                       </div>
                                       <div class="post-body pb-3">
                                          <img class="card-border-color" alt="${image2Alt}" src="${image2Src}">
                                          <div class="mb-2 mt-3">
                                             <span class="post-date text-primary">${postDateText}</span>
                                          </div>
                                          <h4 class="post-title">${postTitleHeading2}</h4>
                                          <a href="${col3AnchorElement2Href}" class="link_view" target="_blank">${col3AnchorElement2Text}</a>
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
