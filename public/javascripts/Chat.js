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
    const userMessages = this.chatBox.children[0];
    if (isSystem) {
      console.log("called");
      newP.setAttribute("class", "message");
      newP.textContent = data;
      userMessages.appendChild(newP);
    } else {
      console.log("not system");
      const newSpan = document.createElement("span");
      newSpan.setAttribute("class", "user-name");
      newP.setAttribute("class", "message");
      newSpan.textContent = `${data.name}:`;
      newP.textContent = data.message;
      newP.prepend(newSpan);
      userMessages.appendChild(newP);
    }
  }
}
