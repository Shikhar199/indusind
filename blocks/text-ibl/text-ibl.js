/* Custom Text block for IBL */

export default function decorate(block) {
	// Select the component containing the "Read More" text
	const component = document.querySelector('.textwithreadmore'); // Replace with the actual component selector

	// Check if the component exists
	if (component) {
		// Loop through child nodes to find the "Read More" text
		Array.from(component.childNodes).forEach(node => {
			if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() === "<Read More>") {
				// Create a <span> element
				const span = document.createElement('span');
				span.textContent = "Read More"; // Set text value
				span.classList.add("text-bold", "howReadMore", "howReadMoreTextSecond", "text-end");

				// Replace the text node with the <span> element
				component.replaceChild(span, node);
			}
    });
	} else {
		console.error('Component not found.');
	}
	
	const container = document.querySelector('.text');
	
	let startFound = false;
    let endFound = false;
    const pElementsBetween = [];
	const moreTextStart;
	const moreTextEnd;
	
	// Loop through child nodes of the container
    Array.from(container.childNodes).forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            // Check if "<More Text Start>" marker is found
            if (node.nodeValue.trim() === "<More Text Start>") {
                startFound = true;
				moreTextStart = node;
            }

            // Check if "<More Text End>" marker is found
            if (node.nodeValue.trim() === "<More Text End>") {
                endFound = true;
				moreTextEnd = node;
            }
        }

        // If start marker is found and end marker is not found, collect <p> elements
        if (startFound && !endFound && node.nodeType === Node.ELEMENT_NODE && node.tagName === "P") {
            pElementsBetween.push(node);
        }
    });
	
	// Create span for Read Less text
	const readLess = document.createElement("span");
	readLess.textContent = "Read Less";
	span.classList.add("text-bold", "howReadLess", "howReadLessTextSecond", "text-end");
	
	const moreText = component.querySelector(".howReadMore").insertAdjacentElement("afterend", pElementsBetween);
	moreText.insertAdjacentElement("afterend", readLess);
	
	
}
