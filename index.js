var express = require("express");
var path = require("path");
const http = require("http");
var app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const indexRouter = require("./routes/index");

// view engine setup
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "app"));
app.set("view engine", "pug");

app.use("/", indexRouter);

io.on("connection", (socket) => {
  console.log(`user ${socket.id} connected`);

  socket.on("place", (msg) => {
    const toJsonMsg = JSON.stringify(msg);
    console.log(`user ${socket.id} sent: ${toJsonMsg}`);
    io.emit("place", msg);
  });

  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
