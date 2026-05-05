const express = require("express");
const { add } = require("./calculator");

const app = express();

app.get("/", (req, res) => {
  res.send("SIT725 6.2C Testing Project");
});

app.get("/api/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  res.json({ result: add(a, b) });
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}