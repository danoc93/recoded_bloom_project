const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ myName: "Re: Coded" });
});

app.listen(3005, () => {
  console.log(`Example app listening at http://localhost:3005`);
});
