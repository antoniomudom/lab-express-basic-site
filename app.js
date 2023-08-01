const express = require("express");
const app = express();
const port = 3001;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/work", (req, res) => {
  res.sendFile(__dirname + "/views/work.html");
});
app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
