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
