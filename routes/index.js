var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/message", function (req, res, next) {
  const response = {
    message: "Welcome",
  };
  res.status(200).json(response).end();
});

router.get("/about", function (req, res, next) {
  const response = {
    name: "Vegard",
    about: "Homework project deplyed to render",
  };
  res.status(200).json(response).end();
});

router.get("/random-number", function (req, res, next) {
  const randomNum = Math.round(Math.random() * 9 + 1);
  res.status(200).json(randomNum).end();
});

module.exports = router;
