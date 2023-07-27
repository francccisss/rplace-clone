const socket = io();
class User {
  constructor() {}
  place(target) {
    // an event handler for on click event on a board
    // get the current postion of the user's mouse when he clicks a cell
    // returning that cell's information
    // then parse the information to a cell <T>
    // {
    //  id:"1-0",
    //  class:"pixel",
    //  color:"hex",
    //  location:"1-0"
    // }
    // maybe return data and pass method returned data to socket.emit("place",data);
    //
  }
}
