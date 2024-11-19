const container = document.querySelector(".grid-container");
const buttonDiv = document.querySelector(".button-div");
let popupButton = document.createElement("button");
let row = document.createElement("div");
let gridLength;

popupButton.classList.add("popupButton");
popupButton.innerText = "New grid";

buttonDiv.appendChild(popupButton);

popupButton.addEventListener("click", (e) => {
	do {
		gridLength = parseInt(prompt("Enter grid size (maximum 100x100)"));
		container.innerHTML = "";
	} while (gridLength > 100);
	for (let i = 0; i < gridLength; i++) {
		row = container.appendChild(document.createElement("div"));
		for (let j = 0; j < gridLength; j++) {
			const square = document.createElement("div");
			square.classList.add("box");

			square.onmouseover = () => {
				let r = Math.floor(Math.random() * 256) + 1;
				let g = Math.floor(Math.random() * 256) + 1;
				let b = Math.floor(Math.random() * 256) + 1;
				square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
			};

			row.appendChild(square);
		}
	}
});

// TODO - Fix grid
