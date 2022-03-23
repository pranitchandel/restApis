const express = require("express");
const countryRoutes = require("./countryRoutes");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("pug", require("pug").__express);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// app.get("/", (req, res) => res.send("Hello!!!!"));
app.use("/", countryRoutes);
app.listen(5000, () => console.log("Server runnig on port 5000"));
