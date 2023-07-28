import { User } from "./Users.js";
import { PixelBoard } from "./PixelBoard.js";
const socket = io();
const container = document.getElementById("pixel-board-container");
const colorPicker = document.getElementById("color-picker");
const user = new User();
const pixelBoard = new PixelBoard(container);
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

colorPicker.addEventListener("click", (e) => user.setColor(e));
container.addEventListener("click", (e) => user.place(e));

socket.on("place", (data) => pixelBoard.updateBoard(data));
