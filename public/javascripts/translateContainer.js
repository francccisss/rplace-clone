const contentBg = document.getElementById("content-bg");
let isMouseDown = false;

function translatePixelContainer(e) {
  e.stopPropagation();
  const target = e.target;
  let mousePos = {
    x: e.clientX,
    y: e.clientY,
  };

  if (isMouseDown) {
    console.log(mousePos);
    if (target.classList.contains("cell")) {
      const board = target.parentNode;
      // let translatePosition = `${mousePos.x}px ${mousePos.y}px`;
      // board.style.translate = translatePosition;
    } else if (target.id === "content-bg") {
    }
  }
}
contentBg.addEventListener("mousedown", (e) => {
  if (e.button === 1) {
    isMouseDown = true;
  }
});

contentBg.addEventListener("mouseup", (e) => {
  isMouseDown = false;
});
contentBg.addEventListener("mousemove", translatePixelContainer, true);
