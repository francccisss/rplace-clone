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
    console.log(req.gridData);
    res.render("index", { title: "r/place clone", gridData: req.gridData });
  },
];

router.get("/", middleware);

module.exports = router;
