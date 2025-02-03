const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./models/employee.js");
const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/company");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
let salaries = [50000, 60000, 55000, 70000, 65000];
let languages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
let cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];
let condition = [true, false];

app.get("/generate", async(req, res) => {
    await Employee.deleteMany({})

  for (let i = 1; i <= 10; i++) {
    let e = await Employee.create({
      name: names[Math.floor(Math.random() * 6)],
      salary: salaries[Math.floor(Math.random() * 6)],
      language: languages[Math.floor(Math.random() * 6)],
      city: cities[Math.floor(Math.random() * 6)],
      isManager: condition[Math.floor(Math.random() * 2)],
    });

  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
