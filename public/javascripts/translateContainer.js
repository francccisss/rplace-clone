const contentBg = document.getElementById("content-bg");
const pixelBoard = document.getElementById("pixel-board-container");
let isMouseDown = false;

function translatePixelContainer(e) {
  const pixelBoardStyle = window.getComputedStyle(pixelBoard);
  const matrix = new WebKitCSSMatrix(pixelBoardStyle.transform);
  e.stopPropagation();
  const target = e.target;

  const newMatrix = new DOMMatrix(matrix);
  newMatrix.m41 += e.movementX;
  newMatrix.m42 += e.movementY;
  if (isMouseDown) {
    if (target.classList.contains("cell")) {
      pixelBoard.style.transform = newMatrix.toString();
    }
    pixelBoard.style.transform = newMatrix.toString();
  }
}
contentBg.addEventListener("mousedown", (e) => {
  if (e.button === 1) {
    contentBg.style.cursor = "grabbing";
    isMouseDown = true;
  }
});

contentBg.addEventListener("mouseup", (e) => {
  isMouseDown = false;
  contentBg.style.cursor = "default";
});
contentBg.addEventListener("mousemove", translatePixelContainer, true);

contentBg.addEventListener("mouseleave", () => {
  console.log("leave");
  isMouseDown = false;
  contentBg.style.cursor = "default";
});
