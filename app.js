const express = require('express');
const getAnimeImage = require('./controllers/controller.getImage')

const app = express();
app.get('/avatar', getAnimeImage)
// app.get('/', getAnimeImage)
app.use((req, res, next) => {
    res.status(404).send("Page Not Found")
})

app.listen(3000);