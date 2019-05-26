const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const data = [
  "Apple",
  "Mango",
  "Microsoft",
  "Netflix",
  "Google",
  "Amazon",
  "Uber",
  "Medium",
  "Facebook"
];

app.get("/", (req, res) => {
  res.json(data);
});

app.get("/nope", (req, res) => {
  res.send("NOPE!!");
});

app.get("/shit", (req, res) => {
  res.json({
    msg: "Damn Dude!"
  });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
