import { User } from "./Users.js";
import "./container.js";
import { PixelBoard } from "./PixelBoard.js";
const socket = io();
const pixelBoardContainer = document.getElementById("pixel-board-container");
const colorPicker = document.getElementById("color-picker");
const colorInput = document.getElementById("color-input");
const user = new User();
const pixelBoard = new PixelBoard(pixelBoardContainer);
const pickedColorDiv = document.getElementById("current-color");
(function () {
  const defaultColors = [
    "#FFFFFF",
    "#000000",
    "#2D2D2D",
    "#5F5F5F",
    "#F15555",
    "#9F4141",
    "#7B2121",
    "#B11919",
    "#FFF626",
    "#EDE86A",
    "#FFF968",
    "#55F181",
    "#1BFF5B",
    "#008625",
  ];
  const items = document.querySelectorAll(".item");
  const cells = document.querySelectorAll(".cell");
  items.forEach((item, i) => {
    if (i == 0) return;
    item.style.backgroundColor = defaultColors[i];
    item.id = defaultColors[i];
  });
  cells.forEach((cell) => {
    cell.style.backgroundColor = cell.dataset.color;
  });
})();

colorPicker.addEventListener("click", (e) => {
  const color = user.setColor(e);
  if (e.target.id !== "color-swatch") {
    pickedColorDiv.style.backgroundColor = color;
    pickedColorDiv.style.border = "1px solid #00000080";
  }
});
colorInput.addEventListener(
  "input",
  (e) => {
    const color = user.setColor(e);
    pickedColorDiv.style.backgroundColor = color;
    pickedColorDiv.style.border = "1px solid #00000080";
  },
  false
);
pixelBoardContainer.addEventListener("click", (e) => user.place(e));
socket.on("place", (data) => pixelBoard.updateBoard(data));
