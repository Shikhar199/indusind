/*
 * Related Searches Block
 */

export default function decorate(block) {
  [...block.children].forEach((row) => {
    // decorate label
    const label = row.children[0];

	console.log(label);
	console.log(label.textContent.trim());
	
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
	console.log(boxes);
	const searchBoxTexts = boxes.querySelectorAll("p");
	searchBoxTexts.forEach(search => {
		console.log("Inside loop");
		console.log(search);
		const listItem = document.createElement("li");
		listItem.className = "relatedQuestionRedirect";

		listItem.appendChild(search);
		console.log(listItem);
		list.appendChild(listItem);
		console.log(list);
	});
	
	row.replaceWith(container);
	
    /* // decorate block's item body
    const boxes = row.children[1];
    boxes.className = 'related-searchs-boxes';
    // decorate each box item
    const details = document.createElement('details');
    details.className = 'faqs-item';
    details.append(summary, body);
    row.replaceWith(details); */
  });
}