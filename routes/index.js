const express = require("express");
const router = express.Router();
const fs = require("fs");

const routeHandlers = [
  (req, res, next) => {
    const readGridFile = fs.readFileSync("./grids.json", "utf-8");
    const parseGridData = JSON.parse(readGridFile);
    console.log(readGridFile);
    next();
  },
  (req, res) => {
    res.render("index", { title: "r/place clone" });
  },
];

router.get("/", routeHandlers);

module.exports = router;
