const pixelContainer = document.getElementById("pixel-board-container");
let mousePos = { x: 0, y: 0 };

function getMousePosition() {
  let rect = pixelContainer.getBoundingClientRect();
  mousePos = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function translatePixelContainer(e) {}

pixelContainer.addEventListener("mousedown", (e) => {});
pixelContainer.addEventListener("mouseover", (e) => {});
