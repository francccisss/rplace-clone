export class PixelBoard {
  constructor(container) {
    this.boardContainer = container;
  }

  updateBoard(data) {
    console.log(data);
    console.log(this.boardContainer);
  }

  getCells() {
    // loop the board children (cell) and return an array of cells
  }
}
