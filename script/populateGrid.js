const fs = require("fs");
function populateGrid(row, col, file) {
  try {
    const resetFile = fs.writeFileSync(file, JSON.stringify({}));
    const readJson = fs.readFileSync(file, "utf-8");
    const parseData = readJson ? JSON.parse(readJson) : {};

    let cells = [];
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        cells.push({
          id: `${i}-${j}`,
          className: `cell`,
          location: `${i}-${j}`,
        });
      }
    }
    console.log(cells);
    parseData.grid = cells;
    const stringifyGridData = JSON.stringify(parseData);
    const writeJson = fs.writeFileSync(file, stringifyGridData);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

populateGrid(32, 64, "grids.json");
