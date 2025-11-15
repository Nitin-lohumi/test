const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from CI/CD Auto Deploy!");
});

app.listen(3000, () => console.log("Server running on 3000"));
