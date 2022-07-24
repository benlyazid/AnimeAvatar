const express = require('express');
const getAnimeImage = require('./controllers/controller.getImage')

const app = express();
app.get('/avatar', getAnimeImage)

app.listen(3000);