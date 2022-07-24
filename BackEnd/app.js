const express = require("express");
const animeRoute = require("./controllers/controller.getImage");
var cors = require('cors')

const app = express();
app.use(cors())
app.get("/api/avatar", animeRoute.getAnimeImage);
app.get("/api/animelist", animeRoute.getAnimeList); //? return json
app.use((req, res, next) => {
  res.status(404).send("Page Not Found");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
