// const socket = io();
export class User {
  constructor() {
    this.color;
  }

  setColor(e) {
    const target = e.target;
    if (target.id == "color-swatch") return;
    this.color = target.id;
    console.log(this.color);
  }

  place(e) {
    const target = e.target;
    console.log(target);
    target.style.backgroundColor = this.color;
    // an event handler for on click event on a board
    // get the current postion of the user's mouse when he clicks a cell
    // returning that cell's information
    // then parse the information to a cell <T>
    // {
    //  id:"1-0",
    //  class:"pixel",
    //  color: this.color,
    //  location:"1-0"
    // }
    // maybe return data and pass method returned data to socket.emit("place",data);
    //
  }
}
