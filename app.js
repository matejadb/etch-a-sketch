const container = document.querySelector(".grid-container");
const buttonDiv = document.querySelector(".button-div");
let popupButton = document.createElement("button");
let gridSize;

popupButton.classList.add("popupButton");
popupButton.innerText = "New grid";

buttonDiv.appendChild(popupButton);

popupButton.addEventListener("click", (e) => {
	do {
		gridSize = parseInt(prompt("Enter grid size (maximum 100x100)"));
		container.innerHTML = "";
	} while (gridSize > 100);
	container.style.setProperty("--grid-size", gridSize);

	const gridItemSize = 980 / gridSize;

	for (let i = 0; i < gridSize * gridSize; i++) {
		const item = document.createElement("div");
		item.classList.add("grid-item");
		item.style.width = `${gridItemSize}px`;
		item.style.height = `${gridItemSize}px`;

		item.onmouseover = () => {
			let r = Math.floor(Math.random() * 256) + 1;
			let g = Math.floor(Math.random() * 256) + 1;
			let b = Math.floor(Math.random() * 256) + 1;
			item.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
		};

		container.appendChild(item);
	}
});
// TODO - Fix grid
/*
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
*/
