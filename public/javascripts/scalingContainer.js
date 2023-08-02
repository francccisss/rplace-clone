const contentBg = document.getElementById("content-bg");
const pixelBoard = document.getElementById("pixel-board-container");
let scale = 1;
function scalePixelContainer(e) {
  e.preventDefault();
  console.log(e.deltaY);
  scale += e.deltaY * -0.005;
  scale = Math.min(Math.max(0.5, scale), 5);
  pixelBoard.style.transform = `scale(${scale})`;
}

contentBg.addEventListener("wheel", scalePixelContainer, { passive: false });
