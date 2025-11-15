const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello this is docker ci/cd running");
});

app.listen(3000, () => console.log("Server running on 3000"));
