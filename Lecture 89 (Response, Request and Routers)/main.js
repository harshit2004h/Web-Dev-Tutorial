const express = require("express");
const blog = require("./routes/blog");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/blog", blog);

app.get("/", (req, res) => {
    res.send("Hello World!");
  })
  .post("/", (req, res) => {
    res.send("Hello World Post");
  })
  .put("/", (req, res) => {
    res.send("Hello World Put");
  })
  .delete("/", (req, res) => {
    res.send("Hello World Delete");
  });

app.get("/index", (req, res) => {
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4, name: ["Harshit", "Harsh"] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
