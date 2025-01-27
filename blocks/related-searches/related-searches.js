/*
 * Related Searches Block
 */

export default function decorate(block) {
	[...block.children].forEach((row) => {
	  // decorate label
	  const label = row.children[0];
	  
	  // Create the outer container
	  const container = document.createElement("div");
	  container.className = "relatedQuestionOuter container";
	  
	  // Create the heading
	  const heading = document.createElement("div");
	  heading.className = "relatedQuestionHeading text-bold";
	  heading.append(...label.childNodes);
	  
	  container.appendChild(heading);
	  
	  // Create the inner container
	  const searchBoxContainer = document.createElement("div");
	  searchBoxContainer.className = "relatedQuestionInner";
	  container.appendChild(searchBoxContainer);
	  
	  // Create the unordered list
	  const list = document.createElement("ul");
	  list.className = "relatedQuestionBoxes";
	  searchBoxContainer.appendChild(list);
	  
	  // Loop through the data and create list items
	  const boxes = row.children[1];
	  const searchBoxTexts = boxes.querySelectorAll("p");
	  searchBoxTexts.forEach(search => {
		  const anchorElement = search.firstChild;
		  anchorElement.className = "";
		  anchorElement.setAttribute("target","_blank");
		  
		  const listItem = document.createElement("li");
		  listItem.className = "relatedQuestionRedirect";
		  listItem.textContent = anchorElement.textContent;
		  anchorElement.textContent = "";
  
		  listItem.appendChild(anchorElement);
		  list.appendChild(listItem);
	  });
	  
	  row.replaceWith(container);
	});
  }