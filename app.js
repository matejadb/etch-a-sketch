const container = document.querySelector(".grid-container");
const buttonDiv = document.querySelector(".button-div");
let popupButton = document.createElement("button");
let gridLength;

popupButton.classList.add("popupButton");
popupButton.innerText = "New grid";

buttonDiv.appendChild(popupButton);

gridLength = popupButton.addEventListener("click", () => {
	do {
		gridLength = parseInt(prompt("Enter grid size (maximum 100x100)"));
	} while (gridLength > 100);

	for (let i = 1; i < gridLength * gridLength; i++) {
		let square = document.createElement("div");
		square.classList.add("box");

		square.onmouseover = () => {
			let r = Math.floor(Math.random() * 256) + 1;
			let g = Math.floor(Math.random() * 256) + 1;
			let b = Math.floor(Math.random() * 256) + 1;
			square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
		};

		container.appendChild(square);
	}
});

/*
TODO: Add button and styles - DONE
TODO: Add button interaction - DONE
TODO: Figure out the logic
*/
