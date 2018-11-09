const express = require("express");
const router = express.Router();
const {catchErrors}  = require("../handlers/errorHandler");
const numerialToRoman = require("../controllers/numerialToRoman");
const homepage = require('../controllers/index')
const romainToNumerical = require('../controllers/romainToNumerical')
const api = () => {
  router.get("/", homepage)
  router.post("/numerial-to-roman", numerialToRoman);
   router.post("/roman-to-numerial", romainToNumerical);

  return router;
};
module.exports = api;