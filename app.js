const express = require('express');
const animeRoute = require('./controllers/controller.getImage')

const app = express();
app.get('/api/avatar', animeRoute.getAnimeImage)
app.get('/api/animelist', animeRoute.getAnimeList) //? return json
app.use((req, res, next) => {
    res.status(404).send("Page Not Found")
})

app.listen(3000);