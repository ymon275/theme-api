const express = require("express");
const app = express();
const themes = require('./themes.json');
const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).send(themes);
});

app.listen(PORT, () => {
  console.log("its alive on 5000");
});
