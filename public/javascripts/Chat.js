export class Chat {
  constructor(chatBox) {
    this.messages = [];
    this.chatBox = chatBox;
  }

  addMessage(message) {
    this.messages.push(message);
    // for each message in messages
    // display the properties of each message
    // on the chat box
  }

  addNewUser(newUser) {
    this.messages.push(newUser);
  }

  emitMessage(data, isSystem = false) {
    console.log(data);
    const newP = document.createElement("p");
    const timeDisplay = document.createElement("span");
    const date = new Date(data.time);
    const timeMinutes = date.getUTCMinutes();
    const timeHours = date.getUTCHours();
    timeDisplay.setAttribute("class", "message-time");
    timeDisplay.textContent = `[${timeHours}:${
      timeMinutes.toString().length === 1
        ? "0" + timeMinutes.toString()
        : timeMinutes
    }]`;
    const userMessages = this.chatBox.children[0];
    if (isSystem) {
      newP.prepend(timeDisplay);
      console.log("called");
      newP.setAttribute("class", "message");
      newP.textContent = data;
      userMessages.appendChild(newP);
    } else {
      console.log("not system");
      const name = document.createElement("span");
      name.setAttribute("class", "user-name");
      newP.setAttribute("class", "message");
      name.textContent = `${data.name}:`;
      newP.textContent = data.message;
      newP.prepend(name);
      name.prepend(timeDisplay);
      userMessages.appendChild(newP);
    }
  }
}
