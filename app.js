const container = document.querySelector(".container");

for (let i = 1; i < 273; i++) {
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

/*
TODO:
  Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. 
  Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) 
  so that you’ve got a new sketch pad.
*/
