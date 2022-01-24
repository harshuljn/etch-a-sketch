const sketchpad = document.querySelector("#sketchpad");
for (let i = 0; i < 16 * 16; i++) {
	const padSquare = document.createElement("div");
	padSquare.classList.add("pixel");
	sketchpad.appendChild(padSquare);
}
