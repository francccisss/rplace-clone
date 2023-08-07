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
const chatInput = document.getElementById("user-chat-input");
const chatBtn = document.getElementById("user-chat-btn");
const chatInputContainer = document.getElementById("chat-input-container");
const confirmBtn = document.getElementById("confirm-btn");
const chatBox = document.getElementById("chat-box");
const userMessages = document.getElementById("user-messages");
const chat = new Chat(chatBox);
const chatMinimizeBtn = document.getElementById("minimize-chat-btn");
let isScrolledToBottom = true;
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

function sendUserMessage(e) {
  e.preventDefault();
  console.log("submitted");
  user.sendMessage(chatInput.value);
  chatInput.value = "";
}

function setCurrentPickedColor(e) {
  const color = user.setColor(e);
  let hex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
  if (e.target.id !== "color-swatch" && hex.test(e.target.id)) {
    pickedColorDiv.style.backgroundColor = color;
    pickedColorDiv.style.border = "1px solid #00000080";
    pickedColorDiv.style.display = "inline-block";
    return;
  }
  if (e.target.id === "color-input") {
    pickedColorDiv.style.backgroundColor = color;
    pickedColorDiv.style.border = "1px solid #00000080";
    pickedColorDiv.style.display = "inline-block";
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  modal.showModal();
  await applyColorPicker();
  pixelBoardContainer.style.filter = "blur(10px)";
  colorPicker.style.filter = "blur(10px)";
  userMessages.scrollTo({
    top: userMessages.scrollHeight,
    behavior: "smooth",
  });
});

confirmBtn.addEventListener("click", () => {
  setNewUser();
  modal.close();
});

modal.addEventListener("cancel", setNewUser);

colorPicker.addEventListener("click", (e) => setCurrentPickedColor(e));
colorInput.addEventListener("input", (e) => setCurrentPickedColor(e), false);

pixelBoardContainer.addEventListener("click", (e) => user.place(e));
socket.on("place", (data) => pixelBoard.updateBoard(data));
socket.on("connect", () => {
  console.log(socket.id);
  guestId = socket.id;
});

chatInputContainer.addEventListener("submit", (e) => sendUserMessage(e));
chatBox.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.id === "minimize-chat-btn") {
    userMessages.classList.replace(
      "user-messages-active",
      "user-messages-inactive"
    );
    return;
  }
  userMessages.classList.replace(
    "user-messages-inactive",
    "user-messages-active"
  );
});

chatBox.addEventListener("keyup", (e) => {
  console.log(e.code);
});

chatBtn.addEventListener("click", (e) => sendUserMessage(e));

userMessages.addEventListener("scrollend", () =>
  userMessages.scrollTop === userMessages.scrollHeight - 300
    ? (isScrolledToBottom = true)
    : (isScrolledToBottom = false)
);

socket.on("user", (newUser) => {
  chat.addNewUser(newUser);
  chat.emitMessage(`${newUser.name} has joined!`, true);
});

socket.on("message", (newMessage) => {
  console.log("new message");
  chat.emitMessage(newMessage);

  if (isScrolledToBottom) {
    userMessages.scrollTo({
      top: userMessages.scrollHeight,
      behavior: "smooth",
    });
  }
});
