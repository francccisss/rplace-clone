const socket = io();

console.log("init");

const btn = document.querySelector(".btn");
let add = 0;

socket.on("message", (text) => {
  console.log(text);
});

btn.addEventListener("click", () => {
  socket.emit("message", "yeet");
  console.log(add);
  add++;
});
