const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

//Middleware 1
app.use((req, res, next) => {
  req.harshit = "Hello Middleware";
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`);
  console.log(`${Date.now()} is a ${req.method}`);
  next();
});

//Middleware 2
app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Us    "+req.harshit);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
