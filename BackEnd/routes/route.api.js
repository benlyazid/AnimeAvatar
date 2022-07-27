const express = require('express');
const router = express.Router();
const imagesController = require("../controllers/controller.image");
const valiatData = require('../middlewares/middleware.validateData')

router.get("/api/avatar", valiatData, imagesController.getAnimeImage);
router.get("/api/animelist", imagesController.getAnimeList); //? return json

module.exports = router;