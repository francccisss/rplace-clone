const fs = require("fs");

// need to handle this asynchronously, while a client is placing a color to a cell,
// this function process blocks all other processes until this one finishes,
// that means that the other clients that are supposed to get the emited event are not able to
// because of blocked process that this function needs to finish
function updateGrids(file, modifiedCell) {
  try {
    const readJson = fs.readFileSync(file, "utf-8", (err, data) => {
      if (err) throw err;
    });
    const parseData = readJson ? JSON.parse(readJson) : {};

    const mapGrid = parseData.grid.map((cell) => {
      if (cell.id === modifiedCell.id) {
        console.log(modifiedCell);
        return modifiedCell;
      }
      return cell;
    });
    const stringifyGridData = JSON.stringify({ grid: mapGrid });
    const updateJson = fs.writeFileSync(file, stringifyGridData);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = updateGrids;
