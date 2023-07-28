export class PixelBoard {
  constructor(container) {
    this.boardContainer = container;
  }

  updateBoard({ ID, location, className, color }) {
    const cells = Array.from(this.boardContainer.children);
    console.log(ID);
    cells.map((cell) => {
      if (cell.id.includes(ID)) {
        cell.style.backgroundColor = color;
      }
    });
  }

  getCells() {
    // loop the board children (cell) and return an array of cells
  }
}
