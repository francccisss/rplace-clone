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

  notifyUsers(message) {
    console.log(message);
    const userMessages = this.chatBox.children[0];
    const newP = document.createElement("p");
    newP.setAttribute("class", "chat-notif-message");
    newP.setAttribute("class", "message");
    newP.textContent = message;
    userMessages.appendChild(newP);
    console.log(userMessages);
  }
}
