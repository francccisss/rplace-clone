export function populateGrid(row, col) {
  try {
    const resetFile = fs.writeFileSync("grids.json", JSON.stringify({}));
    const readJson = fs.readFileSync("./grids.json", "utf-8");
    const parseData = readJson ? JSON.parse(readJson) : {};

    let cells = [];
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        cells.push({
          id: `${i}-${j}`,
          class: `cell`,
          location: `${i}-${j}`,
        });
      }
    }
    console.log(cells);
    parseData.grid = cells;
    const stringifyGridData = JSON.stringify(parseData);
    const writeJson = fs.writeFileSync("grids.json", stringifyGridData);
  } catch (err) {
    console.log(err);
    throw err;
  }
}
