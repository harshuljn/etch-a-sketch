const sketchpad = document.querySelector("#sketchpad");

function setGrid() {
	const pixels = document.querySelectorAll(".gridPixel");
	pixels.forEach((pixel) =>
		pixel.addEventListener("mouseover", () => {
			pixel.classList.add("colored");
		})
	);
}

function createGrid(gridSide = 32) {
	for (let i = 0; i < gridSide ** 2; i++) {
		const gridPixel = document.createElement("div");
		gridPixel.style.flex = `0 0 ${100 / gridSide}%`;
		gridPixel.classList.add("gridPixel");
		sketchpad.appendChild(gridPixel);
	}
	setGrid();
}

function reset() {
	while (sketchpad.firstChild) {
		sketchpad.removeChild(sketchpad.lastChild);
	}
	let gridSide = parseInt(prompt("Enter grid length"));
	gridSide = Math.min(72, gridSide);
	createGrid(gridSide);
}

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);
createGrid();
