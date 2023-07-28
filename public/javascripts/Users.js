const socket = io();
export class User {
  constructor() {
    this.color = null;
  }

  setColor(e) {
    const target = e.target;
    if (target.id == "color-swatch") return;
    this.color = target.id;
  }

  place(e) {
    const target = e.target;
    if (!target.classList.contains("cell")) return;
    if (this.color === null) {
      console.log("color not set");
      // notify user to pick a color
      return;
    }
    const cellInfo = {
      ID: target.id,
      location: target.id,
      color: this.color,
      className: target.classList.contains("cell") && "cell",
    };
    console.log(cellInfo);
    target.style.backgroundColor = this.color;
    socket.emit("place", cellInfo);
  }
}
