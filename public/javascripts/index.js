import { User } from "./Users.js";
const user = new User();
const socket = io();
const pixelBoardContainer = document.getElementById("pixel-board-container");
const colorPicker = document.getElementById("color-picker");
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
  items.forEach((item, i) => {
    if (i == 0) return;
    item.style.backgroundColor = defaultColors[i];
    item.id = defaultColors[i];
  });
})();

colorPicker.addEventListener("click", (e) => user.setColor(e));
pixelBoardContainer.addEventListener("click", (e) => user.place(e));
