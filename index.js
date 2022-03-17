const express = require("express");
const app = express();
const themes = require('./themes.json');
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send(themes);
});

app.listen(PORT, () => {
  console.log("the server is listening");
});
