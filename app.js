const container = document.querySelector(".container");

for (let i = 1; i < 273; i++) {
	let square = document.createElement("div");

	square.classList.add("box");
	container.appendChild(square);
}
