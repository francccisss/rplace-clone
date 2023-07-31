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
  // whenever a user places a color on the second column of ever row
  // it updates the last 5 or 4 elements with the same color and changes
  // their ids to match the 2nd column element's id
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
