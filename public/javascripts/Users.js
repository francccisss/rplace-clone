const socket = io();
export class User {
  constructor() {
    this.color = null;
    this.name;
  }

  setName(input) {
    this.name = input;
    return this.name;
  }

  getName() {
    return this.name;
  }

  setColor(e) {
    const target = e.target;
    let hex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    if (hex.test(target.id)) {
      console.log(target);
      this.color = target.id;
      return this.color;
    }
    if (target.id === "color-input") {
      console.log(target);
      this.color = target.value;
      return target.value;
    }
  }
  place(e) {
    e.stopPropagation();
    const target = e.target;
    if (!target.classList.contains("cell")) return;
    if (this.color === null) {
      console.log("color not set");
      // notify user to pick a color
      return;
    }
    const cellInfo = {
      id: target.id,
      location: target.id,
      color: this.color,
      className: target.classList.contains("cell") && "cell",
    };
    console.log(cellInfo);
    target.style.backgroundColor = this.color;
    socket.emit("place", cellInfo);
  }
}
