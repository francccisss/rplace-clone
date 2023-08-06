import { User } from "./Users.js";
import "./container.js";
import { PixelBoard } from "./PixelBoard.js";
import { Chat } from "./Chat.js";
const socket = io();
const pixelBoardContainer = document.getElementById("pixel-board-container");
const colorPicker = document.getElementById("color-picker");
const colorInput = document.getElementById("color-input");
const user = new User();
const pixelBoard = new PixelBoard(pixelBoardContainer);
const pickedColorDiv = document.getElementById("current-color");
const modal = document.getElementById("modal-container");
const nameInput = document.getElementById("name-input");
const confirmBtn = document.getElementById("confirm-btn");
const chatBox = document.getElementById("chat-box");
const chat = new Chat(chatBox);
let guestId;

async function applyColorPicker() {
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
}

function setNewUser() {
  pixelBoardContainer.style.filter = "blur(0px)";
  colorPicker.style.filter = "blur(0px)";
  user.setName(nameInput.value);
  if (user.getName() === null || user.getName() === "") {
    user.setName(guestId);
    modal.close();
    socket.emit("user", { name: user.getName() });
    return;
  }
  socket.emit("user", { name: user.getName() });
}

window.addEventListener("DOMContentLoaded", async () => {
  modal.showModal();
  await applyColorPicker();
  // pixelBoardContainer.style.filter = "blur(10px)";
  // colorPicker.style.filter = "blur(10px)";
});

confirmBtn.addEventListener("click", () => {
  setNewUser();
  modal.close();
});

modal.addEventListener("cancel", () => {
  setNewUser();
});

colorPicker.addEventListener("click", (e) => {
  const color = user.setColor(e);
  let hex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
  if (e.target.id !== "color-swatch" && hex.test(e.target.id)) {
    pickedColorDiv.style.backgroundColor = color;
    pickedColorDiv.style.border = "1px solid #00000080";
    pickedColorDiv.style.display = "inline-block";
  }
});
colorInput.addEventListener(
  "input",
  (e) => {
    const color = user.setColor(e);
    pickedColorDiv.style.backgroundColor = color;
    pickedColorDiv.style.border = "1px solid #00000080";
    pickedColorDiv.style.display = "inline-block";
  },
  false
);
pixelBoardContainer.addEventListener("click", (e) => user.place(e));
socket.on("place", (data) => pixelBoard.updateBoard(data));
socket.on("connect", () => {
  console.log(socket.id);
  guestId = socket.id;
});

socket.on("user", (newUser) => {
  chat.addNewUser(newUser);
  chat.emitMessage(`${newUser.name} has joined!`, true);
});
socket.on("message", (newMessage) => {
  chat.emitMessage(newMessage);
});
