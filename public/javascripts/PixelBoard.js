class PixelBoard {
  constructor(board, rows = 100, cols = 100) {
    this.rows = rows;
    this.cols = cols;
    this.boardContainer = board;
  }

  updateBoard(data) {
    // loop throught board children find any cell that matches that data's location
    // and change the color to what the data specifies
  }

  getCells() {
    // loop the board children (cell) and return an array of cells
  }
}
