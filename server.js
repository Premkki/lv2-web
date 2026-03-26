const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/slike", (req, res) => {
  const images = Array.from({ length: 8 }, (_, index) => ({
    url: `https://picsum.photos/400/300?random=${index + 1}`,
    id: `slika${index + 1}`,
    title: `Nasumična slika ${index + 1}`,
  }));

  res.render("slike", { images });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server pokrenut na portu ${PORT}`);
});
