const sketchpad = document.querySelector("#sketchpad");
let gridSide = 32;
for (let i = 0; i < gridSide ** 2; i++) {
	const gridPixel = document.createElement("div");
	gridPixel.style.flex = `0 0 ${100 / gridSide}%`;
	gridPixel.classList.add("gridPixel");
	sketchpad.appendChild(gridPixel);
}

const pixels = document.querySelectorAll(".gridPixel");
pixels.forEach((pixel) =>
	pixel.addEventListener("mouseover", () => {
		pixel.classList.add("colored");
	})
);
