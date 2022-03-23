const express = require("express");
const router = express.Router();
const fs = require("fs");
const countries = require("./countries.json");
const jwt = require("jsonwebtoken");
const localStorage = require("./localStorage");

router.get("/health", (req, res) => res.json({ msg: "Api is working" }));

router.get("/country/:countryCode", (req, res) => {
  const country = countries
    .filter((country, index) => country.code == req.params.countryCode)
    .reduce((a, b, i) => {
      a = b;
      return a;
    }, {});

  const result =
    Object.keys(country).length === 0
      ? `No country with code ${req.params.countryCode}`
      : country;
  res.json({ msg: result });
});

router.post("/add/country", (req, res) => {
  let countriesJson = fs.readFileSync("countries.json", "utf-8");
  let countriesArray = JSON.parse(countriesJson);
  const newCountry = {
    name: req.body.name,
    code: req.body.code,
    id: req.body.id,
  };
  countriesArray.push(newCountry);
  countriesJson = JSON.stringify(countriesArray);
  fs.writeFileSync("./countries.json", countriesJson, "utf-8");
  res.json(countriesArray);
});

router.get("/countries", (req, res) => {
  res.render("index", { table_data: countries });
});

router.post("/generateToken", (req, res) => {
  const token = jwt.sign({ id: 123 }, "JWTPrivateKey");

  localStorage.setItem("JWTToken", token);
  res.json(localStorage.getItem("JWTToken"));
});

router.post("/verifyToken", (req, res) => {
  const inputToken = req.body.token;
  const result =
    inputToken === localStorage.getItem("JWTToken")
      ? "Authenticated"
      : "invalid token";
  res.json({ msg: result });
});
module.exports = router;
