export class PixelBoard {
  constructor(container) {
    this.boardContainer = container;
  }

  updateBoard({ id, location, className, color }) {
    const cells = Array.from(this.boardContainer.children);
    cells.map((cell) => {
      if (cell.id === id) {
        cell.style.backgroundColor = color;
      }
    });
  }

  getCells() {
    // loop the board children (cell) and return an array of cells
  }
}
