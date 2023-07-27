export function populateGrid(row, col) {
  const readJson = fs.readFileSync("./grids.json", "utf-8");
  const parseData = readJson ? JSON.parse(readJson) : {};
  const cellArr = {
    cells: [],
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      cellArr.cells.push({
        id: `${i}-${j}`,
        class: `cell`,
        location: `${i}-${j}`,
      });
    }
  }
  console.log(cellArr.cells);
  parseData.grid = cellArr.cells;
  const stringifyGridData = JSON.stringify(parseData);
  const writeJson = fs.writeFileSync("grids.json", stringifyGridData);
}
