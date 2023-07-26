const socket = io();

console.log("init");

const btn = document.querySelector(".btn");
const input = document.querySelector("#input");
const messages = document.querySelector("#chat-messages");
let add = 0;

socket.on("message", ({ sender, msg }) => {
  console.log(msg);
  const message = document.createElement("li");
  message.textContent = `${sender} said: ${msg}`;
  messages.appendChild(message);
});

socket.on("connect", () => {
  console.log("client is connected ");
});
socket.on("disconnect", (reason) => {
  socket.emit("board state", "new board state");
  console.log("client is disconnected");
});

btn.addEventListener("click", () => {
  socket.emit("message", input.value);
  input.value = "";
});
