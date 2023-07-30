const fs = require("fs");

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
