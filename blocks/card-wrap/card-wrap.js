/* Card Wrap Block for IBL */

export default function decorate(block) {
  [...block.children].forEach((row) => {
    // Fetch first row items
    const firstImgDiv = row.children[0];
    const img1 = firstImgDiv.querySelector("picture img");
    img1.className = "indus-mobile";

    // Fetch second row items
    const secondImgDiv = row.children[1];
    const img2 = secondImgDiv.querySelector("picture img");

    const textHeadingLink = row.children[2];
    const h5Text = textHeadingLink.querySelector("h5").textContent;

    const pElements = textHeadingLink.querySelectorAll("p");
    const text = p[0].textContent;
    const link = p[1].textContent;
//    pElements.forEach((p, i) => {
//      if (i === 0) {
//        text = p.textContent;
//      }
//      else if (i === 1) {
//        link = p.textContent;
//      }
//    });

    const section = document.createElement("section");
    section.className = "home-card-wrap border-top border-primary";
    section.innerHTML = `
      <div class="container">
         <div class="w-100 d-flex align-items-center justify-content-center aos-init aos-animate" data-aos="fade-up">
            <a id="mobilePlay" href="${link}" class="d-flex flex-direction-column justify-content-center align-items-center">
               <div class="mr-2">
               </div>
               <div class="download-icons-wrap-home">
                  <div class="d-flex justify-content-center">
                     <div class="mobile-iconhome">
                     </div>
                     <div class="align-self-center get-thebank">
                        <h5 class="text-bold text-primary m-0">${h5Text}</h5>
                        <p class="h6 position-relative justify-content-start d-flex m-0" href="${link}">${text}<span></span></p>
                     </div>
                  </div>
               </div>
            </a>
         </div>
      </div>
    `;
    section.querySelector("div.mr-2").appendChild(img1);
    section.querySelector("mobile-iconhome").appendChild(img2);

    row.replaceWith(section);
  });
}
