const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.get("/hello", (req, res) => {
  res.send("hello");
});

const port = 8080;
app.listen(port, () => console.log("listening on port 8080"));
