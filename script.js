const sketchpad = document.querySelector("#sketchpad");
let gridSide = 16;
for (let i = 0; i < gridSide ** 2; i++) {
	const girdPixel = document.createElement("div");
	girdPixel.classList.add("gridPixel");
	sketchpad.appendChild(girdPixel);
}

const pixels = document.querySelectorAll(".gridPixel");
pixels.forEach((pixel) =>
	pixel.addEventListener("mouseover", () => {
		pixel.classList.add("colored");
	})
);
