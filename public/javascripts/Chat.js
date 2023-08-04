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

    //
  }
}
