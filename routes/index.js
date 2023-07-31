const express = require("express");
const router = express.Router();
const fs = require("fs");

const middleware = [
  (req, res, next) => {
    const readGridFile = fs.readFileSync("./grids.json", "utf-8");
    const parseGridData = JSON.parse(readGridFile);
    req.gridData = parseGridData;
    next();
  },
  (req, res) => {
    res.render("index", {
      title: "r/place clone",
      gridData: req.gridData,
      rowAndCols: { rows: 15, cols: 20 },
    });
  },
];

router.get("/", middleware);

module.exports = router;
