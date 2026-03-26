const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Poslužuje sve statičke datoteke iz mape public
app.use(express.static(path.join(__dirname, "public")));

// Početna stranica
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server pokrenut na portu ${PORT}`);
});
